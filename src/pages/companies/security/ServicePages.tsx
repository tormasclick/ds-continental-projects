import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroSecurity from "@/assets/hero-security.jpg";
import { Shield, CheckCircle } from "lucide-react";

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

interface SecurityServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

const SecurityServicePage = ({ title, subtitle, description, benefits, faqs }: SecurityServicePageProps) => (
  <SubsidiaryLayout companyName="DS Continental Security" navItems={securityNav} accentColor="border-industrial-red">
    <HeroSection title={title} subtitle={subtitle} image={heroSecurity} primaryCta={{ label: "Get a Quote", href: "/companies/security/contact" }} />

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title={`About ${title}`} />
        <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">{description}</p>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{b}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <WhatsAppCTA message={`Hello, I'd like to inquire about ${title} services.`} />
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} />
  </SubsidiaryLayout>
);

export const CorporateSecurity = () => (
  <SecurityServicePage
    title="Corporate Security"
    subtitle="Protecting offices, corporate facilities, and business assets."
    description="DS Continental Security provides comprehensive corporate security solutions including access control, patrol services, executive protection, and security consulting for businesses of all sizes."
    benefits={["24/7 manned guarding", "Access control systems", "Security audits and consulting", "Incident response planning", "Employee security awareness training", "Executive protection services"]}
    faqs={[
      { question: "What industries do you serve?", answer: "We serve all industries including finance, technology, manufacturing, retail, and government." },
      { question: "Can you scale security for multiple sites?", answer: "Yes, we provide multi-site security management across East and Central Africa." },
    ]}
  />
);

export const IndustrialSecurity = () => (
  <SecurityServicePage
    title="Industrial Security"
    subtitle="Securing factories, warehouses, and industrial operations."
    description="Our industrial security services protect manufacturing plants, warehouses, logistics hubs, and construction sites with trained personnel and advanced surveillance technology."
    benefits={["Perimeter security", "CCTV monitoring", "Access management", "Cargo and asset protection", "Fire and safety response", "Night patrol services"]}
    faqs={[
      { question: "Do you provide armed guards?", answer: "Yes, where legally permitted and required by risk assessment, we deploy licensed armed security personnel." },
      { question: "Can you integrate with existing security systems?", answer: "Absolutely. We work with existing infrastructure and recommend upgrades where needed." },
    ]}
  />
);

export const MiningSecurity = () => (
  <SecurityServicePage
    title="Mining Security"
    subtitle="Specialized security for mining sites and exploration camps."
    description="Mining operations face unique security challenges. DS Continental Security provides specialized mining site protection including perimeter defense, convoy security, and community liaison services."
    benefits={["Mining site perimeter defense", "Convoy and transport security", "Camp security management", "Community liaison", "Anti-theft and pilferage prevention", "Emergency response teams"]}
    faqs={[
      { question: "Do you operate in remote areas?", answer: "Yes, we specialize in deploying security teams to remote mining and exploration sites." },
      { question: "Can you provide security risk assessments for new sites?", answer: "Yes, we conduct comprehensive risk assessments before recommending a security plan." },
    ]}
  />
);

export const VIPProtection = () => (
  <SecurityServicePage
    title="VIP Protection"
    subtitle="Executive and close protection services."
    description="Our VIP protection unit provides discreet, professional close protection for executives, dignitaries, and high-profile individuals traveling or operating in the region."
    benefits={["Close protection officers", "Advance security planning", "Secure transportation", "Travel security coordination", "Threat assessment", "24/7 availability"]}
    faqs={[
      { question: "How quickly can you deploy VIP protection?", answer: "We can deploy protection details within 24–48 hours for urgent requests." },
      { question: "Do your officers have military or law enforcement backgrounds?", answer: "Yes, our close protection officers are recruited from military, police, and specialized security backgrounds." },
    ]}
  />
);

export const EventSecurity = () => (
  <SecurityServicePage
    title="Event Security"
    subtitle="Professional security for conferences, events, and public gatherings."
    description="From corporate conferences to large-scale public events, DS Continental Security provides comprehensive event security planning and deployment."
    benefits={["Crowd management", "Access control and screening", "VIP area security", "Emergency evacuation planning", "Uniformed and plainclothes officers", "Post-event security reports"]}
    faqs={[
      { question: "How far in advance should we book event security?", answer: "We recommend booking at least 2–4 weeks in advance for adequate planning, though we can accommodate shorter timelines." },
      { question: "Do you provide security for outdoor events?", answer: "Yes, we handle security for both indoor and outdoor events of all sizes." },
    ]}
  />
);
