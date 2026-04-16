import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import FAQSection from "@/components/FAQSection";

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

const faqs = [
  { question: "What minerals does DS Continental Trading deal in?", answer: "We work with gold, copper, cobalt, tantalum, tin, lithium, coltan, and other strategic minerals." },
  { question: "Where do you operate?", answer: "We operate in Kenya, Uganda, Tanzania, DRC, and Rwanda with plans to expand further." },
  { question: "Do you offer partnership opportunities?", answer: "Yes, we welcome partnerships with mining companies, investors, and mineral buyers." },
  { question: "How do you ensure responsible mining?", answer: "We follow international standards for environmental management, community engagement, and conflict-free sourcing." },
  { question: "Can you help with mining permits?", answer: "We provide guidance on mining permits and regulatory compliance in our countries of operation." },
  { question: "Do you provide geological data?", answer: "Yes, we can provide geological reports and survey data for our exploration regions." },
];

const TradingFAQ = () => (
  <SubsidiaryLayout companyName="DS Continental Trading" navItems={tradingNav} accentColor="border-steel-grey">
    <div className="pt-8">
      <FAQSection faqs={faqs} title="DS Continental Trading — FAQ" />
    </div>
  </SubsidiaryLayout>
);

export default TradingFAQ;
