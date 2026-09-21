export type InsuranceProvider = {
  id: string;
  name: string;
  image: string;
  category: "General Motor" | "Motorcycle" | "Fleet";
  status: string;
  coverage: string;
};

export const insurers: InsuranceProvider[] = [
  {
    id: "aig",
    name: "AIG",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Active",
    coverage: "Comprehensive",
  },
  {
    id: "allianz",
    name: "Allianz",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Premier",
    coverage: "Repair",
  },
  {
    id: "amassurance",
    name: "AmAssurance",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Active",
    coverage: "Comprehensive",
  },
  {
    id: "aia",
    name: "AIA",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Active",
    coverage: "Claims",
  },
  {
    id: "etiqa",
    name: "Etiqa",
    image: "/images/insurers/placeholder.svg",
    category: "Motorcycle",
    status: "Active",
    coverage: "Roadside",
  },
  {
    id: "tokio-marine",
    name: "Tokio Marine",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Active",
    coverage: "Panel",
  },
  {
    id: "takaful",
    name: "Syarikat Takaful",
    image: "/images/insurers/placeholder.svg",
    category: "Fleet",
    status: "Active",
    coverage: "Commercial",
  },
  {
    id: "msig",
    name: "MSIG",
    image: "/images/insurers/placeholder.svg",
    category: "Fleet",
    status: "Active",
    coverage: "Commercial",
  },
  {
    id: "qbe",
    name: "QBE",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Preferred",
    coverage: "Repair",
  },
  {
    id: "pacific-insurance",
    name: "Pacific Insurance",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Active",
    coverage: "Claims",
  },
  {
    id: "rhb-insurance",
    name: "RHB Insurance",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Active",
    coverage: "Repair",
  },
  {
    id: "zurich",
    name: "Zurich",
    image: "/images/insurers/placeholder.svg",
    category: "General Motor",
    status: "Active",
    coverage: "Commercial",
  },
];
