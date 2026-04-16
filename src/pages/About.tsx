import { Link } from "react-router-dom";
import { Target, Eye, Users, Building2, Globe2, ShieldCheck, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const aboutPages = [
  { title: "Vision & Mission", desc: "Our purpose and the future we're building.", path: "/about/vision-mission", icon: Target },
  { title: "Leadership Team", desc: "Meet the people driving DS Continental forward.", path: "/about/leadership", icon: Users },
  { title: "Corporate Structure", desc: "How our subsidiaries integrate and operate.", path: "/about/structure", icon: Building2 },
  { title: "Regions of Operation", desc: "Where we operate across Africa.", path: "/about/regions", icon: Globe2 },
  { title: "Compliance & Ethics", desc: "Our commitment to responsible business.", path: "/about/compliance", icon: ShieldCheck },
];

const About = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">About DS Continental Projects</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          A diversified African industrial group energising the continental economy through integrated solutions.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title="Company Overview" subtitle="From Nairobi to the continent — building Africa's industrial future." />
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>DS Continental Projects is a diversified African industrial group headquartered in Nairobi, Kenya. We operate across three core sectors through our specialized subsidiaries: heavy equipment and machinery, corporate and industrial security, and mineral exploration and trading.</p>
          <p>Our integrated approach allows us to serve Africa's most demanding industries with comprehensive solutions — from sourcing and importing heavy machinery, to securing industrial operations, to exploring and developing mineral resources across East and Central Africa.</p>
          <p>With operations spanning Kenya, Uganda, Tanzania, DRC, and Rwanda, DS Continental Projects is positioned at the heart of Africa's industrial growth, delivering value to clients ranging from multinational corporations to government bodies.</p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading title="Explore More" subtitle="Learn about our vision, leadership, and operations." />
        <div className="grid md:grid-cols-3 gap-6">
          {aboutPages.map((p) => (
            <Link key={p.path} to={p.path} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:scale-[1.02] transition-all group">
              <p.icon className="w-8 h-8 text-electric-blue mb-3" />
              <h3 className="font-headline font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm text-electric-blue font-medium">Read More <ArrowRight className="w-3 h-3" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
