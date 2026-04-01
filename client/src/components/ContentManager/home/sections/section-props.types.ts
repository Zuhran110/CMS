import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormValues } from "../home-form.types";

// Flat map of fieldname → current saved Cloudinary URL
// Keys match the backend field names (e.g. "bgImage", "heroCardImg_0")
export type SavedImages = Record<string, string | undefined>;

export type HomeSectionProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  control: Control<FormValues>;
  savedImages?: SavedImages;
};
