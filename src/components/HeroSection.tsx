import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  primaryCta?: { label: string; href: string; icon?: LucideIcon };
  secondaryCta?: { label: string; href: string };
  height?: string;
}

const HeroSection = ({ title, subtitle, image, primaryCta, secondaryCta, height = "h-[50vh]" }: HeroSectionProps) => (
  <section className={`relative ${height} overflow-hidden`}>
    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 gradient-hero" />
    <div className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-headline text-primary-foreground max-w-3xl animate-fade-in-up">
          {title}
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {primaryCta && (
              <Link to={primaryCta.href} className="px-6 py-3 bg-industrial-red text-primary-foreground font-subheading font-medium rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
                {primaryCta.icon && <primaryCta.icon className="w-4 h-4" />}
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.href} className="px-6 py-3 border border-primary-foreground/40 text-primary-foreground font-subheading font-medium rounded-md hover:bg-primary-foreground/10 transition-colors">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  </section>
);

export default HeroSection;
