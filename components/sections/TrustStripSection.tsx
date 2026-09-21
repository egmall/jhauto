import type { LucideIcon } from "lucide-react";

type TrustStripItem = {
  label: string;
  icon: LucideIcon;
};

type TrustStripSectionProps = {
  items: TrustStripItem[];
};

export default function TrustStripSection({ items }: TrustStripSectionProps) {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[26px] border border-yellow-200 bg-white py-4 shadow-sm shadow-yellow-100/60">
        <div className="flex min-w-max gap-8 px-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
          {[...items, ...items].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={`${item.label}-${index}`} className="flex items-center gap-3 whitespace-nowrap">
                <Icon size={16} className="text-amber-600" />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
