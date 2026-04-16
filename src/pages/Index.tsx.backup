import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Gem, Factory, Globe, Pickaxe, Wrench, BarChart3, ChevronRight, Wheat } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";
import CountryCarousel from "@/components/CountryCarousel";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import logoDcm from "@/assets/logo-dcm.png";
import logoDcs from "@/assets/logo-dcs.png";
import logoDcp from "@/assets/logo-dcp.png";
import heroMachinery from "@/assets/hero-machinery.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
import heroMining from "@/assets/hero-mining.jpg";

const slides = [
  { image: heroMining, label: "Mining Exploration" },
  { image: heroMachinery, label: "Heavy Machinery Operations" },
  { image: heroSecurity, label: "Security Operations" },
];

const subsidiaries = [
  { name: "DS Continental Motors", desc: "Heavy equipment sourcing, machinery supply, and industrial import services across East and Central Africa.", logo: logoDcm, path: "/companies/motors", color: "border-electric-blue", icon: Truck, image: heroMachinery },
  { name: "DS Continental Security", desc: "Corporate, industrial, and mining security services with advanced surveillance solutions.", logo: logoDcs, path: "/companies/security", color: "border-industrial-red", icon: Shield, image: heroSecurity },
  { name: "DS Continental Trading", desc: "Geological surveys, mineral exploration, mining operations, and mineral export services.", logo: logoDcp, path: "/companies/trading", color: "border-steel-grey", icon: Gem, image: heroMining },
];

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Countries Served", value: 6, suffix: "" },
  { label: "Operational Divisions", value: 3, suffix: "" },
];

const industries = [
  { name: "Mining & Exploration", icon: Pickaxe, href: "/companies/trading" },
  { name: "Construction", icon: Factory, href: "/companies/motors" },
  { name: "Infrastructure", icon: Globe, href: "/projects" },
  { name: "Agriculture", icon: Wheat, href: "/companies/motors/tractors" },
  { name: "Industrial Operations", icon: Wrench, href: "/companies/motors" },
];

const capabilities = [
  { title: "Equipment Supply", desc: "Sourcing and importing heavy machinery from global manufacturers.", icon: Truck, href: "/companies/motors" },
  { title: "Mining Exploration", desc: "Geological surveys and mineral exploration across key regions.", icon: Gem, href: "/companies/trading" },
  { title: "Security Operations", desc: "Comprehensive corporate and industrial protection services.", icon: Shield, href: "/companies/security" },
  { title: "Industrial Support", desc: "Maintenance, spare parts, and technical support services.", icon: Wrench, href: "/companies/motors/spare-parts" },
];

const insights = [
  { title: "The Future of Mining in East Africa", category: "Mining Insights", date: "March 2026" },
  { title: "Heavy Equipment Maintenance Best Practices", category: "Equipment Guides", date: "February 2026" },
  { title: "Industrial Security Risk Trends 2026", category: "Security Reports", date: "January 2026" },
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
  return <span ref={ref} className="text-4xl md:text-5xl font-headline text-electric-blue">{count}{suffix}</span>;
}

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* SECTION 1 — Hero Video Carousel */}
      <section className="relative h-[60vh] md:h-[65vh] overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === activeSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={s.image} alt={s.label} className={`w-full h-full object-cover ${i === activeSlide ? "animate-slow-zoom" : ""}`} />
          </div>
        ))}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline text-primary-foreground max-w-4xl animate-fade-in-up">
              Powering Industry Across East and Central Africa
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Integrated solutions in heavy machinery supply, mineral exploration, and professional security services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/companies" className="px-7 py-3 bg-industrial-red text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
                Explore Our Companies <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppCTA label="Chat on WhatsApp" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)} className={`w-3 h-3 rounded-full transition-all ${i === activeSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`} />
          ))}
        </div>
      </section>

      {/* SECTION 2 — About DS Continental Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="About DS Continental Projects" subtitle="A diversified African industrial group coordinating operations across heavy equipment, security services, and mineral exploration." centered={false} />
            <p className="text-muted-foreground leading-relaxed">
              Headquartered in Nairobi, Kenya, DS Continental Projects operates through three specialized subsidiaries across East and Central Africa. Our integrated approach ensures seamless delivery — from sourcing heavy machinery to securing industrial sites and exploring mineral wealth.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-electric-blue font-subheading hover:underline">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm text-muted-foreground font-subheading">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Subsidiary Company Cards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Companies" subtitle="Three integrated subsidiaries delivering excellence across Africa's industrial landscape." />
          <div className="grid md:grid-cols-3 gap-8">
            {subsidiaries.map((s, i) => (
              <Link key={s.name} to={s.path} className={`group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up`} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="h-48 overflow-hidden">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className={`p-6 border-l-4 ${s.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <img src={s.logo} alt={s.name} className="h-8 w-auto" />
                    <s.icon className="w-5 h-5 text-steel-grey group-hover:text-electric-blue transition-colors" />
                  </div>
                  <h3 className="font-headline text-lg text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-subheading text-electric-blue group-hover:gap-2 transition-all">
                    Enter Company Site <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Industries We Serve" subtitle="Delivering solutions across Africa's most critical sectors." />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <Link key={ind.name} to={ind.href} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <ind.icon className="w-10 h-10 text-electric-blue mx-auto group-hover:scale-110 transition-transform" />
                <p className="mt-3 text-sm font-subheading text-foreground">{ind.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Countries of Operation Carousel */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Countries of Operation" subtitle="Strategic presence across East and Central Africa." />
          <CountryCarousel />
        </div>
      </section>

      {/* SECTION 6 — Core Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Core Capabilities" subtitle="Integrated industrial solutions delivered by our subsidiaries." />
          <div className="grid md:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <Link key={c.title} to={c.href} className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <c.icon className="w-10 h-10 text-electric-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-headline text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-electric-blue font-subheading group-hover:gap-2 transition-all">
                  Explore <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Insights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Latest Insights" subtitle="Expert analysis and industry knowledge from our team." />
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((a, i) => (
              <div key={a.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="text-xs font-subheading text-electric-blue uppercase tracking-wider">{a.category}</span>
                <h3 className="mt-2 font-headline text-foreground">{a.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{a.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/insights" className="inline-flex items-center gap-2 text-electric-blue font-subheading hover:underline">
              View All Insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Final CTA */}
      <section className="py-24 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground animate-fade-in-up">
            Start Your Project With DS Continental
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Whether you need heavy equipment, security solutions, or mineral exploration services — we're ready to deliver.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact" className="px-8 py-3 bg-industrial-red text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity">
              Contact Us
            </Link>
            <WhatsAppCTA label="Chat on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
