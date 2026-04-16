import { MapPin, Calendar, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  { title: "Turkana Gold Mining Operations", category: "Mining", location: "Turkana, Kenya", year: "2024-Present", desc: "Large-scale gold exploration and extraction operations in Kenya's Turkana region." },
  { title: "Kampala Industrial Security Deployment", category: "Security", location: "Kampala, Uganda", year: "2023-Present", desc: "Comprehensive security deployment for industrial zone covering 50+ facilities." },
  { title: "Dar es Salaam Equipment Supply", category: "Equipment Supply", location: "Dar es Salaam, Tanzania", year: "2024", desc: "Supply of 25 excavators and industrial engines for a major construction project." },
  { title: "DRC Cobalt Exploration", category: "Mining", location: "Lubumbashi, DRC", year: "2025-Present", desc: "Cobalt and copper exploration across 3 licensed zones in southern DRC." },
  { title: "Kigali VIP Protection Services", category: "Security", location: "Kigali, Rwanda", year: "2024-Present", desc: "Executive protection services for multinational corporate clients." },
  { title: "Mombasa Port Equipment Import", category: "Equipment Supply", location: "Mombasa, Kenya", year: "2023", desc: "Import and deployment of port handling equipment for Mombasa port operations." },
];

const Projects = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">Our Projects</h1>
        <p className="mt-4 text-lg text-primary-foreground/80">Delivering results across Africa's most demanding industries.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
              <span className="text-xs font-semibold text-industrial-red uppercase tracking-wider">{p.category}</span>
              <h3 className="mt-2 font-headline font-bold text-lg text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.location}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
