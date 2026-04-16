import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

interface SubsidiaryLayoutProps {
  companyName: string;
  navItems: NavItem[];
  accentColor: string;
  children: ReactNode;
}

const SubsidiaryLayout = ({ companyName, navItems, accentColor, children }: SubsidiaryLayoutProps) => {
  const location = useLocation();

  return (
    <div>
      {/* Sub-navigation bar */}
      <div className={`border-b-2 ${accentColor} bg-muted`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2" style={{ scrollbarWidth: "none" }}>
            <span className="text-sm font-headline text-foreground mr-4 whitespace-nowrap">{companyName}</span>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-background"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SubsidiaryLayout;
