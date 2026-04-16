import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import logoDcm from "@/assets/logo-dcm.png";
import WhatsAppCTA from "@/components/WhatsAppCTA";

interface MotorsLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  heroImage: string;
}

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

const MotorsLayout = ({ children, title, subtitle, heroImage }: MotorsLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <img src={logoDcm} alt="DS Continental Motors" className="h-12" />
            </div>
            <h1 className="text-3xl md:text-5xl font-headline text-white max-w-3xl animate-fade-in-up">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg text-white/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <div className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar gap-1 py-3">
            {motorsNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-subheading whitespace-nowrap rounded-md transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-electric-blue text-white shadow-md"
                    : "text-foreground hover:bg-muted hover:text-electric-blue"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {children}
      </div>

      {/* CTA Section */}
      <section className="py-20 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-white">Need Heavy Equipment?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Get in touch with our equipment specialists for a free consultation and quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/companies/motors/contact" className="px-8 py-3 bg-industrial-red text-white font-subheading rounded-md hover:opacity-90 transition-opacity">
              Request a Quote
            </Link>
            <WhatsAppCTA message="Hello, I need heavy equipment. Can you help?" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotorsLayout;
