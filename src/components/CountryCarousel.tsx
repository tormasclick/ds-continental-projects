import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const countries = [
  { name: "Tanzania", flag: "🇹🇿", desc: "Mining operations and mineral exploration across the mainland." },
  { name: "Kenya", flag: "🇰🇪", desc: "Headquarters. Equipment supply and security services." },
  { name: "Uganda", flag: "🇺🇬", desc: "Industrial security and infrastructure projects." },
  { name: "DR Congo", flag: "🇨🇩", desc: "Mineral exploration and mining partnerships." },
  { name: "Rwanda", flag: "🇷🇼", desc: "Security deployments and equipment supply." },
  { name: "Burundi", flag: "🇧🇮", desc: "Emerging market operations and trading." },
];

const CountryCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-md hover:bg-muted transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
        {countries.map((c) => (
          <div key={c.name} className="snap-start flex-shrink-0 w-[280px] bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <span className="text-5xl">{c.flag}</span>
            <h3 className="mt-3 text-lg font-headline text-foreground">{c.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
      <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-md hover:bg-muted transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CountryCarousel;
