import { MapPin, Calendar, ArrowRight } from "lucide-react";
import SecurityLayout from "@/components/SecurityLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/ds-continental-security.jpeg";

const projects = [
  { 
    title: "Kampala Industrial Security Deployment", 
    category: "Industrial Security", 
    location: "Kampala, Uganda", 
    year: "2023-Present", 
    desc: "Comprehensive security deployment for industrial zone covering 50+ facilities.",
  },
  { 
    title: "Kigali VIP Protection Services", 
    category: "VIP Protection", 
    location: "Kigali, Rwanda", 
    year: "2024-Present", 
    desc: "Executive protection services for multinational corporate clients.",
  },
  { 
    title: "Nairobi CBD Surveillance Network", 
    category: "CCTV & Surveillance", 
    location: "Nairobi, Kenya", 
    year: "2024", 
    desc: "Installation of 500+ CCTV cameras across central business district.",
  },
];

const SecurityProjects = () => {
  return (
    <SecurityLayout 
      title="Our Security Projects" 
      subtitle="Successfully delivered security solutions for corporate and industrial clients"
      heroImage={heroImage}
    >
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Security Projects" subtitle="Protecting assets and securing operations across East Africa" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s`, boxShadow: '0 20px 40px -12px rgba(220, 38, 38, 0.15)' }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={heroImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-industrial-red text-white text-xs font-semibold rounded-full">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-industrial-red transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.year}</span>
                    </div>
                    <button className="text-industrial-red hover:gap-2 transition-all flex items-center gap-1 text-sm">Learn More <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-industrial-red to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SecurityLayout>
  );
};

export default SecurityProjects;
