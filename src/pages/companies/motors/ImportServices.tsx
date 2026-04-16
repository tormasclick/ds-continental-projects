import { Link } from "react-router-dom";
import { Ship, FileCheck, Truck, Globe, ArrowRight } from "lucide-react";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroMachinery from "@/assets/hero-machinery.jpg";

const motorsNav = [
  { label: "Overview", path: "/companies/motors" },
  { label: "Excavators", path: "/companies/motors/excavators" },
  { label: "Tractors", path: "/companies/motors/tractors" },
  { label: "Engines", path: "/companies/motors/engines" },
  { label: "Import Services", path: "/companies/motors/import-services" },
  { label: "Spare Parts", path: "/companies/motors/spare-parts" },
  { label: "Calculator", path: "/companies/motors/import-calculator" },
  { label: "FAQ", path: "/companies/motors/faq" },
  { label: "Contact", path: "/companies/motors/contact" },
];

const steps = [
  { icon: Globe, title: "Sourcing", desc: "We identify and source equipment from trusted global manufacturers." },
  { icon: FileCheck, title: "Inspection & Documentation", desc: "Pre-shipment inspection, documentation, and regulatory compliance." },
  { icon: Ship, title: "Shipping & Logistics", desc: "End-to-end shipping management including customs clearance." },
  { icon: Truck, title: "Delivery & Setup", desc: "Final-mile delivery and on-site equipment setup." },
];

const ImportServices = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <HeroSection title="Import Services" subtitle="Complete machinery import from international manufacturers to your project site." image={heroMachinery} primaryCta={{ label: "Import Calculator", href: "/companies/motors/import-calculator" }} />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Import Process" subtitle="A streamlined 4-step process from source to site." />
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-electric-blue" />
              </div>
              <span className="text-xs font-subheading text-industrial-red uppercase">Step {i + 1}</span>
              <h3 className="mt-2 font-headline text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted text-center">
      <div className="container mx-auto px-4">
        <SectionHeading title="Estimate Your Import Costs" subtitle="Use our interactive calculator to get an instant cost estimate." />
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/companies/motors/import-calculator" className="px-6 py-3 bg-primary text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
            Open Calculator <ArrowRight className="w-4 h-4" />
          </Link>
          <WhatsAppCTA message="Hello, I need help importing machinery." />
        </div>
      </div>
    </section>
  </SubsidiaryLayout>
);

export default ImportServices;
