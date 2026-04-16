import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const labelMap: Record<string, string> = {
  about: "About",
  companies: "Our Companies",
  motors: "DS Continental Motors",
  security: "DS Continental Security",
  trading: "DS Continental Trading",
  projects: "Projects",
  partnerships: "Partnerships",
  insights: "Insights",
  contact: "Contact",
  "vision-mission": "Vision & Mission",
  leadership: "Leadership Team",
  structure: "Corporate Structure",
  regions: "Regions of Operation",
  compliance: "Compliance & Ethics",
  equipment: "Equipment",
  services: "Security Services",
  "import-calculator": "Import Calculator",
  "risk-assessment": "Risk Assessment",
  "exploration-map": "Exploration Map",
};

const Breadcrumbs = () => {
  const location = useLocation();
  if (location.pathname === "/") return null;

  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: labelMap[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    path: "/" + segments.slice(0, i + 1).join("/"),
  }));

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 pt-20">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={crumb.path} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5" />
            {i === crumbs.length - 1 ? (
              <span className="text-foreground font-medium">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="hover:text-primary transition-colors">{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
