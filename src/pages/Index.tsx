import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Gem, Factory, Globe, Users, BarChart3, ChevronRight, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";
import logoDcm from "@/assets/logo-dcm.png";
import logoDcs from "@/assets/logo-dcs.png";
import logoDcp from "@/assets/logo-dcp.png";
import heroMachinery from "@/assets/hero-machinery.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
import heroMining from "@/assets/hero-mining.jpg";

const slides = [
  { image: heroMachinery, label: "Heavy Machinery Operations" },
  { image: heroSecurity, label: "Security Operations" },
  { image: heroMining, label: "Mining Exploration" },
];

const subsidiaries = [
  { name: "DS Continental Motors", desc: "Heavy equipment sourcing and industrial machinery supply.", logo: logoDcm, path: "/companies/motors", color: "border-electric-blue", icon: Truck },
  { name: "DS Continental Security", desc: "Corporate and industrial protection services.", logo: logoDcs, path: "/companies/security", color: "border-industrial-red", icon: Shield },
  { name: "DS Continental Trading", desc: "Geological surveys, mineral exploration and export operations.", logo: logoDcp, path: "/companies/trading", color: "border-steel-grey", icon: Gem },
];

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Countries Served", value: 12, suffix: "" },
  { label: "Industrial Clients", value: 300, suffix: "+" },
  { label: "Operational Divisions", value: 3, suffix: "" },
];

const industries = [
  { name: "Mining & Exploration", icon: Gem },
  { name: "Construction", icon: Factory },
  { name: "Oil & Gas", icon: BarChart3 },
  { name: "Security & Defence", icon: Shield },
  { name: "Logistics & Transport", icon: Truck },
  { name: "Government & Infrastructure", icon: Globe },
];

const projects = [
  { title: "Turkana Mining Operations", category: "Mining", location: "Kenya" },
  { title: "Kampala Industrial Security", category: "Security", location: "Uganda" },
  { title: "Dar es Salaam Equipment Supply", category: "Equipment", location: "Tanzania" },
];

const insights = [
  { title: "The Future of Mining in East Africa", category: "Mining Insights", date: "March 2026" },
  { title: "Heavy Equipment Maintenance Best Practices", category: "Equipment Guides", date: "February 2026" },
  { title: "Industrial Security Risk Trends 2026", category: "Security Reports", date: "January 2026" },
];

