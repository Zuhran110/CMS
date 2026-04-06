import { useForm } from "react-hook-form";
import axios from "axios";
import type { FormValues } from "./Conact-Form.types";
import type { SavedImages } from "./sections/ConatctUsProps";
import { useRef, useEffect, useState } from "react";
import Hero from "./sections/Hero";
import GetInTouch from "./sections/GetInTouch";
import {
  buildContactFormData,
  mapContactFormDefaults,
  mapContactSavedImages,
} from "./contactUS.helpers";
import { API_BASE_URL } from "../../../config/api";

const BACKEND = API_BASE_URL;

const ContactUS = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [savedImages, setSavedImages] = useState<SavedImages>({});
  const saveMessageTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const res = await axios.get(`${BACKEND}/api/content/contact-us`);
        const c = res.data.content;
        if (!c) return;

        setSavedImages(mapContactSavedImages(c));
        reset(mapContactFormDefaults(c));
      } catch {
        // silently ignore — form keeps its defaults
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, [reset]);

  const showSaveMessage = (msg: string) => {
    setSaveMessage(msg);
    if (saveMessageTimer.current) clearTimeout(saveMessageTimer.current);
    saveMessageTimer.current = setTimeout(() => {
      setSaveMessage(null);
    }, 4000);
  };

  const onSubmit = async (data: FormValues) => {
    setSaving(true);
    setSaveMessage(null);
    try {
      const token = localStorage.getItem("token");
      const formData = buildContactFormData(data, savedImages);

      const response = await axios.post(
        `${BACKEND}/api/content/contact-us`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setSavedImages(mapContactSavedImages(response.data?.content));
      showSaveMessage("Saved successfully!");
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { error?: string } } })?.response?.data
          ?.error ?? "Failed to save. Please try again.";
      setSaveMessage(message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="cms-form-shell mx-auto w-full max-w-5xl">
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="cms-form-shell mx-auto w-full max-w-5xl">
      <form
        className="space-y-6"
        action="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving} className="cms-btn-primary">
            {saving ? "Saving..." : "Save"}
          </button>
          {saveMessage && (
            <span
              className={`cms-status ${saveMessage === "Saved successfully!" ? "cms-status-success" : "cms-status-error"}`}
            >
              {saveMessage}
            </span>
          )}
        </div>
        <Hero
          register={register}
          errors={errors}
          control={control}
          savedImages={savedImages}
        />
        <GetInTouch
          register={register}
          errors={errors}
          control={control}
          savedImages={savedImages}
        />
      </form>
    </div>
  );
};

export default ContactUS;
