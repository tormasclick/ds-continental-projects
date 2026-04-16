import { Link } from "react-router-dom";
import { ChevronRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  accentColor?: string;
  image?: string;
}

const ServiceCard = ({ title, description, icon: Icon, href, accentColor = "border-electric-blue", image }: ServiceCardProps) => (
  <Link
    to={href}
    className={`group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
  >
    {image && (
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
    )}
    <div className={`p-6 border-l-4 ${accentColor}`}>
      <Icon className="w-8 h-8 text-electric-blue mb-3" />
      <h3 className="font-headline text-lg text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-subheading text-electric-blue group-hover:gap-2 transition-all">
        Learn More <ChevronRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;
