import { Link } from "react-router-dom";
import { Truck, Wrench, Package, ArrowRight } from "lucide-react";
import MotorsLayout from "@/components/MotorsLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/machinery_image_of_202604161655.jpeg";

const categories = [
  { name: "Excavators", desc: "Large, medium, and mini excavators for construction and mining.", icon: Truck, href: "/companies/motors/excavators" },
  { name: "Tractors", desc: "Agricultural, industrial, and utility tractors for diverse operations.", icon: Wrench, href: "/companies/motors/tractors" },
  { name: "Industrial Engines", desc: "Diesel engines and replacement engines for industrial use.", icon: Package, href: "/companies/motors/engines" },
];

const quickLinks = [
  { name: "Import Cost Calculator", icon: Package, href: "/companies/motors/import-calculator" },
  { name: "Spare Parts", icon: Package, href: "/companies/motors/spare-parts" },
  { name: "FAQ", icon: Package, href: "/companies/motors/faq" },
  { name: "Contact Us", icon: Package, href: "/companies/motors/contact" },
];

const Motors = () => {
  return (
    <MotorsLayout 
      title="DS Continental Motors" 
      subtitle="Heavy equipment sourcing, machinery supply, and industrial import services across East and Central Africa."
      heroImage={heroImage}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Equipment Categories" subtitle="Premium heavy machinery for construction, mining, and industrial operations." />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {categories.map((c, i) => (
              <Link key={c.name} to={c.href} className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <c.icon className="w-12 h-12 text-electric-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-headline text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-electric-blue group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Quick Resources" subtitle="Tools and information to help you make informed decisions." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {quickLinks.map((q) => (
              <Link key={q.name} to={q.href} className="bg-card border border-border rounded-lg p-5 text-center hover:shadow-md transition-shadow group">
                <q.icon className="w-8 h-8 text-electric-blue mx-auto group-hover:scale-110 transition-transform" />
                <span className="mt-2 block text-sm font-subheading text-foreground">{q.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MotorsLayout>
  );
};

export default Motors;
