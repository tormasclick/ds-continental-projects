import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoDcp from "@/assets/logo-dcp-continental-projects.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About", path: "/about",
    children: [
      { label: "Company Overview", path: "/about" },
      { label: "Vision & Mission", path: "/about/vision-mission" },
      { label: "Leadership Team", path: "/about/leadership" },
      { label: "Corporate Structure", path: "/about/structure" },
      { label: "Regions of Operation", path: "/about/regions" },
      { label: "Compliance & Ethics", path: "/about/compliance" },
    ],
  },
  {
    label: "Our Companies", path: "/companies",
    children: [
      { label: "All Companies", path: "/companies" },
      { label: "DS Continental Motors", path: "/companies/motors" },
      { label: "DS Continental Security", path: "/companies/security" },
      { label: "DS Continental Trading", path: "/companies/trading" },
    ],
  },
  { label: "Partnerships", path: "/partnerships" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoDcp} alt="DS Continental Projects" className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-subheading rounded-md transition-colors flex items-center gap-1 ${
                  location.pathname === item.path || location.pathname.startsWith(item.path + "/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-card border border-border rounded-lg shadow-xl py-2 min-w-[220px] animate-fade-in-up">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link to="/contact" className="hidden lg:inline-flex px-5 py-2 text-sm font-subheading bg-industrial-red text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
          Get in Touch
        </Link>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link to={item.path} className="block py-2 font-subheading text-foreground" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link key={child.path} to={child.path} className="block py-1.5 pl-4 text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
