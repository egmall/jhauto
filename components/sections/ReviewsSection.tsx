import { MapPin, Phone, Clock3, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type ReviewsSectionProps = {
  googleReviewsUrl: string;
  testimonials: Testimonial[];
};

export default function ReviewsSection({ googleReviewsUrl, testimonials }: ReviewsSectionProps) {
  return (
    <section className="bg-[#fffaf0] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex flex-col gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Google Reviews</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">TRUSTED BY CLIENTS WHO DEPEND ON FAST, QUALITY REPAIRS.</h2>
          </div>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-yellow-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-yellow-50"
          >
            View on Google Maps
          </a>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 rounded-[24px] border border-yellow-200 bg-white p-5 shadow-sm shadow-yellow-100/60 lg:justify-start">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} className="fill-current" />)}
          </div>
          <span className="text-2xl font-black text-slate-900">4.9/5</span>
          <span className="text-sm text-slate-600">Based on recent local customer feedback</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[24px] border border-yellow-200 bg-white p-6 shadow-sm shadow-yellow-100/60">
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} className="fill-current" />)}
              </div>
              <p className="text-base leading-7 text-slate-600">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-yellow-200 bg-white p-7 shadow-sm shadow-yellow-100/60">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Workshop location</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Find us in Kota Marudu.</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Serving vehicles across Kota Marudu, Kudat, Pitas, and Kota Belud with towing support, bodywork, and repair coordination.
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3 rounded-2xl border border-yellow-100 bg-[#fffdf7] p-4">
              <MapPin className="mt-0.5 h-5 w-5 text-amber-700" />
              <span>Kg Goshen, Jalan Lotong, 89107 Kota Marudu, Sabah</span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-yellow-100 bg-[#fffdf7] p-4">
              <Phone className="mt-0.5 h-5 w-5 text-amber-700" />
              <span>088-662662 / 088-663158 / 019-8520907</span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-yellow-100 bg-[#fffdf7] p-4">
              <Clock3 className="mt-0.5 h-5 w-5 text-amber-700" />
              <span>Mon - Sat, 8:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-yellow-200 bg-white p-2 shadow-lg shadow-yellow-100/60">
          <iframe
            title="Joo Hwang Workshop location"
            src="https://www.google.com/maps?q=6.4781729%2C116.7686509&z=17&output=embed"
            className="h-[420px] w-full rounded-[22px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
