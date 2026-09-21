"use client";

import { useEffect, useMemo, useState } from "react";
import { insurers } from "@/data/insurers";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import DivisionsSection from "@/components/sections/DivisionsSection";
import FAQSection from "@/components/sections/FAQSection";
import FleetSection from "@/components/sections/FleetSection";
import HeroSection from "@/components/sections/HeroSection";
import InsuranceSection from "@/components/sections/InsuranceSection";
import ReviewsSection, { LocationSection } from "@/components/sections/ReviewsSection";
import TrustStripSection from "@/components/sections/TrustStripSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import RevealSection from "@/components/RevealSection";
import {
  BadgeCheck,
  CarFront,
  CheckCircle2,
  Clock3,
  Gauge,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const navItems = [
  { label: "Divisions", href: "#divisions" },
  { label: "Insurance Panels", href: "#insurance-panels" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

const trustBadges = [
  "Towing & Recovery",
  "Automotive Repair",
  "Insurance Claims",
  "Routine Service",
];

const trustStrip = [
  { label: "PIAM Approved", icon: ShieldCheck },
  { label: "Mitsubishi Service Experience", icon: Wrench },
  { label: "Insurance Panel Workshop", icon: BadgeCheck },
  { label: "Chassis Alignment", icon: CarFront },
  { label: "Spray Booth", icon: Sparkles },
  { label: "Fleet Maintenance", icon: Gauge },
  { label: "Computer Diagnostics", icon: Zap },
  { label: "24/7 Recovery", icon: Phone },
];

const whyChooseUs = [
  { title: "25+ Years Experience", description: "Operational expertise across body repair, diagnostics, and insurance claims handling.", icon: BadgeCheck },
  { title: "Certified Equipment", description: "Modern workshop tools and inspection systems that keep every repair precise and safe.", icon: Gauge },
  { title: "Insurance Panel Expertise", description: "Authorized support for claim procedures, inspections, and streamlined repair approvals.", icon: ShieldCheck },
  { title: "Fast Claim Processing", description: "Clear communication and efficient case management from intake to vehicle handover.", icon: Clock3 },
  { title: "24/7 Emergency Recovery", description: "Rapid towing support across Northern Sabah for stranded or damaged vehicles.", icon: Zap },
  { title: "Quality Inspection", description: "Strict delivery checks ensure safety, finish quality, and customer confidence.", icon: CheckCircle2 },
];

const testimonials = [
  {
    name: "Ahmad Bin Omar",
    role: "Fleet Owner",
    quote: "Their team handled our commercial vehicles with great care and speed. The communication was clear, and the turnaround was excellent.",
  },
  {
    name: "Nora Lim",
    role: "Private Vehicle Owner",
    quote: "The accident claim process was smooth from start to finish. We felt supported throughout the repair and delivery stage.",
  },
  {
    name: "Hassan A.",
    role: "Logistics Manager",
    quote: "We rely on their towing and repair support across Northern Sabah. They are responsive, professional, and dependable.",
  },
];

const fleetServices = [
  "Company fleet servicing",
  "Preventive maintenance schedules",
  "Brake and tyre inspection",
  "Battery and electrical checks",
  "Fleet inspection reporting",
  "Roadworthy compliance support",
];

const faqs = [
  { question: "Do you handle insurance claims in-house?", answer: "Yes. We support accident claim intake, document preparation, inspections, repair approvals, and final delivery coordination." },
  { question: "How long does a standard repair take?", answer: "Repair timelines vary by vehicle condition and insurer requirements, but most simple repairs are completed within a few days." },
  { question: "Are you an authorized insurance panel workshop?", answer: "Yes. We work with several major insurers and support panel-based repair and claim coordination for eligible cases." },
  { question: "Do you provide 24/7 towing?", answer: "Yes. We provide emergency towing and roadside response across Kota Marudu, Kudat, Pitas, and Kota Belud." },
  { question: "Do you support fleet maintenance contracts?", answer: "Yes. We provide preventive maintenance planning, inspection routines, and service support for commercial fleets." },
  { question: "What are your operating hours?", answer: "Our workshop is open Monday to Saturday from 8:00 AM to 5:00 PM, with emergency towing support available beyond standard hours." },
];

const divisions: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}> = [
  {
    icon: Wrench,
    title: "Mechanical & Electronic Diagnostics",
    description:
      "Advanced fault tracing for engine, gearbox, air-conditioning, and onboard systems.",
    bullets: ["Engine & gearbox diagnostics", "Scheduled maintenance", "Electrical fault isolation"],
  },
  {
    icon: CarFront,
    title: "Body, Frame & Spray Painting",
    description:
      "Precision restoration for collision-damaged vehicles using modern alignment and finish systems.",
    bullets: ["Chassis alignment", "Baking oven spray", "Panel repair & detailing"],
  },
  {
    icon: ShieldCheck,
    title: "Accident Claims & Legal Support",
    description:
      "End-to-end insurance coordination from paperwork and inspection to repair approval and delivery.",
    bullets: ["Documentation support", "Claim follow-up", "Legal claim guidance"],
  },
  {
    icon: Zap,
    title: "24/7 Roadside Assistance & Fleet Logistics",
    description:
      "Rapid recovery and towing coverage across Kota Marudu, Kudat, Pitas, and Kota Belud.",
    bullets: ["24/7 emergency towing", "Fleet support", "Northern Sabah coverage"],
  },
];

const insurerPanels = insurers;

const claimsSteps = [
  { step: "01", title: "Accident Response", text: "Immediate intake, tow coordination, and case documentation." },
  { step: "02", title: "Inspection", text: "Damage review, insurer briefing, and repair estimate approvals." },
  { step: "03", title: "Repair", text: "Professional restoration with live progress updates and quality checks." },
  { step: "04", title: "Delivery", text: "Final completion, handover, and post-repair support." },
];

const caseStudyTabs = [
  { id: "restorations", label: "Restorations" },
  { id: "engines", label: "Engine Overhauls" },
  { id: "fleet", label: "Fleet Maintenance" },
] as const;

const caseStudies: Record<(typeof caseStudyTabs)[number]["id"], Array<{
  title: string;
  category: string;
  description: string;
  metric: string;
  accent: string;
}>> = {
  restorations: [
    {
      title: "Toyota Hilux Collision Restoration",
      category: "Body & Paint",
      description: "Rear-end collision repair with structural straightening and premium baking oven finish.",
      metric: "4.2 days turnaround",
      accent: "from-orange-500 to-amber-400",
    },
    {
      title: "Perodua Myvi Insurance Rebuild",
      category: "Panel & Fabrication",
      description: "Complete body restoration for a high-usage family vehicle with hidden panel alignment corrections.",
      metric: "3.6 days turnaround",
      accent: "from-sky-500 to-cyan-400",
    },
    {
      title: "Nissan Navara Paint Recovery",
      category: "Respray & Detailing",
      description: "Approved insurer repair covering paint matching, bumper restoration, and final finishing.",
      metric: "5.1 days turnaround",
      accent: "from-violet-500 to-fuchsia-400",
    },
  ],
  engines: [
    {
      title: "Honda Civic Engine Overhaul",
      category: "Mechanical Repair",
      description: "Complete engine rebuild including compression tuning, cooling system review, and calibration checks.",
      metric: "92% performance recovery",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      title: "Proton Saga Transmission Service",
      category: "Diagnostics",
      description: "Electronic transmission fault tracing and major service completion with drivability optimization.",
      metric: "1.8 days completion",
      accent: "from-red-500 to-orange-400",
    },
    {
      title: "Mitsubishi Triton Cooling System Repair",
      category: "Preventive Maintenance",
      description: "Cooling system diagnosis and repair that eliminated recurring overheating and engine stress.",
      metric: "36% better thermal stability",
      accent: "from-indigo-500 to-blue-400",
    },
  ],
  fleet: [
    {
      title: "Logistics Fleet Preventive Maintenance",
      category: "Commercial Support",
      description: "Multi-unit fleet service plan to keep delivery vehicles operating without interruption.",
      metric: "97% uptime",
      accent: "from-orange-500 to-yellow-400",
    },
    {
      title: "Tourism Van Roadworthiness Review",
      category: "Compliance",
      description: "Safety inspection, maintenance cycle management, and operator documentation for recurring hires.",
      metric: "14 vehicles serviced",
      accent: "from-cyan-500 to-sky-400",
    },
    {
      title: "Utility Fleet Brake & Suspension Tune-Up",
      category: "Vehicle Safety",
      description: "High-load fleet performance checks and brake system updates before harsh driving conditions.",
      metric: "2.4 days per vehicle",
      accent: "from-amber-500 to-orange-400",
    },
  ],
};

const contactDetails = [
  { icon: MapPin, title: "Workshop Address", text: "Kg Goshen, Jalan Lotong, 89107 Kota Marudu, Sabah" },
  { icon: Phone, title: "Workshop Contacts", text: "088-662662 / 088-663158" },
  { icon: Clock3, title: "Business Hours", text: "Mon-Sat: 8:00 AM - 5:00 PM" },
];

const googleReviewsUrl = "https://maps.app.goo.gl/EQfsLEsZ9Bkc6HmeA";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [activeTab, setActiveTab] = useState<(typeof caseStudyTabs)[number]["id"]>("restorations");
  const [currentTime, setCurrentTime] = useState("8:00 AM");
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [headerCompact, setHeaderCompact] = useState(false);
  const MAIN_PAGE_HEADER_THRESHOLD = 680;

  const filterOptions = ["All", "General Motor", "Motorcycle", "Fleet"] as const;

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setCurrentTime(formatted);
    };

    updateClock();
    const timer = window.setInterval(updateClock, 60000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowBackToTop(currentScrollY > 350);
      setHeaderCompact(currentScrollY > MAIN_PAGE_HEADER_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredPanels = useMemo(() => {
    return insurerPanels.filter((panel) => {
      const matchesFilter = filter === "All" || panel.category === filter;
      const matchesSearch =
        panel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        panel.coverage.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  const progressPercent =
    typeof window !== "undefined" && typeof document !== "undefined"
      ? Math.min((scrollY / (document.body.scrollHeight - window.innerHeight || 1)) * 100, 100)
      : 0;

  return (
    <div className="mx-auto min-h-screen w-full max-w-[1920px] bg-[#fffdf7] text-slate-800">
      <div className="w-full px-0">
      <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-yellow-200/80">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 transition-all duration-200"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/60198520907"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
          aria-label="WhatsApp emergency contact"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="tel:0198520907"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-400/30 transition hover:scale-105"
          aria-label="Emergency towing contact"
        >
          <Phone size={24} />
        </a>
      </div>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-28 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-300 bg-white text-slate-800 shadow-lg shadow-yellow-100 transition hover:bg-yellow-50"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <div className="sticky top-0 z-50 border-b border-[#0d2340] bg-[#0d2340] text-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-center gap-3 overflow-hidden px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] lg:px-6">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
          <div className="flex min-w-0 animate-[marquee_18s_linear_infinite] items-center gap-8 whitespace-nowrap">
            <span>WORKSHOP ACTIVE | 24/7 Emergency Towing Available</span>
            <span className="text-yellow-400">•</span>
            <span>Kota Marudu | Kudat | Pitas | Kota Belud</span>
            <span className="text-yellow-400">•</span>
            <span className="text-yellow-300">Live Status: {currentTime}</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-[40px] z-40 border-b-4 border-yellow-400 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          headerCompact ? "shadow-sm" : "shadow-none"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center transition-all duration-300 ${
            headerCompact ? "h-14 justify-start px-4 py-2 lg:px-8" : "h-20 justify-between px-4 py-4 lg:px-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src="/images/jhauto.jpeg"
              alt="Joo Hwang Workshop Sdn Bhd logo"
              className={`w-auto transition-all duration-300 ${headerCompact ? "h-9" : "h-14"}`}
            />
          </div>

          {!headerCompact && (
            <>
              <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.08em] text-[#0d2340] md:flex">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="relative py-2 transition hover:text-red-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full">
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="tel:0198520907"
                  className="hidden rounded-full bg-[#d62828] px-4 py-2 text-sm font-bold text-white shadow-sm shadow-red-200 transition hover:bg-[#b91f1f] sm:inline-flex"
                >
                  Emergency Towing
                </a>
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0d2340] bg-white text-[#0d2340] md:hidden">
                  <Menu size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      <main>
        <RevealSection direction="left">
          <HeroSection trustBadges={trustBadges} />
        </RevealSection>
        <RevealSection direction="right">
          <TrustStripSection items={trustStrip} />
        </RevealSection>
        <RevealSection direction="left">
          <AboutSection />
        </RevealSection>
        <RevealSection direction="right">
          <WhyChooseUsSection items={whyChooseUs} />
        </RevealSection>
        <RevealSection direction="left">
          <DivisionsSection divisions={divisions} />
        </RevealSection>
        <RevealSection direction="right">
          <InsuranceSection
            panels={insurerPanels}
            filterOptions={filterOptions}
            filter={filter}
            searchTerm={searchTerm}
            onFilterChange={setFilter}
            onSearchChange={setSearchTerm}
            claimsSteps={claimsSteps}
          />
        </RevealSection>
        <RevealSection direction="left">
          <CaseStudiesSection
            tabs={caseStudyTabs}
            activeTab={activeTab}
            onTabChange={(tabId) => setActiveTab(tabId as (typeof caseStudyTabs)[number]["id"])}
            cases={caseStudies[activeTab]}
          />
        </RevealSection>
        <RevealSection direction="right">
          <FleetSection services={fleetServices} />
        </RevealSection>
        <RevealSection direction="left">
          <ReviewsSection googleReviewsUrl={googleReviewsUrl} testimonials={testimonials} />
        </RevealSection>
        <RevealSection direction="right">
          <LocationSection />
        </RevealSection>
        <RevealSection direction="left">
          <FAQSection items={faqs} />
        </RevealSection>
        <RevealSection direction="right">
          <ContactSection contactDetails={contactDetails} locationUrl={googleReviewsUrl} />
        </RevealSection>
      </main>

      <footer className="border-t border-yellow-200 bg-[#fffdf7]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Joo Hwang Workshop Sdn Bhd. Authorized automotive engineering and collision restoration.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2"><Gauge size={14} className="text-amber-600" /> Workshop Active</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> 24/7 Support</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}

