import type { LucideIcon } from "lucide-react";

type WhyChooseUsItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type WhyChooseUsSectionProps = {
  items: WhyChooseUsItem[];
};

export default function WhyChooseUsSection({ items }: WhyChooseUsSectionProps) {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Why choose us</p>
        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Reliable repair standards and responsive support.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map(({ title, description, icon: Icon }) => (
          <div key={title} className="rounded-[24px] border border-yellow-200 bg-white p-6 shadow-sm shadow-yellow-100/60">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-amber-700">
              <Icon size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
