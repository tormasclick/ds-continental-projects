import { useState } from "react";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Phone, Mail, MapPin } from "lucide-react";

const securityNav = [
  { label: "Overview", path: "/companies/security" },
  { label: "Corporate", path: "/companies/security/corporate" },
  { label: "Industrial", path: "/companies/security/industrial" },
  { label: "Mining", path: "/companies/security/mining" },
  { label: "VIP", path: "/companies/security/vip" },
  { label: "Event", path: "/companies/security/event" },
  { label: "Surveillance", path: "/companies/security/surveillance" },
  { label: "Risk Assessment", path: "/companies/security/risk-assessment" },
  { label: "FAQ", path: "/companies/security/faq" },
  { label: "Contact", path: "/companies/security/contact" },
];

const SecurityContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", service: "" });

  return (
    <SubsidiaryLayout companyName="DS Continental Security" navItems={securityNav} accentColor="border-industrial-red">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Contact DS Continental Security" subtitle="Get in touch for security consultations and quotes." />
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-industrial-red mt-1" /><div><h3 className="font-headline text-foreground">Office</h3><p className="text-sm text-muted-foreground">Nairobi, Kenya</p></div></div>
              <div className="flex items-start gap-4"><Phone className="w-6 h-6 text-industrial-red mt-1" /><div><h3 className="font-headline text-foreground">Phone</h3><p className="text-sm text-muted-foreground">+254 700 000 000</p></div></div>
              <div className="flex items-start gap-4"><Mail className="w-6 h-6 text-industrial-red mt-1" /><div><h3 className="font-headline text-foreground">Email</h3><p className="text-sm text-muted-foreground">security@dscontinental.com</p></div></div>
              <div className="mt-8"><WhatsAppCTA message="Hello, I'd like to inquire about security services." /></div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Select Service</option>
                <option>Corporate Security</option>
                <option>Industrial Security</option>
                <option>Mining Security</option>
                <option>VIP Protection</option>
                <option>Event Security</option>
                <option>Surveillance Solutions</option>
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

export default SecurityContact;