const regions = [
  { name: "Kenya", x: "62%", y: "48%" },
  { name: "Uganda", x: "56%", y: "42%" },
  { name: "Tanzania", x: "60%", y: "55%" },
  { name: "DRC", x: "48%", y: "48%" },
  { name: "Rwanda", x: "54%", y: "47%" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span ref={ref} className="font-mono-stat text-4xl md:text-5xl font-bold text-electric-blue">{count}{suffix}</span>;
}

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === activeSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={s.image} alt={s.label} className="w-full h-full object-cover" width={1920} height={1080} />
          </div>
        ))}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary-foreground max-w-3xl animate-fade-in-up">
              Energising the Continental Economy
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Integrated solutions across industrial equipment, security operations, and mineral exploration across Africa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/companies" className="px-6 py-3 bg-industrial-red text-primary-foreground font-subheading font-semibold rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
                Explore Our Companies <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/projects" className="px-6 py-3 border border-primary-foreground/40 text-primary-foreground font-subheading font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors">
                View Projects
              </Link>
            </div>
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeSlide ? "bg-primary-foreground" : "bg-primary-foreground/40"}`} />
          ))}
        </div>
      </section>

      {/* Subsidiary Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Companies" subtitle="Three integrated subsidiaries delivering excellence across Africa's industrial landscape." />
          <div className="grid md:grid-cols-3 gap-6">
            {subsidiaries.map((s, i) => (
              <Link key={s.name} to={s.path} className={`bg-card rounded-xl border-l-4 ${s.color} shadow-md hover:shadow-xl hover:scale-[1.02] transition-all p-6 group animate-fade-in-up`} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <img src={s.logo} alt={s.name} className="h-10 w-auto" />
                  <s.icon className="w-6 h-6 text-steel-grey group-hover:text-electric-blue transition-colors" />
                </div>
                <h3 className="font-headline font-bold text-lg text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-electric-blue">
                  Learn More <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Building Africa's Industrial Future" subtitle="DS Continental Projects is a diversified African industrial group coordinating operations across heavy equipment, security services, and mineral exploration." centered={false} />
            <p className="text-muted-foreground leading-relaxed">
              Headquartered in Nairobi, Kenya, we operate through three specialized subsidiaries that together form one of Africa's most dynamic industrial groups. Our integrated approach ensures seamless delivery across sectors, from sourcing heavy machinery to securing industrial sites and exploring mineral wealth.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-electric-blue font-subheading font-semibold hover:underline">
              About DS Continental Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-muted rounded-lg p-4 flex items-center gap-3 hover:bg-accent transition-colors">
                <ind.icon className="w-5 h-5 text-electric-blue" />
                <span className="text-sm font-medium text-foreground">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-navy">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Impact in Numbers" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm text-primary-foreground/70 font-subheading">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Africa Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Operations Across Africa" subtitle="Strategic presence in key markets across East and Central Africa." />
          <div className="relative max-w-lg mx-auto aspect-square bg-card rounded-xl border border-border shadow-lg overflow-hidden">
            <svg viewBox="0 0 400 450" className="w-full h-full">
              {/* Simplified Africa outline */}
              <path d="M180 40 Q220 30 240 50 L260 70 Q280 90 290 120 L300 160 Q310 200 300 240 L290 280 Q280 310 260 340 L240 370 Q220 400 200 420 L180 410 Q150 390 140 360 L130 320 Q120 280 130 240 L140 200 Q130 160 140 120 L150 80 Q160 50 180 40Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
              {regions.map((r) => (
                <g key={r.name}>
                  <circle cx={parseFloat(r.x) * 4} cy={parseFloat(r.y) * 4.5} r="8" fill="hsl(var(--industrial-red))" opacity="0.8" className="animate-pulse" />
                  <circle cx={parseFloat(r.x) * 4} cy={parseFloat(r.y) * 4.5} r="4" fill="hsl(var(--industrial-red))" />
                  <text x={parseFloat(r.x) * 4 + 14} y={parseFloat(r.y) * 4.5 + 4} className="text-xs fill-foreground font-subheading" fontSize="11">{r.name}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Projects" subtitle="Delivering results across Africa's most demanding industries." />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={p.title} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="h-40 gradient-navy flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-electric-blue opacity-50" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-industrial-red uppercase tracking-wider">{p.category}</span>
                  <h3 className="mt-1 font-headline font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-subheading font-semibold rounded-md hover:opacity-90 transition-opacity">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Strategic Partnerships" subtitle="Collaborating with global and continental leaders to deliver transformative solutions." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Equipment Manufacturers", "Security Technology", "Mining Corporations", "Government Bodies"].map((p) => (
              <div key={p} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <Users className="w-8 h-8 text-electric-blue mx-auto mb-3" />
                <p className="text-sm font-subheading font-medium text-foreground">{p}</p>
              </div>
            ))}
          </div>
          <Link to="/partnerships" className="mt-8 inline-flex items-center gap-2 text-electric-blue font-subheading font-semibold hover:underline">
            Explore Partnerships <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Insights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Latest Insights" subtitle="Expert analysis and industry knowledge from our team." />
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((a, i) => (
              <div key={a.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="text-xs font-semibold text-electric-blue uppercase tracking-wider">{a.category}</span>
                <h3 className="mt-2 font-headline font-bold text-foreground">{a.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{a.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/insights" className="inline-flex items-center gap-2 text-electric-blue font-subheading font-semibold hover:underline">
              View All Insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground">Ready to Partner with Africa's Industrial Leaders?</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Whether you need heavy equipment, security solutions, or mineral exploration services, DS Continental Projects is ready.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-industrial-red text-primary-foreground font-subheading font-semibold rounded-md hover:opacity-90 transition-opacity">
              Contact Us Today
            </Link>
            <Link to="/companies" className="px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-subheading font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors">
              Explore Our Companies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
