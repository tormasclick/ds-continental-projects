import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroSecurity from "@/assets/hero-security.jpg";
import { Video, Eye, Bell, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const securityNav = [
  { label: "Overview", path: "/companies/security" },
  { label: "Corporate", path: "/companies/security/corporate" },
  { label: "Industrial", path: "/companies/security/industrial" },
  { label: "Mining", path: "/companies/security/mining" },
  { label: "VIP", path: "/companies/security/vip" },
  { label: "Event", path: "/companies/security/event" },
  { label: "Surveillance", path: "/companies/security/surveillance" },
  { label: "Risk Assessment", path: "/companies/security/risk-assessment" },
  { label: "FAQ", path: "/companies/security/faq" },
  { label: "Contact", path: "/companies/security/contact" },
];

const solutions = [
  { name: "CCTV Installation", desc: "HD and IP camera systems with night vision and analytics.", icon: Video },
  { name: "Remote Monitoring", desc: "24/7 remote surveillance from our operations center.", icon: Eye },
  { name: "Alarm Systems", desc: "Intrusion detection, fire alarms, and integrated alert systems.", icon: Bell },
];

const Surveillance = () => (
  <SubsidiaryLayout companyName="DS Continental Security" navItems={securityNav} accentColor="border-industrial-red">
    <HeroSection title="Surveillance Solutions" subtitle="CCTV, remote monitoring, and alarm systems for comprehensive facility protection." image={heroSecurity} primaryCta={{ label: "Get a Quote", href: "/companies/security/contact" }} />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Solutions" />
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={s.name} className="bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <s.icon className="w-12 h-12 text-industrial-red mb-4" />
              <h3 className="font-headline text-xl text-foreground">{s.name}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <WhatsAppCTA message="Hello, I'd like to inquire about surveillance solutions." />
        </div>
      </div>
    </section>
  </SubsidiaryLayout>
);

export default Surveillance;
