import { Link } from "react-router-dom";
import { Shield, Camera, UserCheck, Lock, AlertTriangle, ArrowRight, Video, Users, Eye, BarChart3, ChevronRight } from "lucide-react";
import logoDcs from "@/assets/logo-dcs.png";
import SectionHeading from "@/components/SectionHeading";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroSecurity from "@/assets/hero-security.jpg";

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

const services = [
  { name: "Corporate Security", desc: "Protection for offices, facilities, and corporate assets.", icon: Shield, href: "/companies/security/corporate" },
  { name: "Industrial Security", desc: "Securing factories, warehouses, and industrial operations.", icon: Lock, href: "/companies/security/industrial" },
  { name: "Mining Security", desc: "Specialized security for mining sites and exploration camps.", icon: Shield, href: "/companies/security/mining" },
  { name: "VIP Protection", desc: "Executive protection and close protection services.", icon: Users, href: "/companies/security/vip" },
  { name: "Event Security", desc: "Professional security for conferences, events, and gatherings.", icon: Users, href: "/companies/security/event" },
  { name: "Surveillance Solutions", desc: "CCTV, remote monitoring, and alarm systems.", icon: Video, href: "/companies/security/surveillance" },
];

const Security = () => (
  <SubsidiaryLayout companyName="DS Continental Security" navItems={securityNav} accentColor="border-industrial-red">
    <section className="relative h-[50vh] overflow-hidden">
      <img src={heroSecurity} alt="Security operations" className="w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <img src={logoDcs} alt="DS Continental Security" className="h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-headline text-primary-foreground max-w-3xl animate-fade-in-up">
            DS Continental Security
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Comprehensive security services for corporate, industrial, and mining operations across Africa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/companies/security/corporate" className="px-6 py-3 bg-industrial-red text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppCTA message="Hello, I'd like to inquire about security services." />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Security Services" subtitle="Professional protection across every sector." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={s.name} to={s.href} className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <s.icon className="w-10 h-10 text-industrial-red mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-lg text-foreground">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm text-electric-blue font-subheading group-hover:gap-2 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Security Risk Assessment" subtitle="Evaluate your facility's security needs." centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            Our interactive risk assessment tool helps you understand the level of security your facility requires based on size, location, and industry.
          </p>
          <Link to="/companies/security/risk-assessment" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity">
            <BarChart3 className="w-4 h-4" /> Take Assessment
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Clients Protected", value: "200+" },
            { label: "Personnel", value: "1,500+" },
            { label: "Countries", value: "6" },
            { label: "Years Experience", value: "12+" },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-lg p-5 text-center">
              <p className="text-2xl font-headline text-electric-blue">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground">Secure Your Operations Today</h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Contact our security consultants for a tailored security solution.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/companies/security/contact" className="px-8 py-3 bg-industrial-red text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity">
            Get a Security Plan
          </Link>
          <WhatsAppCTA message="Hello, I need security services." />
        </div>
      </div>
    </section>
  </SubsidiaryLayout>
);

export default Security;
