import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroImage from "@/assets/machinery_image_of_202604161655.jpeg";
import largeExcavatorImage from "@/assets/Large_excavators_for_202604162049.jpeg";
import mediumExcavatorImage from "@/assets/Medium_Excavators_202604162051.jpeg";
import miniExcavatorImage from "@/assets/Mini_Excavators_1–10_202604162056.jpeg";

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

const excavatorTypes = [
  { 
    name: "Large Excavators", 
    image: largeExcavatorImage,
    color: "from-orange-600 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    desc: "20+ ton excavators for mining, quarrying, and large-scale construction. Designed for maximum power and durability.", 
    specs: ["Operating weight: 20–90 tons", "Engine: 150–500 HP", "Bucket capacity: 1.0–5.0 m³"],
    features: ["High digging force", "Advanced hydraulics", "Heavy-duty undercarriage", "Telematics ready"],
    applications: ["Open-pit mining", "Large infrastructure", "Quarry operations", "Mass excavation"]
  },
  { 
    name: "Medium Excavators", 
    image: mediumExcavatorImage,
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    desc: "10–20 ton excavators for general construction, utility work, and site preparation.", 
    specs: ["Operating weight: 10–20 tons", "Engine: 80–150 HP", "Bucket capacity: 0.5–1.2 m³"],
    features: ["Excellent reach", "Fuel-efficient engines", "Comfortable cab", "Versatile attachments"],
    applications: ["Road construction", "Building foundations", "Demolition", "Landscaping"]
  },
  { 
    name: "Mini Excavators", 
    image: miniExcavatorImage,
    color: "from-green-600 to-teal-600",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
    desc: "Under 10 ton compact excavators for urban construction, landscaping, and confined spaces.", 
    specs: ["Operating weight: 1–10 tons", "Engine: 15–80 HP", "Bucket capacity: 0.02–0.5 m³"],
    features: ["Zero tail swing", "Excellent fuel efficiency", "Easy transport", "Versatile attachments"],
    applications: ["Urban construction", "Landscaping", "Utility work", "Residential projects"]
  },
];

const faqs = [
  { question: "What brands of excavators do you supply?", answer: "We source from leading global manufacturers including Caterpillar, Komatsu, Hitachi, Volvo, and JCB. We can also source specific brands on request." },
  { question: "Do you offer financing for excavator purchases?", answer: "Yes, we work with financial partners to offer flexible payment plans and leasing options for qualifying clients." },
  { question: "What is the delivery timeline?", answer: "Delivery timelines vary by model and destination. Typically 4–8 weeks for in-stock models and 8–16 weeks for custom orders." },
  { question: "Do you provide operator training?", answer: "Yes, we offer comprehensive operator training programs for all equipment we supply." },
];

const Excavators = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <HeroSection
      title="Excavators"
      subtitle="Large, medium, and mini excavators for construction, mining, and industrial projects across Africa."
      image={heroImage}
      primaryCta={{ label: "Request a Quote", href: "/companies/motors/contact" }}
    />

    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeading title="Excavator Range" subtitle="Choose the right excavator for your project." />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {excavatorTypes.map((e, i) => (
            <div key={e.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={e.image} 
                  alt={e.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${e.color} opacity-40`} />
                <div className="absolute bottom-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${e.color} text-white shadow-lg`}>
                    {e.specs[0].split(":")[1]}
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

    <FAQSection faqs={faqs} title="Excavator FAQ" />
  </SubsidiaryLayout>
);

export default Excavators;
