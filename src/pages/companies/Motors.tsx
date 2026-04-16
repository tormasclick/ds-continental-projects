import { Link } from "react-router-dom";
import { Truck, Wrench, ClipboardCheck, Calculator, HelpCircle, ArrowRight } from "lucide-react";
import logoDcm from "@/assets/logo-dcm.png";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { title: "Excavators", icon: Truck, desc: "Heavy-duty excavators for mining and construction." },
  { title: "Tractors", icon: Truck, desc: "Industrial tractors for agricultural and construction use." },
  { title: "Industrial Engines", icon: Wrench, desc: "Power solutions for industrial applications." },
  { title: "Import Services", icon: ClipboardCheck, desc: "End-to-end equipment import and logistics." },
  { title: "Machinery Inspection", icon: ClipboardCheck, desc: "Pre-purchase inspection and quality assurance." },
  { title: "Maintenance Support", icon: Wrench, desc: "Ongoing maintenance and spare parts supply." },
];

const Motors = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img src={logoDcm} alt="DS Continental Motors" className="h-20 w-auto brightness-200" />
        <div>
          <h1 className="text-4xl font-headline font-bold text-primary-foreground">DS Continental Motors</h1>
          <p className="mt-2 text-primary-foreground/80 text-lg">Your car with you — Heavy equipment sourcing and industrial machinery supply across Africa.</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Equipment & Services" subtitle="Comprehensive machinery solutions from sourcing to maintenance." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-electric-blue transition-all group">
              <s.icon className="w-8 h-8 text-steel-grey group-hover:text-electric-blue transition-colors mb-3" />
              <h3 className="font-headline font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading title="Interactive Tools" />
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link to="/companies/motors/import-calculator" className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow group">
            <Calculator className="w-10 h-10 text-electric-blue mx-auto mb-3" />
            <h3 className="font-headline font-bold text-foreground">Import Cost Calculator</h3>
            <p className="mt-2 text-sm text-muted-foreground">Estimate your total equipment import costs.</p>
          </Link>
          <Link to="/contact" className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow group">
            <HelpCircle className="w-10 h-10 text-industrial-red mx-auto mb-3" />
            <h3 className="font-headline font-bold text-foreground">Request a Quote</h3>
            <p className="mt-2 text-sm text-muted-foreground">Get a customized equipment quote.</p>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Motors;
