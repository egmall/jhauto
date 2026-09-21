export default function AboutSection() {
  return (
    <section className="mx-auto grid max-w-[1600px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
      <div className="relative overflow-hidden rounded-[30px] border border-yellow-200 bg-white p-3 shadow-lg shadow-yellow-100">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="h-64 rounded-[24px] bg-gradient-to-br from-yellow-100 via-yellow-200 to-amber-200" />
          <div className="h-64 rounded-[24px] bg-gradient-to-br from-slate-100 to-yellow-50" />
        </div>
        <div className="mt-3 h-52 rounded-[24px] bg-gradient-to-br from-white to-yellow-50" />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">About us</p>
        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Engineering trust across every repair journey.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Joo Hwang Workshop Sdn Bhd is a premium automotive engineering and collision repair centre serving Northern Sabah with a focus on dependable service, accurate diagnostics, and insurance-backed restoration.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Our team combines workshop discipline, technical experience, and customer-first communication to deliver repair outcomes that are safe, efficient, and consistent with insurer expectations.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[20px] border border-yellow-200 bg-white p-4">
            <p className="text-3xl font-black text-amber-700">25+</p>
            <p className="mt-2 text-sm text-slate-600">Years operation</p>
          </div>
          <div className="rounded-[20px] border border-yellow-200 bg-white p-4">
            <p className="text-3xl font-black text-amber-700">1,000+</p>
            <p className="mt-2 text-sm text-slate-600">Vehicles serviced</p>
          </div>
          <div className="rounded-[20px] border border-yellow-200 bg-white p-4">
            <p className="text-3xl font-black text-amber-700">24/7</p>
            <p className="mt-2 text-sm text-slate-600">Tow response</p>
          </div>
        </div>
      </div>
    </section>
  );
}
