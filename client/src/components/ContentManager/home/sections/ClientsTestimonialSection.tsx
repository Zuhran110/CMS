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
    <section className="space-y-4 rounded-lg border border-slate-200 p-4">
      <h2 className="text-base font-semibold text-slate-900">
        Clients Testimonial
      </h2>

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

      <div className="space-y-4 rounded-md border border-slate-300 p-4">
        <h3 className="text-sm font-semibold text-slate-900">
          Testimonial cards (3)
        </h3>

        {testimonialCardDropdowns.map((card, index) => {
          const testimonialCardSummary =
            testimonialCards?.[index]?.testimonialTitle?.trim();

          return (
            <details
              key={card.id}
              className="rounded-md border border-slate-200 p-4"
            >
              <summary className="cursor-pointer text-sm font-semibold text-slate-800">
                {testimonialCardSummary || card.title}
              </summary>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
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
    </section>
  );
};

export default ClientsTestimonialSection;
