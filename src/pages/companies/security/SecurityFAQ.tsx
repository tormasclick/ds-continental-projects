import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import FAQSection from "@/components/FAQSection";

const securityNav = [
  { label: "Overview", path: "/companies/security" },
  { label: "Corporate", path: "/companies/security/corporate" },
  { label: "Industrial", path: "/companies/security/industrial" },
  { label: "Mining", path: "/companies/security/mining" },
  { label: "VIP", path: "/companies/security/vip" },
  { label: "Event", path: "/companies/security/event" },
  { label: "Surveillance", path: "/companies/security/surveillance" },
  { label: "Risk Assessment", path: "/companies/security/risk-assessment" },
  { label: "Projects", path: "/companies/security/projects" },
  { label: "FAQ", path: "/companies/security/faq" },
  { label: "Contact", path: "/companies/security/contact" },
];

const faqs = [
  { question: "What areas do you operate in?", answer: "We operate across East and Central Africa including Kenya, Uganda, Tanzania, DRC, Rwanda, and Burundi." },
  { question: "Are your guards licensed and trained?", answer: "All our security personnel are fully licensed, trained, and vetted according to local and international standards." },
  { question: "Do you offer 24/7 security services?", answer: "Yes, we provide round-the-clock security services with shift management and supervisory oversight." },
  { question: "Can you customize security packages?", answer: "Absolutely. We design bespoke security solutions based on your specific needs and risk profile." },
  { question: "How do I get a security assessment?", answer: "Contact us through our website, WhatsApp, or phone to schedule a free security risk assessment." },
  { question: "Do you offer technology-based security solutions?", answer: "Yes, we integrate CCTV, access control, alarm systems, and remote monitoring with our manned guarding services." },
];

const SecurityFAQ = () => (
  <SubsidiaryLayout companyName="DS Continental Security" navItems={securityNav} accentColor="border-industrial-red">
    <div className="pt-8">
      <FAQSection faqs={faqs} title="DS Continental Security — FAQ" />
    </div>
  </SubsidiaryLayout>
);

export default SecurityFAQ;
