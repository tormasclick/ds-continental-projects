import { Link } from "react-router-dom";
import { Truck, Wrench, ClipboardCheck, Calculator, HelpCircle, ArrowRight, Package, Phone, ChevronRight } from "lucide-react";
import logoDcm from "@/assets/logo-dcm.png";
import SectionHeading from "@/components/SectionHeading";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroMachinery from "@/assets/hero-machinery.jpg";

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

const categories = [
  { name: "Excavators", desc: "Large, medium, and mini excavators for construction and mining.", icon: Truck, href: "/companies/motors/excavators" },
  { name: "Tractors", desc: "Agricultural, industrial, and utility tractors for diverse operations.", icon: Wrench, href: "/companies/motors/tractors" },
  { name: "Industrial Engines", desc: "Diesel engines and replacement engines for industrial use.", icon: Package, href: "/companies/motors/engines" },
];

const quickLinks = [
  { name: "Import Cost Calculator", icon: Calculator, href: "/companies/motors/import-calculator" },
  { name: "Spare Parts", icon: Package, href: "/companies/motors/spare-parts" },
  { name: "FAQ", icon: HelpCircle, href: "/companies/motors/faq" },
  { name: "Contact Us", icon: Phone, href: "/companies/motors/contact" },
];

const Motors = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <section className="relative h-[50vh] overflow-hidden">
      <img src={heroMachinery} alt="Heavy machinery" className="w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <img src={logoDcm} alt="DS Continental Motors" className="h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-headline text-primary-foreground max-w-3xl animate-fade-in-up">
            DS Continental Motors
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Heavy equipment sourcing, industrial machinery supply, and import services across East and Central Africa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/companies/motors/excavators" className="px-6 py-3 bg-industrial-red text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
              Browse Equipment <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppCTA message="Hello, I'd like to inquire about heavy equipment from DS Continental Motors." />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Machinery Categories" subtitle="Browse our range of heavy equipment and industrial machinery." />
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((c, i) => (
            <Link key={c.name} to={c.href} className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <c.icon className="w-12 h-12 text-electric-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-xl text-foreground">{c.name}</h3>
              <p className="mt-2 text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-electric-blue font-subheading group-hover:gap-2 transition-all">
                View Range <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Import & Delivery Services" subtitle="End-to-end machinery import from source to site." centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            DS Continental Motors handles the complete machinery import process — from sourcing equipment from international manufacturers to customs clearance, logistics, and final delivery to your project site.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/companies/motors/import-services" className="px-6 py-3 bg-primary text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity">
              Import Services
            </Link>
            <Link to="/companies/motors/import-calculator" className="px-6 py-3 border border-border text-foreground font-subheading rounded-md hover:bg-muted transition-colors flex items-center gap-2">
              <Calculator className="w-4 h-4" /> Import Calculator
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {quickLinks.map((q) => (
            <Link key={q.name} to={q.href} className="bg-card border border-border rounded-lg p-5 flex items-center gap-3 hover:shadow-md transition-shadow group">
              <q.icon className="w-6 h-6 text-electric-blue group-hover:scale-110 transition-transform" />
              <span className="text-sm font-subheading text-foreground">{q.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground">Need Heavy Equipment?</h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Get in touch with our equipment specialists for a free consultation and quote.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/companies/motors/contact" className="px-8 py-3 bg-industrial-red text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity">
            Request a Quote
          </Link>
          <WhatsAppCTA message="Hello, I need heavy equipment. Can you help?" />
        </div>
      </div>
    </section>
  </SubsidiaryLayout>
);

export default Motors;
