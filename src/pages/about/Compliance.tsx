import { ShieldCheck, Scale, FileCheck } from "lucide-react";

const Compliance = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-headline font-bold text-primary-foreground">Compliance & Ethics</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {[
          { icon: ShieldCheck, title: "Anti-Corruption", text: "We maintain a zero-tolerance policy for bribery and corruption across all operations and jurisdictions." },
          { icon: Scale, title: "Regulatory Compliance", text: "Full compliance with local and international regulations governing mining, security, and equipment importation." },
          { icon: FileCheck, title: "Environmental Standards", text: "Commitment to responsible mining practices and environmental stewardship in all exploration activities." },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-xl border border-border p-8 flex gap-6 items-start hover:shadow-lg transition-shadow">
            <item.icon className="w-10 h-10 text-electric-blue flex-shrink-0" />
            <div>
              <h3 className="font-headline font-bold text-foreground text-lg">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Compliance;
