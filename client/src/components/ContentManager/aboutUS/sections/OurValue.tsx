import { useFieldArray } from "react-hook-form";
import type { AboutUsSectionProps } from "./AboutUsProp";

const OurValue = ({ register, errors, control, savedImages }: AboutUsSectionProps) => {
  const { fields, append } = useFieldArray({
    control,
    name: "OurValue",
  });

  return (
    <section className="space-y-4 rounded-lg border border-slate-200 p-4">
      <h2 className="text-base font-semibold text-slate-900">
        Our Value ({fields.length})
      </h2>

      {fields.map((field, index) => (
        <details
          key={field.id}
          className="rounded-md border border-slate-200"
        >
          <summary className="cursor-pointer bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800">
            {`Card ${index + 1}`}
          </summary>

          <div className="grid gap-4 border-t border-slate-200 p-4 md:grid-cols-2">
            <div>
              <label
                htmlFor={`imgValue-${index}`}
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Image
              </label>
              <input
                id={`imgValue-${index}`}
                type="file"
                accept="image/*"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                {...register(`OurValue.${index}.imgValue`)}
              />
              {savedImages?.[`imgValue_${index}`] && (
                <img src={savedImages[`imgValue_${index}`]} alt="Current value image" className="mt-2 h-20 rounded object-cover" />
              )}
            </div>

            <div>
              <label
                htmlFor={`headingValue-${index}`}
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Heading
              </label>
              <input
                id={`headingValue-${index}`}
                type="text"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                {...register(`OurValue.${index}.headingValue`)}
              />
              {errors.OurValue?.[index]?.headingValue && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.OurValue[index]?.headingValue?.message as string}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor={`descriptionValue-${index}`}
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Description
              </label>
              <input
                id={`descriptionValue-${index}`}
                type="text"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                {...register(`OurValue.${index}.descriptionValue`)}
              />
            </div>
          </div>
        </details>
      ))}

      <div className="flex items-center justify-end">
        <button
          type="button"
          onClick={() =>
            append({
              imgValue: undefined as unknown as FileList,
              headingValue: "",
              descriptionValue: "",
            })
          }
          className="text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          + Add a card
        </button>
      </div>
    </section>
  );
};

export default OurValue;
