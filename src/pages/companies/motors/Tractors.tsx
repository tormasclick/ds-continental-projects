import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import SubsidiaryLayout from "@/components/SubsidiaryLayout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import heroImage from "@/assets/machinery_image_of_202604161655.jpeg";
import agriculturalTractorImage from "@/assets/Agricultural_Tractors_202604162105.jpeg";
import industrialTractorImage from "@/assets/Industrial_Tractors_Heavy-duty_202604162107.jpeg";
import utilityTractorImage from "@/assets/Utility_Tractors_Versatile_202604162108.jpeg";

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

const tractorTypes = [
  { 
    name: "Agricultural Tractors", 
    image: agriculturalTractorImage,
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    desc: "Powerful tractors designed for farming, crop production, and agricultural operations.", 
    specs: ["Horsepower: 50–200 HP", "Transmission: Manual/Auto", "Lift capacity: 2,000–8,000 kg"],
    features: ["Fuel-efficient engines", "Comfortable cab with AC", "Advanced hydraulics", "PTO for implements"],
    applications: ["Crop farming", "Plowing & tilling", "Harvesting", "Livestock operations"]
  },
  { 
    name: "Industrial Tractors", 
    image: industrialTractorImage,
    color: "from-orange-600 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    desc: "Heavy-duty tractors for construction sites, warehouses, and industrial facilities.", 
    specs: ["Horsepower: 80–300 HP", "4WD available", "Lift capacity: 3,000–12,000 kg"],
    features: ["Rugged construction", "High ground clearance", "Loader compatible", "All-weather operation"],
    applications: ["Construction sites", "Material handling", "Warehouse operations", "Mining support"]
  },
  { 
    name: "Utility Tractors", 
    image: utilityTractorImage,
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    desc: "Versatile tractors for municipal work, landscaping, and general utility tasks.", 
    specs: ["Horsepower: 40–120 HP", "Compact design", "Lift capacity: 1,500–4,000 kg"],
    features: ["Maneuverable", "Multiple attachments", "Easy maintenance", "Operator friendly"],
    applications: ["Landscaping", "Municipal maintenance", "Snow removal", "Grounds keeping"]
  },
];

const faqs = [
  { question: "What tractor brands do you supply?", answer: "We supply tractors from leading manufacturers including John Deere, Massey Ferguson, New Holland, Kubota, and Case IH." },
  { question: "Do you offer tractor financing?", answer: "Yes, we offer flexible financing and leasing options through our financial partners for qualified buyers." },
  { question: "What's the delivery timeline for tractors?", answer: "Delivery typically takes 3-6 weeks for in-stock models and 6-12 weeks for custom configurations." },
  { question: "Do you provide operator training?", answer: "Yes, we provide comprehensive operator training and safety certification for all tractor models we supply." },
  { question: "What warranty do you offer?", answer: "All tractors come with manufacturer warranty ranging from 1-3 years depending on the brand and model." }
];

const Tractors = () => (
  <SubsidiaryLayout companyName="DS Continental Motors" navItems={motorsNav} accentColor="border-electric-blue">
    <HeroSection
      title="Tractors"
      subtitle="Agricultural, industrial, and utility tractors for diverse operations across Africa."
      image={heroImage}
      primaryCta={{ label: "Request a Quote", href: "/companies/motors/contact" }}
    />

    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeading title="Tractor Range" subtitle="Choose the right tractor for your operation." />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {tractorTypes.map((t, i) => (
            <div key={t.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${t.color} opacity-40`} />
                <div className="absolute bottom-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${t.color} text-white shadow-lg`}>
                    {t.specs[0]}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-electric-blue transition-colors">{t.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.desc}</p>
                
                {/* Specifications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specifications:</h4>
                  <ul className="space-y-1">
                    {t.specs.map((s) => (
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
                    {t.features.map((f) => (
                      <span key={f} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{f}</span>
                    ))}
                  </div>
                </div>
                
                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {t.applications.map((a) => (
                      <span key={a} className="text-xs px-2 py-1 bg-electric-blue/10 rounded-full text-electric-blue">{a}</span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <WhatsAppCTA message={`Hello, I'm interested in ${t.name}.`} label="Inquire Now" />
                  <Link to="/companies/motors/contact" className="flex-1 px-4 py-2 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-all duration-300 text-center text-sm font-medium">
                    Request Quote
                  </Link>
                </div>
              </div>
              
              {/* Bottom Gradient Bar */}
              <div className={`h-1 bg-gradient-to-r ${t.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} title="Tractor FAQ" />
  </SubsidiaryLayout>
);

export default Tractors;
