import { useState } from "react";
import { Users, Handshake, Truck, Gem, FileText, ArrowRight, Mail, Phone, MapPin, Star, CheckCircle, Globe, Award, TrendingUp, Heart, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const partnerTypes = [
  { title: "Strategic Partners", icon: Handshake, desc: "Long-term alliances with global and continental industry leaders.", color: "from-electric-blue to-blue-600", bgColor: "bg-electric-blue", benefits: ["Joint ventures", "Technology transfer", "Market expansion"] },
  { title: "Investors", icon: Users, desc: "Growth capital partnerships for expansion across Africa.", color: "from-industrial-red to-red-600", bgColor: "bg-industrial-red", benefits: ["Equity opportunities", "Project financing", "ROI-focused"] },
  { title: "Equipment Suppliers", icon: Truck, desc: "Global OEM partnerships for machinery and spare parts.", color: "from-steel-grey to-gray-600", bgColor: "bg-steel-grey", benefits: ["Preferred supplier status", "Volume discounts", "Technical support"] },
  { title: "Mineral Buyers", icon: Gem, desc: "International commodity traders and mineral processors.", color: "from-amber-600 to-yellow-600", bgColor: "bg-amber-600", benefits: ["Consistent supply", "Quality assurance", "Competitive pricing"] },
];

const testimonials = [
  { quote: "DS Continental has been an exceptional partner. Their professionalism and market knowledge are outstanding.", author: "John Kamau", title: "CEO, Kamau Industries", rating: 5 },
  { quote: "Working with DS Continental has opened new opportunities for us in the African market.", author: "Lisa Wong", title: "Regional Director, Asian Mining Corp", rating: 5 },
];

const Partnerships = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    partnershipType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ companyName: "", email: "", partnershipType: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-electric-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-80 h-80 bg-industrial-red rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-steel-grey rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up">
            <Handshake className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-white">Collaborate With Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Strategic Partnerships
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Join forces with DS Continental Projects to drive industrial growth across Africa
          </p>
        </div>
      </section>

      {/* Partnership Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Partnership Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore various ways to collaborate with us</p>
            <div className="w-24 h-1 bg-electric-blue mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((partner, idx) => (
              <div key={partner.title} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${partner.color}`} />
                <div className="p-6">
                  <div className={`w-14 h-14 ${partner.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <partner.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{partner.desc}</p>
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Partner With DS Continental?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer unique advantages that make us the ideal partner</p>
            <div className="w-24 h-1 bg-electric-blue mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Pan-African Network", desc: "Established presence across 6 African countries" },
              { icon: Award, title: "Industry Expertise", desc: "Decades of experience in key sectors" },
              { icon: TrendingUp, title: "Growth Market", desc: "Access to rapidly developing markets" },
              { icon: Heart, title: "Trusted Partner", desc: "Known for reliability and excellence" }
            ].map((item, idx) => (
              <div key={idx} className="text-center group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-blue/20 transition-colors">
                  <item.icon className="w-10 h-10 text-electric-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Partners Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trusted by leading companies worldwide</p>
            <div className="w-24 h-1 bg-electric-blue mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Become a Partner</h2>
              <p className="text-gray-600">Fill out the form below, and our partnership team will reach out to you</p>
              <div className="w-24 h-1 bg-electric-blue mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Form Side */}
                <div className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                      <p className="text-gray-600">Your partnership inquiry has been received. We'll contact you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                        <select name="partnershipType" value={formData.partnershipType} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all">
                          <option value="">Select partnership type</option>
                          {partnerTypes.map(p => (
                            <option key={p.title} value={p.title}>{p.title}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message / Inquiry</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={3} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all" placeholder="Tell us about your organization..." />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-electric-blue hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                        {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
                        {!isSubmitting && <Send className="w-4 h-4" />}
                      </button>
                    </form>
                  )}
                </div>

                {/* Info Side */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <p className="text-sm">Access to growing African markets</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <p className="text-sm">Established local network and expertise</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <p className="text-sm">Long-term partnership commitment</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <p className="text-sm text-white/70 mb-2">Or reach out directly:</p>
                    <a href="mailto:partnerships@dscontinental.com" className="flex items-center gap-2 text-sm hover:text-electric-blue transition-colors">
                      <Mail className="w-4 h-4" /> partnerships@dscontinental.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
