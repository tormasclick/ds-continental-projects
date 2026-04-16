import SectionHeading from "@/components/SectionHeading";
import { Building2 } from "lucide-react";

const CorporateStructure = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-headline font-bold text-primary-foreground">Corporate Structure</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-headline font-bold text-xl">DS Continental Projects</div>
          <div className="w-0.5 h-10 bg-border mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "DS Continental Motors", focus: "Heavy Equipment & Machinery" },
            { name: "DS Continental Security", focus: "Protection & Surveillance" },
            { name: "DS Continental Trading", focus: "Mining & Mineral Exploration" },
          ].map((s) => (
            <div key={s.name} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
              <Building2 className="w-8 h-8 text-electric-blue mx-auto mb-3" />
              <h3 className="font-headline font-bold text-sm text-foreground">{s.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default CorporateStructure;
