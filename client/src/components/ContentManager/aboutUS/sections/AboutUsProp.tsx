import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormValues } from "../about-Form.types";

export type SavedImages = Record<string, string | undefined>;

export type AboutUsSectionProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  control: Control<FormValues>;
  savedImages?: SavedImages;
};
