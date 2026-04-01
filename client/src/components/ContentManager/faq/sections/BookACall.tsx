import type { FaqSectionProps } from "./FaqProps";

const BookACall = ({ register, savedImages }: FaqSectionProps) => {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 p-4">
      <h2 className="text-base font-semibold text-slate-900">Book a Call</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="bookACall-heading"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Heading
          </label>
          <input
            type="text"
            id="bookACall-heading"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("bookACall.heading")}
          />
        </div>

        <div>
          <label
            htmlFor="bookACall-img"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Image
          </label>
          <input
            id="bookACall-img"
            type="file"
            accept="image/*"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("bookACall.img")}
          />
          {savedImages?.bookACallImg && (
            <img src={savedImages.bookACallImg} alt="Current book a call" className="mt-2 h-20 rounded object-cover" />
          )}
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="bookACall-description"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Description
          </label>
          <input
            type="text"
            id="bookACall-description"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            {...register("bookACall.description")}
          />
        </div>
      </div>
    </section>
  );
};

export default BookACall;
