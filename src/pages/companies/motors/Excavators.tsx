import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Truck } from "lucide-react";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroMachinery from "@/assets/hero-machinery.jpg";

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

const excavatorTypes = [
  { name: "Large Excavators", desc: "20+ ton excavators for mining, quarrying, and large-scale construction. Designed for maximum power and durability.", specs: ["Operating weight: 20–90 tons", "Engine: 150–500 HP", "Bucket capacity: 1.0–5.0 m³"], href: "/companies/motors/excavators/large" },
  { name: "Medium Excavators", desc: "10–20 ton excavators for general construction, utility work, and site preparation.", specs: ["Operating weight: 10–20 tons", "Engine: 80–150 HP", "Bucket capacity: 0.5–1.2 m³"], href: "/companies/motors/excavators/medium" },
  { name: "Mini Excavators", desc: "Under 10 ton compact excavators for urban construction, landscaping, and confined spaces.", specs: ["Operating weight: 1–10 tons", "Engine: 15–80 HP", "Bucket capacity: 0.02–0.5 m³"], href: "/companies/motors/excavators/mini" },
];

const faqs = [
  { question: "What brands of excavators do you supply?", answer: "We source from leading global manufacturers including Caterpillar, Komatsu, Hitachi, Volvo, and JCB. We can also source specific brands on request." },
  { question: "Do you offer financing for excavator purchases?", answer: "Yes, we work with financial partners to offer flexible payment plans and leasing options for qualifying clients." },
  { question: "What is the delivery timeline?", answer: "Delivery timelines vary by model and destination. Typically 4–8 weeks for in-stock models and 8–16 weeks for custom orders." },
  { question: "Do you provide operator training?", answer: "Yes, we offer comprehensive operator training programs for all equipment we supply." },
];

const Excavators = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <HeroSection
      title="Excavators"
      subtitle="Large, medium, and mini excavators for construction, mining, and industrial projects across Africa."
      image={heroMachinery}
      primaryCta={{ label: "Request a Quote", href: "/companies/motors/contact" }}
    />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Excavator Range" subtitle="Choose the right excavator for your project." />
        <div className="grid md:grid-cols-3 gap-8">
          {excavatorTypes.map((e, i) => (
            <div key={e.name} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-48 gradient-navy flex items-center justify-center">
                <Truck className="w-16 h-16 text-electric-blue opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-xl text-foreground">{e.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                <ul className="mt-4 space-y-1">
                  {e.specs.map((s) => (
                    <li key={s} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-electric-blue rounded-full" /> {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <WhatsAppCTA message={`Hello, I'm interested in ${e.name}.`} label="Inquire" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} title="Excavator FAQ" />
  </SubsidiaryLayout>
);

export default Excavators;
