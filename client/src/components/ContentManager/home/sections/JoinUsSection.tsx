import type { HomeSectionProps } from "./section-props.types";

const JoinUsSection = ({ register, errors }: HomeSectionProps) => {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 p-4">
      <h2 className="text-base font-semibold text-slate-900">joinUs</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="joinUs-heading"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            heading
          </label>
          <input
            id="joinUs-heading"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("joinUs.heading")}
          />
          {errors.joinUs?.heading && (
            <p className="mt-1 text-sm text-red-600">
              {errors.joinUs.heading.message as string}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="joinUs-bgimg"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            bgimg
          </label>
          <input
            id="joinUs-bgimg"
            type="file"
            accept="image/*"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("joinUs.bgimg")}
          />
          {errors.joinUs?.bgimg && (
            <p className="mt-1 text-sm text-red-600">
              {errors.joinUs.bgimg.message as string}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
