import { Users, Handshake, Truck, Gem, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const partnerTypes = [
  { title: "Strategic Partners", icon: Handshake, desc: "Long-term alliances with global and continental industry leaders." },
  { title: "Investors", icon: Users, desc: "Growth capital partnerships for expansion across Africa." },
  { title: "Equipment Suppliers", icon: Truck, desc: "Global OEM partnerships for machinery and spare parts." },
  { title: "Mineral Buyers", icon: Gem, desc: "International commodity traders and mineral processors." },
];

const Partnerships = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">Partnerships</h1>
        <p className="mt-4 text-lg text-primary-foreground/80">Collaborating with global leaders to deliver transformative industrial solutions.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {partnerTypes.map((p) => (
            <div key={p.title} className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <p.icon className="w-10 h-10 text-electric-blue mb-4" />
              <h3 className="font-headline font-bold text-xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted text-center">
      <div className="container mx-auto px-4">
        <SectionHeading title="Become a Partner" subtitle="Register your interest in partnering with DS Continental Projects." />
        <div className="max-w-md mx-auto bg-card rounded-xl border border-border p-8 shadow-lg">
          <div className="space-y-4">
            <input type="text" placeholder="Company Name" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" />
            <input type="email" placeholder="Email Address" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" />
            <select className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground">
              <option>Partnership Type</option>
              <option>Strategic Partner</option>
              <option>Investor</option>
              <option>Equipment Supplier</option>
              <option>Mineral Buyer</option>
            </select>
            <textarea placeholder="Tell us about your organization..." rows={3} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" />
            <button className="w-full py-3 bg-primary text-primary-foreground font-subheading font-semibold rounded-md hover:opacity-90 transition-opacity">
              Submit Registration
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Partnerships;
