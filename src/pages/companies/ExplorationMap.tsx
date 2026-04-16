import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { MapPin } from "lucide-react";

const zones = [
  { name: "Kenya", x: 248, y: 216, minerals: ["Gold", "Titanium", "Gemstones"], status: "Active Exploration" },
  { name: "Uganda", x: 224, y: 189, minerals: ["Gold", "Copper", "Cobalt"], status: "Survey Phase" },
  { name: "Tanzania", x: 240, y: 248, minerals: ["Gold", "Diamonds", "Tanzanite"], status: "Active Mining" },
  { name: "DRC", x: 192, y: 216, minerals: ["Cobalt", "Copper", "Coltan", "Gold"], status: "Exploration" },
  { name: "Rwanda", x: 216, y: 211, minerals: ["Tin", "Tungsten", "Tantalum"], status: "Survey Phase" },
];

const ExplorationMap = () => {
  const [selected, setSelected] = useState<typeof zones[0] | null>(null);

  return (
    <div className="pt-16">
      <section className="py-16 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-headline font-bold text-primary-foreground">Interactive Exploration Map</h1>
          <p className="mt-2 text-primary-foreground/80">Explore our mineral exploration zones across Africa.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="relative bg-card rounded-xl border border-border shadow-lg p-6">
              <svg viewBox="100 100 200 220" className="w-full">
                <path d="M180 110 Q220 105 240 120 L260 140 Q275 160 280 190 L285 220 Q290 250 280 280 L270 300 Q260 315 240 325 L220 330 Q200 335 185 325 L170 310 Q155 290 150 265 L145 235 Q140 200 145 170 L150 140 Q160 115 180 110Z" fill="hsl(210 20% 96%)" stroke="hsl(214 20% 85%)" strokeWidth="1.5" />
                {zones.map((z) => (
                  <g key={z.name} onClick={() => setSelected(z)} className="cursor-pointer">
                    <circle cx={z.x} cy={z.y} r="12" fill="hsl(356 82% 50%)" opacity="0.2" className="animate-pulse" />
                    <circle cx={z.x} cy={z.y} r="6" fill="hsl(356 82% 50%)" className="hover:r-8 transition-all" />
                    <text x={z.x + 10} y={z.y + 4} fontSize="9" fill="hsl(210 29% 13%)" className="font-subheading">{z.name}</text>
                  </g>
                ))}
              </svg>
            </div>
            <div>
              {selected ? (
                <div className="bg-card rounded-xl border border-border p-8 shadow-lg animate-fade-in-up">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-6 h-6 text-industrial-red" />
                    <h3 className="font-headline font-bold text-xl text-foreground">{selected.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Status: <span className="font-semibold text-electric-blue">{selected.status}</span></p>
                  <p className="text-sm font-subheading font-medium text-foreground mb-2">Key Minerals:</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.minerals.map((m) => (
                      <span key={m} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">{m}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-muted rounded-xl p-8 text-center">
                  <MapPin className="w-10 h-10 text-steel-grey mx-auto mb-3" />
                  <p className="text-muted-foreground">Click on a marker to view exploration details.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorationMap;
