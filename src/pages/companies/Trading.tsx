import { Link } from "react-router-dom";
import { Gem, Pickaxe, Map, ArrowRight } from "lucide-react";
import TradingLayout from "@/components/TradingLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/Geological_surveys,_mineral_202604161707.jpeg";

const services = [
  { name: "Mineral Exploration", desc: "Advanced geological surveys and mineral discovery services.", icon: Pickaxe, href: "/companies/trading/exploration" },
  { name: "Mineral Export", desc: "Professional mineral trading and export services.", icon: Gem, href: "/companies/trading/export" },
  { name: "Exploration Map", desc: "Interactive mapping of our exploration territories.", icon: Map, href: "/companies/trading/exploration-map" },
];

const Trading = () => {
  return (
    <TradingLayout 
      title="DS Continental Trading" 
      subtitle="Geological surveys, mineral exploration, mining operations, and mineral export services."
      heroImage={heroImage}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Trading Services" subtitle="Leading mineral exploration and trading across East and Central Africa" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {services.map((s, i) => (
              <Link key={s.name} to={s.href} className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <s.icon className="w-12 h-12 text-steel-grey mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-headline text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-steel-grey group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </TradingLayout>
  );
};

export default Trading;
