import type { AboutUsSectionProps } from "./AboutUsProp";

const AboutUsSection = ({ register, errors, control, savedImages }: AboutUsSectionProps) => {
  void errors; void control;
  return (
    <section className="cms-subsection-card space-y-4 rounded-lg border border-slate-200 p-4">
      <h2 className="text-base font-semibold text-slate-900">
        Hero section home
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="heading"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            heading
          </label>
          <input
            type="text"
            id="heading"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("heading")}
          />
        </div>
        <div>
          <label
            htmlFor="subHeading"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            subHeading
          </label>
          <input
            type="text"
            id="subHeading"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("subHeading")}
          />
        </div>
        <div>
          <label
            htmlFor="bgImage"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Background image
          </label>
          <input
            id="imgHero"
            type="file"
            accept="image/*"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("imgHero")}
          />
          {savedImages?.imgHero && (
            <img src={savedImages.imgHero} alt="Current hero" className="mt-2 h-20 rounded object-cover" />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

