import type { HomeSectionProps } from "./section-props.types";

const HowWeWorkSection = ({ register, errors }: HomeSectionProps) => {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 p-4">
      <h2 className="text-base font-semibold text-slate-900">How We Work</h2>

      <div>
        <label
          htmlFor="howWeWork-heading"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Heading
        </label>
        <input
          id="howWeWork-heading"
          type="text"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("howWeWork.heading")}
        />
        {errors.howWeWork?.heading && (
          <p className="mt-1 text-sm text-red-600">
            {errors.howWeWork.heading.message as string}
          </p>
        )}
      </div>

      {/* Step 1 */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="howWeWork-one"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Step 1 — number
          </label>
          <input
            id="howWeWork-one"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("howWeWork.one")}
          />
          {errors.howWeWork?.one && (
            <p className="mt-1 text-sm text-red-600">
              {errors.howWeWork.one.message as string}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="howWeWork-title"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Step 1 — title
          </label>
          <input
            id="howWeWork-title"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("howWeWork.title")}
          />
          {errors.howWeWork?.title && (
            <p className="mt-1 text-sm text-red-600">
              {errors.howWeWork.title.message as string}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="howWeWork-oneIcon"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Step 1 — icon
        </label>
        <input
          id="howWeWork-oneIcon"
          type="file"
          accept="image/*"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("howWeWork.oneIcon")}
        />
        {errors.howWeWork?.oneIcon && (
          <p className="mt-1 text-sm text-red-600">
            {errors.howWeWork.oneIcon.message as string}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="howWeWork-description"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Step 1 — description
        </label>
        <textarea
          id="howWeWork-description"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("howWeWork.description")}
        />
        {errors.howWeWork?.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.howWeWork.description.message as string}
          </p>
        )}
      </div>

      {/* Step 2 */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="howWeWork-two"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Step 2 — number
          </label>
          <input
            id="howWeWork-two"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("howWeWork.two")}
          />
          {errors.howWeWork?.two && (
            <p className="mt-1 text-sm text-red-600">
              {errors.howWeWork.two.message as string}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="howWeWork-titleTwo"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Step 2 — title
          </label>
          <input
            id="howWeWork-titleTwo"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("howWeWork.titleTwo")}
          />
          {errors.howWeWork?.titleTwo && (
            <p className="mt-1 text-sm text-red-600">
              {errors.howWeWork.titleTwo.message as string}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="howWeWork-twoIcon"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Step 2 — icon
        </label>
        <input
          id="howWeWork-twoIcon"
          type="file"
          accept="image/*"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("howWeWork.twoIcon")}
        />
        {errors.howWeWork?.twoIcon && (
          <p className="mt-1 text-sm text-red-600">
            {errors.howWeWork.twoIcon.message as string}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="howWeWork-descriptionTwo"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Step 2 — description
        </label>
        <textarea
          id="howWeWork-descriptionTwo"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("howWeWork.descriptionTwo")}
        />
        {errors.howWeWork?.descriptionTwo && (
          <p className="mt-1 text-sm text-red-600">
            {errors.howWeWork.descriptionTwo.message as string}
          </p>
        )}
      </div>

      {/* Step 3 */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="howWeWork-three"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Step 3 — number
          </label>
          <input
            id="howWeWork-three"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("howWeWork.three")}
          />
          {errors.howWeWork?.three && (
            <p className="mt-1 text-sm text-red-600">
              {errors.howWeWork.three.message as string}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="howWeWork-threeTitle"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Step 3 — title
          </label>
          <input
            id="howWeWork-threeTitle"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("howWeWork.threeTitle")}
          />
          {errors.howWeWork?.threeTitle && (
            <p className="mt-1 text-sm text-red-600">
              {errors.howWeWork.threeTitle.message as string}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="howWeWork-threeIcon"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Step 3 — icon
        </label>
        <input
          id="howWeWork-threeIcon"
          type="file"
          accept="image/*"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("howWeWork.threeIcon")}
        />
        {errors.howWeWork?.threeIcon && (
          <p className="mt-1 text-sm text-red-600">
            {errors.howWeWork.threeIcon.message as string}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="howWeWork-threeDescription"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Step 3 — description
        </label>
        <textarea
          id="howWeWork-threeDescription"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("howWeWork.threeDescription")}
        />
        {errors.howWeWork?.threeDescription && (
          <p className="mt-1 text-sm text-red-600">
            {errors.howWeWork.threeDescription.message as string}
          </p>
        )}
      </div>

      {/* Connector lines */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="howWeWork-lineOne"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Connector line 1
          </label>
          <input
            id="howWeWork-lineOne"
            type="file"
            accept="image/*"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("howWeWork.lineOne")}
          />
          {errors.howWeWork?.lineOne && (
            <p className="mt-1 text-sm text-red-600">
              {errors.howWeWork.lineOne.message as string}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="howWeWork-lineTwo"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Connector line 2
          </label>
          <input
            id="howWeWork-lineTwo"
            type="file"
            accept="image/*"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("howWeWork.lineTwo")}
          />
          {errors.howWeWork?.lineTwo && (
            <p className="mt-1 text-sm text-red-600">
              {errors.howWeWork.lineTwo.message as string}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
