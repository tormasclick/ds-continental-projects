import { useState } from "react";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Phone, Mail, MapPin } from "lucide-react";

const motorsNav = [
  { label: "Overview", path: "/companies/motors" },
  { label: "Excavators", path: "/companies/motors/excavators" },
  { label: "Tractors", path: "/companies/motors/tractors" },
  { label: "Engines", path: "/companies/motors/engines" },
  { label: "Import Services", path: "/companies/motors/import-services" },
  { label: "Spare Parts", path: "/companies/motors/spare-parts" },
  { label: "Calculator", path: "/companies/motors/import-calculator" },
  { label: "FAQ", path: "/companies/motors/faq" },
  { label: "Contact", path: "/companies/motors/contact" },
];

const MotorsContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", equipment: "" });

  return (
    <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Contact DS Continental Motors" subtitle="Get in touch for equipment inquiries, quotes, and support." />
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-electric-blue mt-1" />
                  <div>
                    <h3 className="font-headline text-foreground">Office</h3>
                    <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-electric-blue mt-1" />
                  <div>
                    <h3 className="font-headline text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-electric-blue mt-1" />
                  <div>
                    <h3 className="font-headline text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">motors@dscontinental.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <WhatsAppCTA message="Hello, I'd like to inquire about equipment from DS Continental Motors." />
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <input type="text" placeholder="Equipment of Interest" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.equipment} onChange={(e) => setForm({ ...form, equipment: e.target.value })} />
              <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </SubsidiaryLayout>
  );
};

export default MotorsContact;
