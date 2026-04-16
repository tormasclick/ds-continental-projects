import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import FAQSection from "@/components/FAQSection";

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

const faqs = [
  { question: "What types of equipment does DS Continental Motors supply?", answer: "We supply excavators, tractors, industrial engines, generators, and a wide range of heavy construction and mining equipment." },
  { question: "Which countries do you deliver to?", answer: "We deliver across East and Central Africa including Kenya, Uganda, Tanzania, DRC, Rwanda, and Burundi." },
  { question: "Do you offer financing or leasing?", answer: "Yes, we partner with financial institutions to provide flexible financing and leasing options for qualifying clients." },
  { question: "How do I get a quote?", answer: "You can request a quote through our contact page, WhatsApp, or by calling our sales team directly." },
  { question: "Do you provide after-sales support?", answer: "Yes, we offer comprehensive after-sales support including maintenance, spare parts, operator training, and technical assistance." },
  { question: "Can you source specific equipment models?", answer: "Absolutely. We can source specific models and configurations from our global network of equipment manufacturers." },
  { question: "What is included in your import services?", answer: "Our import services cover sourcing, inspection, documentation, shipping, customs clearance, and final-mile delivery." },
  { question: "Do you sell used equipment?", answer: "Yes, we offer certified pre-owned equipment that has been inspected and refurbished to meet quality standards." },
];

const MotorsFAQ = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <div className="pt-8">
      <FAQSection faqs={faqs} title="DS Continental Motors — FAQ" />
    </div>
  </SubsidiaryLayout>
);

export default MotorsFAQ;
