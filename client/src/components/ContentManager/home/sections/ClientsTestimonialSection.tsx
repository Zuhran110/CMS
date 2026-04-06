import { testimonialCardDropdowns } from "../home-form.types";
import { useWatch } from "react-hook-form";
import type { HomeSectionProps } from "./section-props.types";

const ClientsTestimonialSection = ({
  register,
  errors,
  control,
  savedImages,
}: HomeSectionProps) => {
  const testimonialCards = useWatch({
    control,
    name: "clientsTestimonial.testimonialCards",
  });

  return (
    <section className="cms-section-card overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="cms-section-header flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
        <span className="cms-section-accent h-4 w-1 rounded-full bg-indigo-500"></span>
        <h2 className="cms-section-title text-sm font-semibold uppercase tracking-wide text-slate-700">
          Clients Testimonial
        </h2>
      </div>
      <div className="cms-section-body space-y-4 p-5">

      <div>
        <label
          htmlFor="clientsTestimonial-heading"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Heading
        </label>
        <input
          id="clientsTestimonial-heading"
          type="text"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          {...register("clientsTestimonial.heading")}
        />
        {errors.clientsTestimonial?.heading && (
          <p className="mt-1 text-sm text-red-600">
            {errors.clientsTestimonial.heading.message as string}
          </p>
        )}
      </div>

      <div className="cms-subsection-card space-y-3 rounded-lg border border-slate-200 bg-slate-50/50 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Testimonial cards (3)
        </h3>

        {testimonialCardDropdowns.map((card, index) => {
          const testimonialCardSummary =
            testimonialCards?.[index]?.testimonialTitle?.trim();

          return (
            <details
              key={card.id}
              className="cms-accordion group rounded-lg border border-slate-200 bg-white"
            >
              <summary className="cms-accordion-summary flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                <span>{testimonialCardSummary || card.title}</span>
                <svg className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="cms-accordion-content border-t border-slate-100 p-4 grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${card.id}-testimonialBgImg`}
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Background image
                  </label>
                  <input
                    id={`${card.id}-testimonialBgImg`}
                    type="file"
                    accept="image/*"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    {...register(
                      `clientsTestimonial.testimonialCards.${index}.testimonialBgImg`,
                    )}
                  />
                  {savedImages?.[`testimonialBgImg_${index}`] && (
                    <img src={savedImages[`testimonialBgImg_${index}`]} alt="Current background" className="mt-2 h-20 rounded object-cover" />
                  )}
                  {(
                    errors.clientsTestimonial?.testimonialCards?.[index]
                      ?.testimonialBgImg as { message?: string }
                  )?.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {
                        (
                          errors.clientsTestimonial?.testimonialCards?.[index]
                            ?.testimonialBgImg as { message?: string }
                        ).message
                      }
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${card.id}-testimonialPersonImg`}
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Person image
                  </label>
                  <input
                    id={`${card.id}-testimonialPersonImg`}
                    type="file"
                    accept="image/*"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    {...register(
                      `clientsTestimonial.testimonialCards.${index}.testimonialPersonImg`,
                    )}
                  />
                  {savedImages?.[`testimonialPersonImg_${index}`] && (
                    <img src={savedImages[`testimonialPersonImg_${index}`]} alt="Current person image" className="mt-2 h-20 rounded object-cover" />
                  )}
                  {(
                    errors.clientsTestimonial?.testimonialCards?.[index]
                      ?.testimonialPersonImg as { message?: string }
                  )?.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {
                        (
                          errors.clientsTestimonial?.testimonialCards?.[index]
                            ?.testimonialPersonImg as { message?: string }
                        ).message
                      }
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${card.id}-testimonialTitle`}
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Title
                  </label>
                  <input
                    id={`${card.id}-testimonialTitle`}
                    type="text"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    {...register(
                      `clientsTestimonial.testimonialCards.${index}.testimonialTitle`,
                    )}
                  />
                  {(
                    errors.clientsTestimonial?.testimonialCards?.[index]
                      ?.testimonialTitle as { message?: string }
                  )?.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {
                        (
                          errors.clientsTestimonial?.testimonialCards?.[index]
                            ?.testimonialTitle as { message?: string }
                        ).message
                      }
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${card.id}-testimonialDescription`}
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Description
                  </label>
                  <textarea
                    id={`${card.id}-testimonialDescription`}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    {...register(
                      `clientsTestimonial.testimonialCards.${index}.testimonialDescription`,
                    )}
                  />
                  {(
                    errors.clientsTestimonial?.testimonialCards?.[index]
                      ?.testimonialDescription as { message?: string }
                  )?.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {
                        (
                          errors.clientsTestimonial?.testimonialCards?.[index]
                            ?.testimonialDescription as { message?: string }
                        ).message
                      }
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor={`${card.id}-testimonialPersonName`}
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Person name
                </label>
                <input
                  id={`${card.id}-testimonialPersonName`}
                  type="text"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  {...register(
                    `clientsTestimonial.testimonialCards.${index}.testimonialPersonName`,
                  )}
                />
                {(
                  errors.clientsTestimonial?.testimonialCards?.[index]
                    ?.testimonialPersonName as { message?: string }
                )?.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {
                      (
                        errors.clientsTestimonial?.testimonialCards?.[index]
                          ?.testimonialPersonName as { message?: string }
                      ).message
                    }
                  </p>
                )}
              </div>
            </details>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default ClientsTestimonialSection;


