import { Link } from "react-router-dom";
import { Shield, Eye, Building, ArrowRight } from "lucide-react";
import SecurityLayout from "@/components/SecurityLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/ds-continental-security.jpeg";

const services = [
  { name: "Corporate Security", desc: "Comprehensive security management for corporate facilities and offices.", icon: Building, href: "/companies/security/corporate" },
  { name: "Surveillance Systems", desc: "Advanced CCTV and monitoring solutions for 24/7 protection.", icon: Eye, href: "/companies/security/surveillance" },
  { name: "Risk Assessment", desc: "Professional security audits and risk management consulting.", icon: Shield, href: "/companies/security/risk-assessment" },
];

const Security = () => {
  return (
    <SecurityLayout 
      title="DS Continental Security" 
      subtitle="Corporate, industrial, and mining security services with advanced surveillance solutions."
      heroImage={heroImage}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Security Services" subtitle="Comprehensive protection for your assets and operations" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {services.map((s, i) => (
              <Link key={s.name} to={s.href} className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <s.icon className="w-12 h-12 text-industrial-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-headline text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-industrial-red group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SecurityLayout>
  );
};

export default Security;
