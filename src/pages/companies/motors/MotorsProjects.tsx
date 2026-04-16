import { MapPin, Calendar, ArrowRight } from "lucide-react";
import MotorsLayout from "@/components/MotorsLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/machinery_image_of_202604161655.jpeg";

const projects = [
  { 
    title: "Mombasa Port Heavy Equipment Supply", 
    category: "Equipment Supply", 
    location: "Mombasa, Kenya", 
    year: "2024", 
    desc: "Supply of 15 excavators and 20 dump trucks for port expansion project.",
  },
  { 
    title: "Nairobi Expressway Machinery Support", 
    category: "Infrastructure", 
    location: "Nairobi, Kenya", 
    year: "2023-2024", 
    desc: "Heavy machinery and equipment support for major highway construction.",
  },
  { 
    title: "Tanzania Mining Equipment Deployment", 
    category: "Mining", 
    location: "Geita, Tanzania", 
    year: "2024-Present", 
    desc: "Deployment of 25 heavy excavators and drilling equipment for gold mining operations.",
  },
];

const MotorsProjects = () => {
  return (
    <MotorsLayout 
      title="Our Projects" 
      subtitle="Successfully delivered heavy equipment solutions across East and Central Africa"
      heroImage={heroImage}
    >
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Delivering excellence in heavy equipment supply and support" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s`, boxShadow: '0 20px 40px -12px rgba(0, 119, 255, 0.15)' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={heroImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-electric-blue text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.year}</span>
                    </div>
                    <button className="text-electric-blue hover:gap-2 transition-all flex items-center gap-1 text-sm">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-electric-blue to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotorsLayout>
  );
};

export default MotorsProjects;
