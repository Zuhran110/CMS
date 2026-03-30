import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormValues } from "../home-form.types";

export type HomeSectionProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  control: Control<FormValues>;
};
