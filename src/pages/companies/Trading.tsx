import { Link } from "react-router-dom";
import { Gem, Map, FlaskConical, FileOutput, Compass } from "lucide-react";
import logoDcp from "@/assets/logo-dcp.png";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { title: "Geological Survey", icon: Compass, desc: "Comprehensive geological mapping and survey services." },
  { title: "Mineral Exploration", icon: Gem, desc: "Prospecting and resource identification across Africa." },
  { title: "Mining Operations", icon: Gem, desc: "Operational support for mining extraction." },
  { title: "Mineral Processing", icon: FlaskConical, desc: "Processing and refining of mineral resources." },
  { title: "Laboratory Testing", icon: FlaskConical, desc: "Sample analysis and quality certification." },
  { title: "Mineral Export", icon: FileOutput, desc: "Export logistics and trade facilitation." },
];

const Trading = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img src={logoDcp} alt="DS Continental Trading" className="h-20 w-auto brightness-200" />
        <div>
          <h1 className="text-4xl font-headline font-bold text-primary-foreground">DS Continental Trading</h1>
          <p className="mt-2 text-primary-foreground/80 text-lg">Geological surveys, mineral exploration, and export operations across Africa.</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Services" subtitle="End-to-end mineral exploration and trading solutions." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-steel-grey transition-all group">
              <s.icon className="w-8 h-8 text-steel-grey group-hover:text-electric-blue transition-colors mb-3" />
              <h3 className="font-headline font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted text-center">
      <div className="container mx-auto px-4">
        <Link to="/companies/trading/exploration-map" className="inline-block bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
          <Map className="w-10 h-10 text-electric-blue mx-auto mb-3" />
          <h3 className="font-headline font-bold text-foreground">Interactive Exploration Map</h3>
          <p className="mt-2 text-sm text-muted-foreground">Explore our mineral exploration zones across Africa.</p>
        </Link>
      </div>
    </section>
  </div>
);

export default Trading;
