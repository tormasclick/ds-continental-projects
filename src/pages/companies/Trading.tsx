import { Link } from "react-router-dom";
import { Gem, Map, FlaskConical, FileOutput, Compass, ArrowRight, Package, Globe, ChevronRight } from "lucide-react";
import logoDcp from "@/assets/logo-dcp.png";
import SectionHeading from "@/components/SectionHeading";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroMining from "@/assets/hero-mining.jpg";

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

const services = [
  { name: "Geological Survey", desc: "Comprehensive geological mapping and surveying.", icon: Map, href: "/companies/trading/geological-survey" },
  { name: "Mineral Exploration", desc: "Systematic exploration to discover mineral deposits.", icon: Gem, href: "/companies/trading/exploration" },
  { name: "Mining Operations", desc: "Managed mining with modern equipment and safety.", icon: Gem, href: "/companies/trading/mining-operations" },
  { name: "Mineral Processing", desc: "On-site and off-site mineral beneficiation.", icon: Package, href: "/companies/trading/processing" },
  { name: "Laboratory Testing", desc: "Accredited lab testing for mineral analysis.", icon: FlaskConical, href: "/companies/trading/lab-testing" },
  { name: "Mineral Export", desc: "Export logistics and international buyer connections.", icon: Globe, href: "/companies/trading/export" },
];

const Trading = () => (
  <SubsidiaryLayout companyName="DS Continental Trading" navItems={tradingNav} accentColor="border-steel-grey">
    <section className="relative h-[50vh] overflow-hidden">
      <img src={heroMining} alt="Mining operations" className="w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <img src={logoDcp} alt="DS Continental Trading" className="h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-headline text-primary-foreground max-w-3xl animate-fade-in-up">
            DS Continental Trading
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Geological surveys, mineral exploration, mining operations, and mineral export services across Africa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/companies/trading/exploration" className="px-6 py-3 bg-industrial-red text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppCTA message="Hello, I'd like to inquire about mining and exploration services." />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Mining & Exploration Services" subtitle="End-to-end mining services from survey to export." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={s.name} to={s.href} className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <s.icon className="w-10 h-10 text-electric-blue mb-4 group-hover:scale-110 transition-transform" />
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
          <SectionHeading title="Exploration Regions" subtitle="Active operations across Africa." centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            DS Continental Trading operates across key mineral-rich regions in East and Central Africa, including Kenya, Uganda, Tanzania, DRC, and Rwanda.
          </p>
          <Link to="/companies/trading/regions" className="mt-6 inline-flex items-center gap-2 text-electric-blue font-subheading hover:underline">
            View Exploration Map <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Active Sites", value: "25+" },
            { label: "Minerals Explored", value: "12" },
            { label: "Regions", value: "5" },
            { label: "Export Partners", value: "40+" },
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
        <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground">Partner With Us in Mining & Exploration</h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Explore partnership opportunities in mineral exploration and export.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/companies/trading/contact" className="px-8 py-3 bg-industrial-red text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity">
            Contact Us
          </Link>
          <WhatsAppCTA message="Hello, I'd like to discuss mining partnership opportunities." />
        </div>
      </div>
    </section>
  </SubsidiaryLayout>
);

export default Trading;
