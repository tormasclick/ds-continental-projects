import SectionHeading from "@/components/SectionHeading";

const leaders = [
  { name: "David Sanya", role: "Founder & Group CEO", bio: "Visionary leader with 20+ years in African industrial development." },
  { name: "Sarah Kimani", role: "Group COO", bio: "Operations expert driving efficiency across all subsidiaries." },
  { name: "James Oduor", role: "MD, Continental Motors", bio: "Equipment industry veteran with deep supplier networks." },
  { name: "Grace Mwangi", role: "MD, Continental Security", bio: "Former security consultant with international experience." },
  { name: "Peter Otieno", role: "MD, Continental Trading", bio: "Mining geologist with expertise in East African mineral resources." },
  { name: "Faith Njeri", role: "Group CFO", bio: "Financial strategist ensuring sustainable growth across divisions." },
];

const Leadership = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-headline font-bold text-primary-foreground">Leadership Team</h1>
        <p className="mt-3 text-primary-foreground/80">The people driving DS Continental Projects forward.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((l) => (
            <div key={l.name} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center text-2xl font-headline font-bold text-steel-grey">
                {l.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-headline font-bold text-foreground">{l.name}</h3>
              <p className="text-sm text-electric-blue font-subheading font-medium">{l.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Leadership;
