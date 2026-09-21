import { ArrowRight, BadgeCheck, Star } from "lucide-react";

type HeroSectionProps = {
  trustBadges: string[];
};

export default function HeroSection({ trustBadges }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3efe9]">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(22,163,74,0.08) 0%, rgba(22,163,74,0.02) 100%), repeating-linear-gradient(135deg, rgba(18,52,45,0.06) 0 2px, transparent 2px 22px)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[46%] bg-[#111827]"
        style={{ clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[50%] opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 18px)",
          clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1600px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
        <div className="max-w-2xl pt-6 lg:pt-14">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
            <BadgeCheck size={14} />
            PIAM Panel • Mitsubishi Certified • Sabah Coverage
          </div>

          <p className="text-3xl font-light tracking-tight text-slate-700 md:text-4xl">Enriching Business</p>

          <h1 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-900 md:text-5xl lg:text-[5rem]">
            COMBINING <span className="text-[#0d8b74]">STRENGTHS,</span>
            <br />
            HARNESSING <span className="text-[#0d8b74]">SYNERGIES</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            With over 25 years of experience in the business, we have established a trusted reputation among
            leaders in the industry.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#insurance-panels"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0d8b74] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b6e60]"
            >
              Explore Panel Services
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:088662662"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-yellow-300"
            >
              Call Workshop
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <Star size={14} className="fill-yellow-400 text-yellow-500" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[620px]">
          <div
            className="absolute inset-x-0 bottom-0 top-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 54%)",
            }}
          />

          <div className="absolute bottom-0 left-8 right-0 top-8 hidden lg:block">
            <div
              className="absolute bottom-5 right-6 h-64 w-[78%] rounded-[32px] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 opacity-95 shadow-2xl shadow-slate-900/30"
              style={{ clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            />

            {[0, 1, 2].map((truckIndex) => (
              <div
                key={truckIndex}
                className="absolute bottom-0"
                style={{
                  left: `${8 + truckIndex * 24}%`,
                  transform: `scale(${1 - truckIndex * 0.1})`,
                  opacity: 1 - truckIndex * 0.18,
                }}
              >
                <div className="relative h-44 w-56">
                  <div className="absolute left-10 top-14 h-10 w-16 rounded-xl bg-slate-200/80 shadow-inner shadow-white/40" />
                  <div className="absolute left-16 top-7 h-8 w-20 rounded-xl bg-slate-100/80" />
                  <div className="absolute left-0 top-20 h-3 w-44 rounded-full bg-slate-600/80" />
                  <div className="absolute left-3 top-24 h-10 w-32 rounded-[18px] border border-slate-400/60 bg-slate-700/80" />
                  <div className="absolute left-36 top-23 h-8 w-10 rounded-full bg-slate-800" />
                  <div className="absolute left-24 top-24 h-8 w-24 rounded-full border border-slate-500 bg-slate-900/80" />
                  <div className="absolute right-3 top-16 h-2 w-10 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(252,211,77,0.8)]" />
                  <div className="absolute right-8 top-10 h-3 w-3 rounded-full bg-white" />
                  <div className="absolute left-5 top-20 h-3 w-3 rounded-full bg-orange-400" />
                  <div className="absolute left-14 top-20 h-3 w-3 rounded-full bg-orange-400" />
                  <div className="absolute left-3 bottom-4 h-7 w-7 rounded-full bg-slate-300" />
                  <div className="absolute left-28 bottom-4 h-7 w-7 rounded-full bg-slate-300" />
                  <div className="absolute left-44 bottom-4 h-7 w-7 rounded-full bg-slate-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 hidden lg:block">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="absolute rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{
                  left: `${10 + (index % 5) * 16}%`,
                  top: `${12 + Math.floor(index / 5) * 18}%`,
                  width: index % 2 === 0 ? "5px" : "7px",
                  height: index % 2 === 0 ? "5px" : "7px",
                  opacity: 0.4 + (index % 5) * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
