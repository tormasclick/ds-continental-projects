import { Wrench } from "lucide-react";
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
  { label: "Spare Parts", path: "/companies/motors/spare-parts" },
  { label: "Calculator", path: "/companies/motors/import-calculator" },
  { label: "FAQ", path: "/companies/motors/faq" },
  { label: "Contact", path: "/companies/motors/contact" },
];

const tractorTypes = [
  { name: "Agricultural Tractors", desc: "High-performance tractors for farming, plowing, and crop management.", specs: ["Power range: 50–200 HP", "4WD available", "PTO-equipped"] },
  { name: "Industrial Tractors", desc: "Heavy-duty tractors for construction sites, warehouses, and industrial yards.", specs: ["Power range: 80–300 HP", "Reinforced chassis", "Multi-attachment compatible"] },
  { name: "Utility Tractors", desc: "Versatile tractors for landscaping, municipal work, and light construction.", specs: ["Power range: 25–100 HP", "Compact design", "Easy maintenance"] },
];

const faqs = [
  { question: "What tractor brands do you carry?", answer: "We supply tractors from John Deere, Massey Ferguson, New Holland, Kubota, and other leading manufacturers." },
  { question: "Can you deliver to rural areas?", answer: "Yes, we handle logistics to all regions including remote and rural areas across East and Central Africa." },
  { question: "Do you offer warranty on tractors?", answer: "All new tractors come with manufacturer warranty. We also offer extended warranty options." },
];

const Tractors = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <HeroSection title="Tractors" subtitle="Agricultural, industrial, and utility tractors for operations across Africa." image={heroMachinery} primaryCta={{ label: "Request a Quote", href: "/companies/motors/contact" }} />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Tractor Range" subtitle="Tractors for every application." />
        <div className="grid md:grid-cols-3 gap-8">
          {tractorTypes.map((t, i) => (
            <div key={t.name} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-48 gradient-navy flex items-center justify-center">
                <Wrench className="w-16 h-16 text-electric-blue opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-xl text-foreground">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-4 space-y-1">
                  {t.specs.map((s) => (
                    <li key={s} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-electric-blue rounded-full" /> {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppCTA message={`Hello, I'm interested in ${t.name}.`} label="Inquire" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} title="Tractor FAQ" />
  </SubsidiaryLayout>
);

export default Tractors;
