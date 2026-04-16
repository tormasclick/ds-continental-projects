import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const articles = [
  { title: "The Future of Gold Mining in East Africa", category: "Mining Insights", date: "March 2026", excerpt: "Exploring emerging opportunities in Kenya and Tanzania's gold sectors." },
  { title: "Heavy Equipment Maintenance Best Practices", category: "Equipment Guides", date: "February 2026", excerpt: "Essential maintenance tips to extend the life of industrial machinery." },
  { title: "Industrial Security Risk Trends 2026", category: "Security Reports", date: "January 2026", excerpt: "Analysis of evolving security threats in African industrial zones." },
  { title: "Cobalt Supply Chain: DRC Market Analysis", category: "Mining Insights", date: "December 2025", excerpt: "Deep dive into DRC's cobalt market and export dynamics." },
  { title: "Choosing the Right Excavator for African Terrain", category: "Equipment Guides", date: "November 2025", excerpt: "Guide to selecting excavators suited for Africa's diverse landscapes." },
  { title: "Securing Mining Operations: A Comprehensive Guide", category: "Security Reports", date: "October 2025", excerpt: "Best practices for protecting mining sites in high-risk regions." },
];

const Insights = () => (
  <div className="pt-16">
    <section className="py-16 gradient-navy text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">Insights & Knowledge Hub</h1>
        <p className="mt-4 text-lg text-primary-foreground/80">Expert analysis and industry knowledge from our team.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <div key={a.title} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-32 gradient-navy flex items-center justify-center">
                <span className="text-xs font-semibold text-electric-blue uppercase tracking-wider">{a.category}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{a.date}</p>
                <h3 className="mt-1 font-headline font-bold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-electric-blue font-medium group-hover:underline">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Insights;
