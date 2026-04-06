import type { HomeSectionProps } from "./section-props.types";

const JoinUsSection = ({ register, errors, savedImages }: HomeSectionProps) => {
  return (
    <section className="cms-section-card overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="cms-section-header flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
        <span className="cms-section-accent h-4 w-1 rounded-full bg-indigo-500"></span>
        <h2 className="cms-section-title text-sm font-semibold uppercase tracking-wide text-slate-700">Join Us</h2>
      </div>
      <div className="cms-section-body space-y-4 p-5">

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="joinUs-heading"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Heading
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
            Background image
          </label>
          <input
            id="joinUs-bgimg"
            type="file"
            accept="image/*"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("joinUs.bgimg")}
          />
          {savedImages?.joinUsBgImage && (
            <img src={savedImages.joinUsBgImage} alt="Current background" className="mt-2 h-20 rounded object-cover" />
          )}
          {errors.joinUs?.bgimg && (
            <p className="mt-1 text-sm text-red-600">
              {errors.joinUs.bgimg.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default JoinUsSection;


