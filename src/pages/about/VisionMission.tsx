import SectionHeading from "@/components/SectionHeading";
import { Target, Eye } from "lucide-react";

const VisionMission = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-headline font-bold text-primary-foreground">Vision & Mission</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-10">
        <div className="bg-card rounded-xl border border-border p-8">
          <Eye className="w-10 h-10 text-electric-blue mb-4" />
          <h2 className="font-headline font-bold text-xl text-foreground">Our Vision</h2>
          <p className="mt-3 text-muted-foreground">To be Africa's most trusted diversified industrial group, driving economic growth through integrated solutions in machinery, security, and mineral resources.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-8">
          <Target className="w-10 h-10 text-industrial-red mb-4" />
          <h2 className="font-headline font-bold text-xl text-foreground">Our Mission</h2>
          <p className="mt-3 text-muted-foreground">To energise the continental economy by delivering world-class industrial equipment, comprehensive security services, and responsible mineral exploration across Africa.</p>
        </div>
      </div>
    </section>
  </div>
);

export default VisionMission;
