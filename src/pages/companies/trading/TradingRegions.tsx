import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const tradingNav = [
  { label: "Overview", path: "/companies/trading" },
  { label: "Geological Survey", path: "/companies/trading/geological-survey" },
  { label: "Exploration", path: "/companies/trading/exploration" },
  { label: "Mining Ops", path: "/companies/trading/mining-operations" },
  { label: "Processing", path: "/companies/trading/processing" },
  { label: "Lab Testing", path: "/companies/trading/lab-testing" },
  { label: "Export", path: "/companies/trading/export" },
  { label: "Projects", path: "/companies/trading/projects" },
  { label: "Regions", path: "/companies/trading/regions" },
  { label: "FAQ", path: "/companies/trading/faq" },
  { label: "Contact", path: "/companies/trading/contact" },
];

const regions = [
  { name: "Kenya", minerals: ["Gold", "Titanium", "Gemstones"], desc: "Our headquarters region with active exploration in the Rift Valley and Western Kenya." },
  { name: "Uganda", minerals: ["Gold", "Copper", "Cobalt"], desc: "Exploration programs in the Karamoja and Albertine regions." },
  { name: "Tanzania", minerals: ["Gold", "Diamonds", "Tanzanite"], desc: "Major mining operations in the Lake Victoria goldfields." },
  { name: "DR Congo", minerals: ["Cobalt", "Copper", "Coltan", "Tin"], desc: "Strategic partnerships in the Katanga and Kivu mineral provinces." },
  { name: "Rwanda", minerals: ["Tin", "Tantalum", "Tungsten"], desc: "3T mineral exploration and responsible sourcing programs." },
];

const TradingRegions = () => (
  <SubsidiaryLayout companyName="DS Continental Trading" navItems={tradingNav} accentColor="border-steel-grey">
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Exploration Regions" subtitle="Our active exploration and mining regions across Africa." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {regions.map((r, i) => (
            <div key={r.name} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <h3 className="font-headline text-xl text-foreground">{r.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.minerals.map((m) => (
                  <span key={m} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <WhatsAppCTA message="Hello, I'd like to discuss exploration opportunities in Africa." label="Discuss Partnership" />
        </div>
      </div>
    </section>
  </SubsidiaryLayout>
);

export default TradingRegions;
