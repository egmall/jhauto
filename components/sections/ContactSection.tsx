import { Clock3, MapPin, Phone } from "lucide-react";

type ContactDetail = {
  icon: typeof MapPin;
  title: string;
  text: string;
};

type ContactSectionProps = {
  contactDetails: ContactDetail[];
};

export default function ContactSection({ contactDetails }: ContactSectionProps) {
  return (
    <section id="contact" className="border-t border-yellow-200 bg-[#fffefb]">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Visit & contact</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Reliable support for drivers, fleets, and insurers.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {contactDetails.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[22px] border border-yellow-200 bg-white p-5">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-amber-700">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{title}</p>
                  <p className="mt-3 text-base font-medium text-slate-800">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-yellow-200 bg-white p-6 shadow-md shadow-yellow-100">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Emergency support</p>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-[#fffdf7] p-4">
                <span>Workshop</span>
                <span className="font-semibold text-slate-900">088-662662</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-[#fffdf7] p-4">
                <span>Workshop Line</span>
                <span className="font-semibold text-slate-900">088-663158</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-[#fffdf7] p-4">
                <span>Towing</span>
                <span className="font-semibold text-slate-900">019-8520907</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-[#fffdf7] p-4">
                <span>24/7 Backup</span>
                <span className="font-semibold text-slate-900">016-8330907</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Kg+Goshen+Jalan+Lotong+89107+Kota+Marudu+Sabah"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                Navigate with Google Maps
              </a>
              <a
                href="https://waze.com/ul?q=Kg%20Goshen%20Jalan%20Lotong%2089107%20Kota%20Marudu%20Sabah"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-yellow-200 bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-yellow-300"
              >
                Open in Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
