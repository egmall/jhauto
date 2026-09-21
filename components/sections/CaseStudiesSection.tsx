type CaseStudyItem = {
  title: string;
  category: string;
  description: string;
  metric: string;
  accent: string;
};

type CaseStudyTab = {
  id: string;
  label: string;
};

type CaseStudiesSectionProps = {
  tabs: ReadonlyArray<CaseStudyTab>;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  cases: CaseStudyItem[];
};

export default function CaseStudiesSection({ tabs, activeTab, onTabChange, cases }: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Case studies</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">RECENT WORK WITH MEASURABLE TURNAROUND OUTCOMES.</h2>
        </div>
        <div className="inline-flex rounded-full border border-yellow-200 bg-white p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id ? "bg-yellow-400 text-slate-900" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {cases.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[26px] border border-yellow-200 bg-white">
            <div className={`h-44 bg-gradient-to-br ${item.accent}`}>
              <div className="flex h-full items-end justify-between p-5">
                <span className="rounded-full border border-white/30 bg-slate-900/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {item.category}
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                  {item.metric}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
