import type { LucideIcon } from "lucide-react";

type DivisionItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

type DivisionsSectionProps = {
  divisions: DivisionItem[];
};

export default function DivisionsSection({ divisions }: DivisionsSectionProps) {
  return (
    <section id="divisions" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Core divisions</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Built for repair, recovery, and restoration.</h2>
        </div>
        <p className="max-w-xl text-slate-600">
          From diagnostics to insurer coordination, every division is designed to keep vehicles safe, roadworthy, and fully supported.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {divisions.map(({ icon: Icon, title, description, bullets }) => (
          <article key={title} className="group rounded-[24px] border border-yellow-200 bg-white p-6 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-100">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-amber-700">
              <Icon size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
