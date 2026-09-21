type FleetSectionProps = {
  services: string[];
};

export default function FleetSection({}: FleetSectionProps) {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Fleet services</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">NORTHERN SABAH COVERAGE.</h2>
        </div>
        <a href="tel:0198520907" className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300">
          Request Fleet Proposal
        </a>
      </div>

      <div className="rounded-[28px] border border-yellow-200 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 p-6 shadow-sm shadow-yellow-100/60 md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Coverage route</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">One connected line of support.</h3>
          </div>
          <p className="text-sm font-medium text-slate-600">24/7 towing and fleet response</p>
        </div>

        <div className="relative mt-10 grid gap-8 md:grid-cols-4 md:gap-0">
          <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-yellow-400 md:bottom-auto md:left-0 md:right-0 md:top-5 md:h-0.5 md:w-auto" />
          {[
            ["Kota Marudu", "24/7 primary base"],
            ["Kudat", "Rapid response"],
            ["Pitas", "Emergency tow"],
            ["Kota Belud", "Fleet support"],
          ].map(([destination, support], index) => (
            <div key={destination} className="relative flex items-center gap-5 md:block md:text-center">
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#d62828] text-sm font-black text-white shadow-md shadow-red-200 md:mx-auto">
                {index + 1}
              </div>
              <div className="rounded-2xl border border-yellow-200 bg-white px-4 py-3 text-left shadow-sm md:mx-3 md:mt-5 md:text-center">
                <p className="font-bold text-[#0d2340]">{destination}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{support}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
