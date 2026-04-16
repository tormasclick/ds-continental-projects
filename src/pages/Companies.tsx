import { Link } from "react-router-dom";
import { Truck, ArrowRight } from "lucide-react";
import logoDcm from "@/assets/logo-dcm.png";
import logoDcs from "@/assets/logo-dcs.png";
import logoDcp from "@/assets/logo-dcp-continental-projects.png";
import SectionHeading from "@/components/SectionHeading";

const companies = [
  { name: "DS Continental Motors", desc: "Heavy equipment sourcing, industrial machinery supply, import services, maintenance support, and machinery inspection across Africa.", logo: logoDcm, path: "/companies/motors", color: "border-electric-blue" },
  { name: "DS Continental Security", desc: "Corporate, industrial, and mining security services, VIP protection, CCTV solutions, and risk assessment across East and Central Africa.", logo: logoDcs, path: "/companies/security", color: "border-industrial-red" },
  { name: "DS Continental Trading", desc: "Geological surveys, mineral exploration, mining operations, mineral processing, laboratory testing, and mineral export.", logo: logoDcp, path: "/companies/trading", color: "border-steel-grey" },
];

const Companies = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">Our Companies</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Three specialized subsidiaries working together under the DS Continental Projects umbrella.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 space-y-8">
        {companies.map((c, i) => (
          <Link key={c.name} to={c.path} className={`block bg-card rounded-xl border-l-4 ${c.color} border border-border p-8 hover:shadow-xl hover:scale-[1.01] transition-all`}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <img src={c.logo} alt={c.name} className="h-16 w-auto" />
              <div className="flex-1">
                <h2 className="font-headline font-bold text-xl text-foreground">{c.name}</h2>
                <p className="mt-2 text-muted-foreground">{c.desc}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-electric-blue" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Companies;
