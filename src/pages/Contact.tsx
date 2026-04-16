import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-16">
      <section className="py-16 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">Contact Us</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">Get in touch with DS Continental Projects.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-headline font-bold text-2xl text-foreground mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-muted rounded-xl p-8 text-center">
                  <Send className="w-10 h-10 text-electric-blue mx-auto mb-3" />
                  <h3 className="font-headline font-bold text-foreground">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">Your message has been received. Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="px-3 py-2 rounded-md border border-input bg-background text-foreground" />
                    <input type="text" placeholder="Last Name" className="px-3 py-2 rounded-md border border-input bg-background text-foreground" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" />
                  <input type="text" placeholder="Company" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" />
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground">
                    <option>Select Inquiry Type</option>
                    <option>Equipment Inquiry</option>
                    <option>Security Services</option>
                    <option>Mining & Exploration</option>
                    <option>Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                  <textarea rows={4} placeholder="Your Message" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" />
                  <button onClick={() => setSubmitted(true)} className="w-full py-3 bg-industrial-red text-primary-foreground font-subheading font-semibold rounded-md hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <h2 className="font-headline font-bold text-2xl text-foreground mb-6">Contact Information</h2>
              {[
                { icon: MapPin, label: "Address", value: "Westlands, Nairobi, Kenya" },
                { icon: Mail, label: "Email", value: "info@dscontinental.com" },
                { icon: Phone, label: "Phone", value: "+254 700 000 000" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <c.icon className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-subheading font-semibold text-foreground">{c.label}</p>
                    <p className="text-muted-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
              <div className="mt-8 bg-muted rounded-xl p-6">
                <h3 className="font-subheading font-semibold text-foreground mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">Monday – Friday: 8:00 AM – 6:00 PM (EAT)</p>
                <p className="text-sm text-muted-foreground">Saturday: 9:00 AM – 1:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
