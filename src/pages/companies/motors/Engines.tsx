import { Package } from "lucide-react";
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

const engineTypes = [
  { name: "Diesel Engines", desc: "Industrial-grade diesel engines for generators, pumps, and heavy equipment.", specs: ["Power: 50–2000 HP", "Tier 3/4 compliant", "Multiple displacement options"] },
  { name: "Replacement Engines", desc: "OEM and aftermarket replacement engines for machinery fleets.", specs: ["Compatible with major brands", "Rebuilt options available", "Warranty included"] },
];

const faqs = [
  { question: "Do you supply engines for specific machinery brands?", answer: "Yes, we can source engines compatible with Caterpillar, Komatsu, Cummins, Perkins, and other major brands." },
  { question: "Do you offer engine rebuilding services?", answer: "Yes, we offer full engine rebuild services with genuine and OEM-spec parts." },
];

const Engines = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <HeroSection title="Industrial Engines" subtitle="Diesel engines and replacement engines for industrial and heavy equipment applications." image={heroMachinery} primaryCta={{ label: "Request a Quote", href: "/companies/motors/contact" }} />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Engine Range" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {engineTypes.map((e, i) => (
            <div key={e.name} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-40 gradient-navy flex items-center justify-center">
                <Package className="w-16 h-16 text-electric-blue opacity-50" />
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
                <div className="mt-6">
                  <WhatsAppCTA message={`Hello, I'm interested in ${e.name}.`} label="Inquire" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} title="Engine FAQ" />
  </SubsidiaryLayout>
);

export default Engines;
