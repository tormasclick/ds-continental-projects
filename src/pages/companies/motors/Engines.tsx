import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroImage from "@/assets/machinery_image_of_202604161655.jpeg";
import dieselEnginesImage from "@/assets/Diesel_Engines_202604162118.jpeg";
import replacementEnginesImage from "@/assets/Replacement_Engines_OEM_202604162120.jpeg";

const motorsNav = [
  { label: "Overview", path: "/companies/motors" },
  { label: "Excavators", path: "/companies/motors/excavators" },
  { label: "Tractors", path: "/companies/motors/tractors" },
  { label: "Engines", path: "/companies/motors/engines" },
  { label: "Import Services", path: "/companies/motors/import-services" },
  { label: "Projects", path: "/companies/motors/projects" },
  { label: "Spare Parts", path: "/companies/motors/spare-parts" },
  { label: "Calculator", path: "/companies/motors/import-calculator" },
  { label: "FAQ", path: "/companies/motors/faq" },
  { label: "Contact", path: "/companies/motors/contact" },
];

const engineTypes = [
  { 
    name: "Diesel Engines", 
    image: dieselEnginesImage,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    desc: "High-performance diesel engines for industrial, construction, and heavy equipment applications.", 
    specs: ["Power range: 50–1000 HP", "Fuel efficiency: Optimized", "Emissions: Tier 4 compliant"],
    features: ["Durable construction", "Low maintenance", "Fuel efficient", "Reliable starting"],
    applications: ["Construction equipment", "Generators", "Marine vessels", "Heavy machinery"]
  },
  { 
    name: "Replacement Engines", 
    image: replacementEnginesImage,
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    desc: "OEM and aftermarket replacement engines for all major equipment brands and models.", 
    specs: ["Direct fit replacements", "OEM specifications", "Full warranty included"],
    features: ["Plug-and-play installation", "Compatible with major brands", "Cost-effective", "Reliable performance"],
    applications: ["Equipment overhaul", "Engine replacement", "Fleet maintenance", "Upgrade projects"]
  },
];

const faqs = [
  { question: "What engine brands do you supply?", answer: "We supply engines from leading manufacturers including Cummins, Caterpillar, Perkins, Deutz, and Volvo Penta." },
  { question: "Do you offer installation services?", answer: "Yes, we have certified technicians who can handle installation at your site or our facility." },
  { question: "What is the warranty on engines?", answer: "All new engines come with manufacturer warranty. Rebuilt engines have a 1-year warranty." },
  { question: "Can you source engines for specific equipment?", answer: "Yes, we can source engines for any make and model of equipment from our global network of suppliers." },
];

const Engines = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <HeroSection
      title="Industrial Engines"
      subtitle="Diesel engines and replacement engines for industrial use across Africa."
      image={heroImage}
      primaryCta={{ label: "Request a Quote", href: "/companies/motors/contact" }}
    />

    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeading title="Engine Range" subtitle="Power solutions for your industrial needs." />
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {engineTypes.map((e, i) => (
            <div key={e.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={e.image} 
                  alt={e.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${e.color} opacity-40`} />
                <div className="absolute bottom-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${e.color} text-white shadow-lg`}>
                    {e.specs[0]}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-electric-blue transition-colors">{e.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{e.desc}</p>
                
                {/* Specifications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specifications:</h4>
                  <ul className="space-y-1">
                    {e.specs.map((s) => (
                      <li key={s} className="text-xs text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue"></div>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {e.features.map((f) => (
                      <span key={f} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{f}</span>
                    ))}
                  </div>
                </div>
                
                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {e.applications.map((a) => (
                      <span key={a} className="text-xs px-2 py-1 bg-electric-blue/10 rounded-full text-electric-blue">{a}</span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <WhatsAppCTA message={`Hello, I'm interested in ${e.name}.`} label="Inquire Now" />
                  <Link to="/companies/motors/contact" className="flex-1 px-4 py-2 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-all duration-300 text-center text-sm font-medium">
                    Request Quote
                  </Link>
                </div>
              </div>
              
              {/* Bottom Gradient Bar */}
              <div className={`h-1 bg-gradient-to-r ${e.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} title="Engine FAQ" />
  </SubsidiaryLayout>
);

export default Engines;
