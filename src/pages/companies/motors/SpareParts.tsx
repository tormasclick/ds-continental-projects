import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroMachinery from "@/assets/hero-machinery.jpg";
import { Package, Wrench, Settings, Cog } from "lucide-react";

const motorsNav = [
  { label: "Overview", path: "/companies/motors" },
  { label: "Excavators", path: "/companies/motors/excavators" },
  { label: "Tractors", path: "/companies/motors/tractors" },
  { label: "Engines", path: "/companies/motors/engines" },
  { label: "Import Services", path: "/companies/motors/import-services" },
  { label: "Projects", path: "/companies/motors/projects" },
  { label: "Spare Parts", path: "/companies/motors/spare-parts" },
  { label: "Calculator", path: "/companies/motors/import-calculator" },
  { label: "FAQ", path: "/companies/motors/faq" },
  { label: "Contact", path: "/companies/motors/contact" },
];

const categories = [
  { name: "Engine Parts", icon: Cog, desc: "Pistons, filters, gaskets, belts, and engine components." },
  { name: "Hydraulic Parts", icon: Settings, desc: "Hydraulic pumps, cylinders, hoses, and fittings." },
  { name: "Undercarriage", icon: Wrench, desc: "Track chains, rollers, sprockets, and idlers." },
  { name: "Wear Parts", icon: Package, desc: "Bucket teeth, cutting edges, ripper tips, and ground engaging tools." },
];

const SpareParts = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <HeroSection title="Spare Parts" subtitle="Genuine and OEM-spec spare parts for all major equipment brands." image={heroMachinery} primaryCta={{ label: "Request Parts", href: "/companies/motors/contact" }} />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Parts Categories" />
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <div key={c.name} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <c.icon className="w-10 h-10 text-electric-blue mb-4" />
              <h3 className="font-headline text-foreground">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <WhatsAppCTA message="Hello, I need spare parts for my equipment." label="Request Spare Parts" />
        </div>
      </div>
    </section>
  </SubsidiaryLayout>
);

export default SpareParts;
