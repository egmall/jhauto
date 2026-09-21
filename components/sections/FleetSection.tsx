type FleetSectionProps = {
  services: string[];
};

export default function FleetSection({ services }: FleetSectionProps) {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Fleet services</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Operational support for everyday business mobility.</h2>
        </div>
        <a href="tel:0198520907" className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300">
          Request Fleet Proposal
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-yellow-200 bg-white p-6 shadow-sm shadow-yellow-100/60">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-yellow-100 bg-[#fffdf7] p-4 text-sm font-medium text-slate-700">
                {service}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-yellow-200 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Coverage</p>
          <h3 className="mt-3 text-2xl font-black text-slate-900">Northern Sabah coverage</h3>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-white px-4 py-3"><span>Kota Marudu</span><span>24/7</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-white px-4 py-3"><span>Kudat</span><span>Rapid response</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-white px-4 py-3"><span>Pitas</span><span>Emergency tow</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-white px-4 py-3"><span>Kota Belud</span><span>Fleet support</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
