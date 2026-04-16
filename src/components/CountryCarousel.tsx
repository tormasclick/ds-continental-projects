import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Briefcase, Shield, Truck, Gem, Building, Users, Wrench, HardHat, Activity } from "lucide-react";

interface Country {
  name: string;
  flagCode: string;
  description: string;
  projects: string;
  operations: string[];
  stats: { label: string; value: string }[];
}

const countriesData: Country[] = [
  { 
    name: "Tanzania", 
    flagCode: "tz", 
    description: "Mining operations and mineral exploration across the mainland.",
    projects: "15+ Active Projects",
    operations: ["Mining Operations", "Mineral Exploration", "Equipment Supply"],
    stats: [{ label: "Mines Active", value: "8" }, { label: "Exploration Sites", value: "12" }]
  },
  { 
    name: "Kenya", 
    flagCode: "ke", 
    description: "Headquarters. Equipment supply and security services.",
    projects: "20+ Active Projects",
    operations: ["Corporate Security", "Equipment Supply", "HQ Operations"],
    stats: [{ label: "Security Personnel", value: "200+" }, { label: "Equipment Delivered", value: "500+" }]
  },
  { 
    name: "Uganda", 
    flagCode: "ug", 
    description: "Industrial security and infrastructure projects.",
    projects: "10+ Active Projects",
    operations: ["Industrial Security", "Infrastructure", "VIP Protection"],
    stats: [{ label: "Industrial Sites", value: "15" }, { label: "Security Deployments", value: "30+" }]
  },
  { 
    name: "DR Congo", 
    flagCode: "cd", 
    description: "Mineral exploration and mining partnerships.",
    projects: "12+ Active Projects",
    operations: ["Mineral Exploration", "Mining Partnerships", "Geological Surveys"],
    stats: [{ label: "Exploration Zones", value: "5" }, { label: "Mining Partners", value: "8" }]
  },
  { 
    name: "Rwanda", 
    flagCode: "rw", 
    description: "Security deployments and equipment supply.",
    projects: "8+ Active Projects",
    operations: ["Security Deployments", "Equipment Supply", "Risk Assessment"],
    stats: [{ label: "Active Contracts", value: "12" }, { label: "Equipment Units", value: "150+" }]
  },
  { 
    name: "Burundi", 
    flagCode: "bi", 
    description: "Emerging market operations and trading.",
    projects: "5+ Active Projects",
    operations: ["Market Operations", "Trading Services", "Emerging Markets"],
    stats: [{ label: "Trading Partners", value: "10" }, { label: "Active Projects", value: "5" }]
  }
];

// Helper function to get icon and color for operation type
const getOperationStyle = (operation: string) => {
  if (operation.includes("Mining") || operation.includes("Exploration")) 
    return { icon: Gem, color: "bg-amber-100 text-amber-700" };
  if (operation.includes("Security")) 
    return { icon: Shield, color: "bg-red-100 text-red-700" };
  if (operation.includes("Equipment") || operation.includes("Supply")) 
    return { icon: Truck, color: "bg-blue-100 text-blue-700" };
  if (operation.includes("Infrastructure")) 
    return { icon: HardHat, color: "bg-orange-100 text-orange-700" };
  if (operation.includes("Trading")) 
    return { icon: Briefcase, color: "bg-green-100 text-green-700" };
  return { icon: Building, color: "bg-gray-100 text-gray-700" };
};

const CountryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(countriesData.length / cardsPerView);
  const currentPage = Math.floor(currentIndex / cardsPerView);

  const next = () => {
    if ((currentIndex + cardsPerView) < countriesData.length) {
      setCurrentIndex(currentIndex + cardsPerView);
    } else {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex - cardsPerView >= 0) {
      setCurrentIndex(currentIndex - cardsPerView);
    } else {
      setCurrentIndex(Math.max(0, countriesData.length - cardsPerView));
    }
  };

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(next, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, currentIndex]);

  const visibleCountries = countriesData.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="overflow-hidden px-4">
        <div className="flex gap-6 transition-all duration-500 ease-out justify-center">
          {visibleCountries.map((country, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 transition-all duration-300"
              style={{ width: `calc(${100 / cardsPerView}% - 1.5rem)` }}
            >
              <div 
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ boxShadow: '0 20px 40px -8px #042E56' }}
              >
                {/* Flag Section - White rounded holder with outline */}
                <div className="p-6 pb-0 flex justify-center">
                  <div className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-gray-200">
                    <img 
                      src={`https://flagcdn.com/w80/${country.flagCode}.png`}
                      alt={`${country.name} flag`}
                      className="w-16 h-auto rounded-sm"
                    />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-1">{country.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs text-center mb-3">{country.description}</p>
                  
                  {/* Operations Tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                    {country.operations.map((op, i) => {
                      const { icon: Icon, color } = getOperationStyle(op);
                      return (
                        <span key={i} className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${color}`}>
                          <Icon className="w-3 h-3" />
                          {op}
                        </span>
                      );
                    })}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex justify-between mb-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                    {country.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-electric-blue">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{country.projects.split(" ")[0]}</div>
                      <div className="text-xs text-gray-500">Active Projects</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-electric-blue h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, parseInt(country.projects) * 5)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {countriesData.length > cardsPerView && (
        <>
          <button 
            onClick={prev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white dark:bg-slate-800 shadow-lg hover:bg-electric-blue hover:text-white text-electric-blue p-2 rounded-full transition-all duration-300 z-10"
            style={{ boxShadow: '0 4px 12px rgba(4, 46, 86, 0.2)' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white dark:bg-slate-800 shadow-lg hover:bg-electric-blue hover:text-white text-electric-blue p-2 rounded-full transition-all duration-300 z-10"
            style={{ boxShadow: '0 4px 12px rgba(4, 46, 86, 0.2)' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * cardsPerView)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === idx ? "bg-electric-blue w-6" : "bg-gray-300 dark:bg-gray-600 w-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryCarousel;
