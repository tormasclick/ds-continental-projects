import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroMining from "@/assets/hero-mining.jpg";
import { CheckCircle } from "lucide-react";

const tradingNav = [
  { label: "Overview", path: "/companies/trading" },
  { label: "Geological Survey", path: "/companies/trading/geological-survey" },
  { label: "Exploration", path: "/companies/trading/exploration" },
  { label: "Mining Ops", path: "/companies/trading/mining-operations" },
  { label: "Processing", path: "/companies/trading/processing" },
  { label: "Lab Testing", path: "/companies/trading/lab-testing" },
  { label: "Export", path: "/companies/trading/export" },
  { label: "Regions", path: "/companies/trading/regions" },
  { label: "FAQ", path: "/companies/trading/faq" },
  { label: "Contact", path: "/companies/trading/contact" },
];

interface TradingServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

const TradingServicePage = ({ title, subtitle, description, features, faqs }: TradingServicePageProps) => (
  <SubsidiaryLayout companyName="DS Continental Trading" navItems={tradingNav} accentColor="border-steel-grey">
    <HeroSection title={title} subtitle={subtitle} image={heroMining} primaryCta={{ label: "Contact Us", href: "/companies/trading/contact" }} />

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title={title} />
        <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">{description}</p>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{f}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <WhatsAppCTA message={`Hello, I'd like to learn about ${title} services.`} />
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} />
  </SubsidiaryLayout>
);

export const GeologicalSurvey = () => (
  <TradingServicePage
    title="Geological Survey"
    subtitle="Comprehensive geological mapping and mineral identification."
    description="Our geological survey services provide accurate mapping and analysis of geological formations to identify mineral deposits and assess their viability for extraction."
    features={["Topographic mapping", "Geochemical sampling", "Remote sensing analysis", "Geological reports and modeling", "Drill-site recommendations", "Environmental baseline surveys"]}
    faqs={[
      { question: "What survey methods do you use?", answer: "We use a combination of satellite imagery, ground-based surveys, geochemical sampling, and geophysical analysis." },
      { question: "How long does a survey take?", answer: "Survey timelines depend on the area size and complexity. Typically 2–8 weeks for a comprehensive survey." },
    ]}
  />
);

export const MineralExploration = () => (
  <TradingServicePage
    title="Mineral Exploration"
    subtitle="Systematic exploration programs to discover and evaluate mineral deposits."
    description="DS Continental Trading conducts systematic mineral exploration programs including prospect generation, target evaluation, and resource estimation to identify economically viable mineral deposits."
    features={["Prospect generation", "Core drilling programs", "Resource estimation", "Feasibility studies", "Environmental impact assessment", "Community engagement"]}
    faqs={[
      { question: "Which minerals do you explore for?", answer: "We explore for gold, copper, cobalt, tantalum, tin, lithium, and other strategic minerals." },
      { question: "Do you offer joint venture partnerships?", answer: "Yes, we welcome joint venture opportunities with mining companies and investors." },
    ]}
  />
);

export const MiningOperations = () => (
  <TradingServicePage
    title="Mining Operations"
    subtitle="Managed mining operations with modern equipment and safety standards."
    description="We provide managed mining operations using modern equipment, trained personnel, and strict safety and environmental standards across our operational regions."
    features={["Open-pit mining", "Underground mining support", "Equipment deployment", "Safety management systems", "Environmental compliance", "Production reporting"]}
    faqs={[
      { question: "Do you operate your own mines?", answer: "Yes, we operate mines directly and also provide contract mining services for other concession holders." },
      { question: "What safety standards do you follow?", answer: "We follow international mining safety standards including ISO 45001 and local regulatory requirements." },
    ]}
  />
);

export const MineralProcessing = () => (
  <TradingServicePage
    title="Mineral Processing"
    subtitle="On-site and off-site mineral processing and beneficiation."
    description="Our mineral processing services include crushing, grinding, separation, and concentration to produce market-ready mineral products."
    features={["Crushing and grinding", "Gravity separation", "Flotation processing", "Chemical processing", "Quality control", "Tailings management"]}
    faqs={[
      { question: "Do you have processing facilities?", answer: "Yes, we operate processing plants in key mining regions and can also deploy mobile processing units." },
      { question: "What minerals can you process?", answer: "We process a range of minerals including gold, copper, tantalum, tin, and coltan." },
    ]}
  />
);

export const LabTesting = () => (
  <TradingServicePage
    title="Laboratory Testing"
    subtitle="Accredited laboratory testing for mineral analysis and quality assurance."
    description="Our laboratory services provide accurate mineral analysis, grade determination, and quality assurance testing for exploration and production samples."
    features={["Fire assay", "XRF analysis", "ICP-OES analysis", "Petrographic studies", "Metallurgical testing", "Certificate of analysis"]}
    faqs={[
      { question: "Are your labs accredited?", answer: "Yes, our partner laboratories hold international accreditation and follow ISO 17025 standards." },
      { question: "How quickly can we get results?", answer: "Standard turnaround is 5–10 business days. Rush services are available for urgent samples." },
    ]}
  />
);

export const MineralExport = () => (
  <TradingServicePage
    title="Mineral Export"
    subtitle="Export logistics, compliance, and international buyer connections."
    description="DS Continental Trading handles mineral export logistics including packaging, documentation, regulatory compliance, and connecting producers with international buyers."
    features={["Export documentation", "Customs compliance", "International logistics", "Buyer matchmaking", "Trade finance support", "Traceability and certification"]}
    faqs={[
      { question: "Which countries do you export to?", answer: "We export to markets in Asia, Europe, and the Middle East through established trade channels." },
      { question: "Do you handle conflict mineral compliance?", answer: "Yes, all our operations and exports comply with conflict mineral regulations and traceability requirements." },
    ]}
  />
);
