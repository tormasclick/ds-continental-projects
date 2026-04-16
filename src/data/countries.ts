export interface Country {
  code: string;
  name: string;
  flag: string;
  description: string;
  capital?: string;
  projects?: string;
}

export const countries: Country[] = [
  {
    code: "TZ",
    name: "Tanzania",
    flag: "🇹🇿",
    description: "Mining operations and mineral exploration across the mainland.",
    capital: "Dodoma",
    projects: "15+ Active Projects"
  },
  {
    code: "KE",
    name: "Kenya",
    flag: "🇰🇪",
    description: "Headquarters. Equipment supply and security services.",
    capital: "Nairobi",
    projects: "20+ Active Projects"
  },
  {
    code: "UG",
    name: "Uganda",
    flag: "🇺🇬",
    description: "Industrial security and infrastructure projects.",
    capital: "Kampala",
    projects: "10+ Active Projects"
  },
  {
    code: "CD",
    name: "DR Congo",
    flag: "🇨🇩",
    description: "Mineral exploration and mining partnerships.",
    capital: "Kinshasa",
    projects: "12+ Active Projects"
  },
  {
    code: "RW",
    name: "Rwanda",
    flag: "🇷🇼",
    description: "Security deployments and equipment supply.",
    capital: "Kigali",
    projects: "8+ Active Projects"
  },
  {
    code: "BI",
    name: "Burundi",
    flag: "🇧🇮",
    description: "Emerging market operations and trading.",
    capital: "Gitega",
    projects: "5+ Active Projects"
  }
];
