import type { ChangeEvent } from "react";

type InsurancePanel = {
  id: string;
  name: string;
  image: string;
  category: string;
  status: string;
  coverage: string;
};

type InsuranceSectionProps = {
  panels: InsurancePanel[];
  filterOptions: readonly string[];
  filter: string;
  searchTerm: string;
  onFilterChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  claimsSteps: Array<{ step: string; title: string; text: string }>;
};

export default function InsuranceSection({
  panels,
  filterOptions,
  filter,
  searchTerm,
  onFilterChange,
  onSearchChange,
  claimsSteps,
}: InsuranceSectionProps) {
  const filteredPanels = panels.filter((panel) => {
    const matchesFilter = filter === "All" || panel.category === filter;
    const matchesSearch =
      panel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      panel.coverage.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="insurance-panels" className="border-y border-yellow-200 bg-[linear-gradient(135deg,#f5f5f5_0%,#efefef_40%,#f7f7f7_100%)]">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Insurance panels</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">CLAIMS SUPPORT ACROSS TRUSTED PARTNER INSURERS.</h2>
          </div>
          <div className="flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              value={searchTerm}
              onChange={(event: ChangeEvent<HTMLInputElement>) => onSearchChange(event.target.value)}
              placeholder="Search insurer or service"
              className="w-full rounded-full border border-yellow-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onFilterChange(option)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === option
                  ? "border-yellow-400 bg-yellow-400 text-slate-900"
                  : "border-yellow-200 bg-white text-slate-700 hover:border-yellow-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/65 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] md:p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {filteredPanels.map((panel) => (
              <div
                key={panel.id}
                className="flex h-28 items-center justify-center rounded-[18px] border border-slate-200 bg-white/80 shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col items-center gap-2">
                  <img src={panel.image} alt={panel.name} className="h-12 w-12 rounded-full object-cover shadow-sm" />
                  <span className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
                    {panel.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-yellow-200 bg-white p-6 lg:p-8">
          <div className="mb-8 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Claims process</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">SIMPLE, TRANSPARENT, AND FAST.</h3>
            </div>
            <div className="hidden rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm text-slate-700 md:inline-flex">
              Step-by-step assistance
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {claimsSteps.map((item) => (
              <div key={item.step} className="relative rounded-[22px] border border-yellow-200 bg-[#fffdf7] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-black text-amber-700">{item.step}</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-amber-700">
                    <span className="text-lg">✦</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
