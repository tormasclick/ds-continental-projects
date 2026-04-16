import { useState } from "react";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Phone, Mail, MapPin } from "lucide-react";

const tradingNav = [
  { label: "Overview", path: "/companies/trading" },
  { label: "Geological Survey", path: "/companies/trading/geological-survey" },
  { label: "Exploration", path: "/companies/trading/exploration" },
  { label: "Mining Ops", path: "/companies/trading/mining-operations" },
  { label: "Processing", path: "/companies/trading/processing" },
  { label: "Lab Testing", path: "/companies/trading/lab-testing" },
  { label: "Export", path: "/companies/trading/export" },
  { label: "Regions", path: "/companies/trading/regions" },
  { label: "FAQ", path: "/companies/trading/faq" },
  { label: "Contact", path: "/companies/trading/contact" },
];

const TradingContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", interest: "" });

  return (
    <SubsidiaryLayout companyName="DS Continental Trading" navItems={tradingNav} accentColor="border-steel-grey">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Contact DS Continental Trading" subtitle="Inquire about mining services, partnerships, and exploration opportunities." />
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-electric-blue mt-1" /><div><h3 className="font-headline text-foreground">Office</h3><p className="text-sm text-muted-foreground">Nairobi, Kenya</p></div></div>
              <div className="flex items-start gap-4"><Phone className="w-6 h-6 text-electric-blue mt-1" /><div><h3 className="font-headline text-foreground">Phone</h3><p className="text-sm text-muted-foreground">+254 700 000 000</p></div></div>
              <div className="flex items-start gap-4"><Mail className="w-6 h-6 text-electric-blue mt-1" /><div><h3 className="font-headline text-foreground">Email</h3><p className="text-sm text-muted-foreground">trading@dscontinental.com</p></div></div>
              <div className="mt-8"><WhatsAppCTA message="Hello, I'd like to discuss mining and exploration opportunities." /></div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                <option value="">Area of Interest</option>
                <option>Geological Survey</option>
                <option>Mineral Exploration</option>
                <option>Mining Operations</option>
                <option>Mineral Processing</option>
                <option>Laboratory Testing</option>
                <option>Mineral Export</option>
                <option>Partnership</option>
              </select>
              <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground font-subheading rounded-md hover:opacity-90 transition-opacity">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </SubsidiaryLayout>
  );
};

export default TradingContact;
