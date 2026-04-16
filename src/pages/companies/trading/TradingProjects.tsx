import { MapPin, Calendar, ArrowRight } from "lucide-react";
import TradingLayout from "@/components/TradingLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/Geological_surveys,_mineral_202604161707.jpeg";

const projects = [
  { 
    title: "Turkana Gold Mining Operations", 
    category: "Gold Mining", 
    location: "Turkana, Kenya", 
    year: "2024-Present", 
    desc: "Large-scale gold exploration and extraction operations in Kenya's Turkana region.",
  },
  { 
    title: "DRC Cobalt Exploration", 
    category: "Mineral Exploration", 
    location: "Lubumbashi, DRC", 
    year: "2025-Present", 
    desc: "Cobalt and copper exploration across 3 licensed zones in southern DRC.",
  },
  { 
    title: "Tanzania Geological Surveys", 
    category: "Geological Surveys", 
    location: "Geita, Tanzania", 
    year: "2024", 
    desc: "Comprehensive geological mapping and mineral resource assessment.",
  },
];

const TradingProjects = () => {
  return (
    <TradingLayout 
      title="Our Mining & Trading Projects" 
      subtitle="Leading mineral exploration and mining operations across East and Central Africa"
      heroImage={heroImage}
    >
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Mining Projects" subtitle="Unlocking Africa's mineral wealth through exploration and sustainable mining" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s`, boxShadow: '0 20px 40px -12px rgba(100, 100, 100, 0.15)' }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={heroImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-steel-grey text-white text-xs font-semibold rounded-full">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-steel-grey transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.year}</span>
                    </div>
                    <button className="text-steel-grey hover:gap-2 transition-all flex items-center gap-1 text-sm">Learn More <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-steel-grey to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TradingLayout>
  );
};

export default TradingProjects;
