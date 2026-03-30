import mongoose from "mongoose";
import { z } from "zod";

// --- Zod validation schema ---
// This describes what valid data looks like
export const HomeContentSchemaZod = z.object({
  // Hero section
  bgImage: z.string().optional(),
  ukFlag: z.string().optional(),
  title: z.string().optional(),
  headingTextFirst: z.string().optional(),
  headingTextMiddle: z.string().optional(),
  headingTextEnd: z.string().optional(),
  description: z.string().optional(),
  description2: z.string().optional(),
  freeConsultation: z.string().optional(),
  cardSelector: z.string().optional(),
  heroCards: z
    .array(
      z.object({
        heroCardImg: z.string().optional(),
        heroCardTitle: z.string().optional(),
        heroCardContent: z.string().optional(),
      }),
    )
    .optional(),

  // Why Outsource section
  whyOutsoutcing: z.string().optional(),
  headingWhyOutsoutcing: z.string().optional(),
  descriptionWhyOutsoutcing: z.string().optional(),
  imgWhyOutsoutcing: z.string().optional(),
  imgtwoWhyOutsoutcing: z.string().optional(),
  whyOutSourceAccounting: z.string().optional(),
  whyOutsoutcingCards: z
    .array(
      z.object({
        whyCardImage: z.string().optional(),
        whyCardPointerText: z.string().optional(),
      }),
    )
    .optional(),

  // Service Cards section
  headingServiceSection: z.string().optional(),
  descriptionServiceSection: z.string().optional(),
  serviceCards: z
    .array(
      z.object({
        imgServiceCard: z.string().optional(),
        titleServiceCard: z.string().optional(),
        descriptionServiceCard: z.string().optional(),
        buttontxtServiceCard: z.string().optional(),
        pglink: z.string().optional(),
      }),
    )
    .optional(),

  // How We Work section
  headingHowWeWork: z.string().optional(),
  howWeWorkSteps: z
    .array(
      z.object({
        stepNumber: z.string().optional(),
        howWeWorkIcon: z.string().optional(),
        stepTitle: z.string().optional(),
        stepDescription: z.string().optional(),
      }),
    )
    .optional(),
  lineOne: z.string().optional(),
  lineTwo: z.string().optional(),

  // Testimonials section
  headingClientsTestimonial: z.string().optional(),
  testimonialsCard: z
    .array(
      z.object({
        testimonialBgImg: z.string().optional(),
        testimonialPersonImg: z.string().optional(),
        testimonialTitle: z.string().optional(),
        testimonialDescription: z.string().optional(),
        testimonialPersonName: z.string().optional(),
      }),
    )
    .optional(),

  // Topbar
  email: z.string().optional(),
  number: z.string().optional(),
  eNumber: z.string().optional(),

  // Join Us
  joinUsHeading: z.string().optional(),
  joinUsBgImage: z.string().optional(),
});

// TypeScript type inferred from the Zod schema
export type IHomeContent = z.infer<typeof HomeContentSchemaZod>;

// --- Mongoose sub-schemas (for array items) ---
// _id: false means MongoDB won't add an ID to each array item
const HeroCardSchema = new mongoose.Schema(
  { heroCardImg: String, heroCardTitle: String, heroCardContent: String },
  { _id: false },
);
const WhyCardSchema = new mongoose.Schema(
  { whyCardImage: String, whyCardPointerText: String },
  { _id: false },
);
const ServiceCardSchema = new mongoose.Schema(
  {
    imgServiceCard: String,
    titleServiceCard: String,
    descriptionServiceCard: String,
    buttontxtServiceCard: String,
    pglink: String,
  },
  { _id: false },
);
const HowWeWorkStepSchema = new mongoose.Schema(
  {
    stepNumber: String,
    howWeWorkIcon: String,
    stepTitle: String,
    stepDescription: String,
  },
  { _id: false },
);
const TestimonialSchema = new mongoose.Schema(
  {
    testimonialBgImg: String,
    testimonialPersonImg: String,
    testimonialTitle: String,
    testimonialDescription: String,
    testimonialPersonName: String,
  },
  { _id: false },
);

// --- Main Mongoose schema ---
const HomeContentSchema = new mongoose.Schema(
  {
    bgImage: String,
    ukFlag: String,
    title: String,
    headingTextFirst: String,
    headingTextMiddle: String,
    headingTextEnd: String,
    description: String,
    description2: String,
    freeConsultation: String,
    cardSelector: String,
    heroCards: [HeroCardSchema],

    whyOutsoutcing: String,
    headingWhyOutsoutcing: String,
    descriptionWhyOutsoutcing: String,
    imgWhyOutsoutcing: String,
    imgtwoWhyOutsoutcing: String,
    whyOutSourceAccounting: String,
    whyOutsoutcingCards: [WhyCardSchema],

    headingServiceSection: String,
    descriptionServiceSection: String,
    serviceCards: [ServiceCardSchema],

    headingHowWeWork: String,
    howWeWorkSteps: [HowWeWorkStepSchema],
    lineOne: String,
    lineTwo: String,

    headingClientsTestimonial: String,
    testimonialsCard: [TestimonialSchema],

    email: String,
    number: String,
    eNumber: String,
    joinUsHeading: String,
    joinUsBgImage: String,
  },
  { timestamps: true }, // automatically adds createdAt and updatedAt fields
);

export default mongoose.model("HomeContent", HomeContentSchema);
