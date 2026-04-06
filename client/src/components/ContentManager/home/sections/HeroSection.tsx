import { cardDropdowns } from "../home-form.types";
import { useWatch } from "react-hook-form";
import type { HomeSectionProps } from "./section-props.types";

const HeroSection = ({ register, control, savedImages }: HomeSectionProps) => {
  const heroCardSections = useWatch({
    control,
    name: "heroCardSections",
  });

  return (
    <section className="cms-section-card overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="cms-section-header flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
        <span className="cms-section-accent h-4 w-1 rounded-full bg-indigo-500"></span>
        <h2 className="cms-section-title text-sm font-semibold uppercase tracking-wide text-slate-700">
          Hero section — home
        </h2>
      </div>
      <div className="cms-section-body space-y-4 p-5">

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="bgImage"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Background image
          </label>
          <input
            id="bgImage"
            type="file"
            accept="image/*"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("bgImage")}
          />
          {savedImages?.bgImage && (
            <img
              src={savedImages.bgImage}
              alt="Current background"
              className="mt-2 h-20 rounded object-cover"
            />
          )}
        </div>

        <div>
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("title")}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="headingFirstText"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Heading — first part
        </label>
        <textarea
          id="headingFirstText"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("headingFirstText")}
        />
      </div>

      <div>
        <label
          htmlFor="headingMiddleText"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Heading — middle part
        </label>
        <textarea
          id="headingMiddleText"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("headingMiddleText")}
        />
      </div>

      <div>
        <label
          htmlFor="headingEndText"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Heading — end part
        </label>
        <textarea
          id="headingEndText"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("headingEndText")}
        />
      </div>

      <div>
        <label
          htmlFor="ukFlag"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          UK flag image
        </label>
        <input
          id="ukFlag"
          type="file"
          accept="image/*"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("ukFlag")}
        />
        {savedImages?.ukFlag && (
          <img
            src={savedImages.ukFlag}
            alt="Current UK flag"
            className="mt-2 h-20 rounded object-cover"
          />
        )}
      </div>

      <div>
        <label
          htmlFor="descriptionHeroHomepage"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Description
        </label>
        <textarea
          id="descriptionHeroHomepage"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("descriptionHeroHomepage")}
        />
      </div>

      <div>
        <label
          htmlFor="descriptionHeroHomePageTwo"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Description (second)
        </label>
        <textarea
          id="descriptionHeroHomePageTwo"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("descriptionHeroHomePageTwo")}
        />
      </div>

      <div>
        <label
          htmlFor="freeConsultation"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Free consultation text
        </label>
        <textarea
          id="freeConsultation"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("freeConsultation")}
        />
      </div>

      <div className="cms-subsection-card space-y-3 rounded-lg border border-slate-200 bg-slate-50/50 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Card section</h3>

        <div>
          <label
            htmlFor="heroCardName"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Card name
          </label>
          <select
            id="heroCardName"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("heroCardName")}
          >
            <option value="">Select card name</option>
            <option value="Services">Services</option>
            <option value="Features">Features</option>
            <option value="Highlights">Highlights</option>
          </select>
        </div>

        {cardDropdowns.map((dropdown, index) => {
          const heroCardSummary = heroCardSections?.[index]?.title?.trim();

          return (
            <details
              key={`hero-${dropdown.id}`}
              className="cms-accordion group rounded-lg border border-slate-200 bg-white"
            >
              <summary className="cms-accordion-summary flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                <span>{heroCardSummary || dropdown.title}</span>
                <svg className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="cms-accordion-content space-y-4 border-t border-slate-100 p-4">
                <div>
                  <label
                    htmlFor={`hero-${dropdown.id}-image`}
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Image
                  </label>
                  <input
                    id={`hero-${dropdown.id}-image`}
                    type="file"
                    accept="image/*"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    {...register(`heroCardSections.${index}.image`)}
                  />
                  {savedImages?.[`heroCardImg_${index}`] && (
                    <img
                      src={savedImages[`heroCardImg_${index}`]}
                      alt="Current card image"
                      className="mt-2 h-20 rounded object-cover"
                    />
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`hero-${dropdown.id}-title`}
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Title
                  </label>
                  <input
                    id={`hero-${dropdown.id}-title`}
                    type="text"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    {...register(`heroCardSections.${index}.title`)}
                  />
                </div>

                <div>
                  <label
                    htmlFor={`hero-${dropdown.id}-content`}
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Content
                  </label>
                  <input
                    id={`hero-${dropdown.id}-content`}
                    type="text"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    {...register(`heroCardSections.${index}.content`)}
                  />
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default HeroSection;


