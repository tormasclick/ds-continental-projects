import SectionHeading from "@/components/SectionHeading";
import { MapPin } from "lucide-react";

const regions = [
  { country: "Kenya", desc: "Group headquarters and primary operations base.", cities: ["Nairobi", "Mombasa", "Turkana"] },
  { country: "Uganda", desc: "Equipment supply and security operations.", cities: ["Kampala", "Jinja"] },
  { country: "Tanzania", desc: "Mining exploration and equipment deployment.", cities: ["Dar es Salaam", "Dodoma"] },
  { country: "DRC", desc: "Mineral exploration and extraction operations.", cities: ["Lubumbashi", "Kinshasa"] },
  { country: "Rwanda", desc: "Growing security and trading operations.", cities: ["Kigali"] },
];

const Regions = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-headline font-bold text-primary-foreground">Regions of Operation</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((r) => (
            <div key={r.country} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-industrial-red" />
                <h3 className="font-headline font-bold text-foreground">{r.country}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {r.cities.map((c) => (
                  <span key={c} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Regions;
