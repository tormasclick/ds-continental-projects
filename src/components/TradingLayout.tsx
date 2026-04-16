import { Link, useLocation } from "react-router-dom";
import { tradingNav } from "@/data/tradingNav";
import logoDcp from "@/assets/logo-dcp.png";
import WhatsAppCTA from "@/components/WhatsAppCTA";

interface TradingLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  heroImage: string;
}

const TradingLayout = ({ children, title, subtitle, heroImage }: TradingLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] overflow-hidden">
        <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <img src={logoDcp} alt="DS Continental Trading" className="h-12" />
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

      <div className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar gap-1 py-3">
            {tradingNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-subheading whitespace-nowrap rounded-md transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-steel-grey text-white shadow-md"
                    : "text-foreground hover:bg-muted hover:text-steel-grey"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">{children}</div>

      <section className="py-20 bg-gradient-to-r from-steel-grey to-gray-700 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-white">Start Your Mining Project?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Partner with us for mineral exploration and trading opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/companies/trading/contact" className="px-8 py-3 bg-white text-steel-grey font-subheading rounded-md hover:opacity-90 transition-opacity">
              Contact Our Team
            </Link>
            <WhatsAppCTA message="Hello, I'm interested in mining and exploration services." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingLayout;
