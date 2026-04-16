import { Link } from "react-router-dom";
import { Shield, Camera, UserCheck, Lock, AlertTriangle, ArrowRight } from "lucide-react";
import logoDcs from "@/assets/logo-dcs.png";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { title: "Corporate Security", icon: Shield, desc: "Executive and corporate office protection services." },
  { title: "Industrial Security", icon: Lock, desc: "Securing factories, warehouses, and industrial sites." },
  { title: "Mining Security", icon: Shield, desc: "Specialized security for mining and extraction operations." },
  { title: "VIP Protection", icon: UserCheck, desc: "Executive protection and close protection services." },
  { title: "CCTV Solutions", icon: Camera, desc: "Surveillance system design, installation, and monitoring." },
  { title: "Risk Assessment", icon: AlertTriangle, desc: "Comprehensive security threat and risk analysis." },
];

const Security = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img src={logoDcs} alt="DS Continental Security" className="h-20 w-auto brightness-200" />
        <div>
          <h1 className="text-4xl font-headline font-bold text-primary-foreground">DS Continental Security</h1>
          <p className="mt-2 text-primary-foreground/80 text-lg">Before it Happens — Corporate and industrial protection services across Africa.</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Security Services" subtitle="Comprehensive protection solutions for every industry." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-industrial-red transition-all group">
              <s.icon className="w-8 h-8 text-steel-grey group-hover:text-industrial-red transition-colors mb-3" />
              <h3 className="font-headline font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted text-center">
      <div className="container mx-auto px-4">
        <Link to="/companies/security/risk-assessment" className="inline-block bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
          <AlertTriangle className="w-10 h-10 text-industrial-red mx-auto mb-3" />
          <h3 className="font-headline font-bold text-foreground">Security Risk Assessment Tool</h3>
          <p className="mt-2 text-sm text-muted-foreground">Get a recommended security plan for your facility.</p>
        </Link>
      </div>
    </section>
  </div>
);

export default Security;
