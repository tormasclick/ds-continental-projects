import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Flag mapping using simple emoji as fallback, but we'll use image flags
const countriesData = [
  { name: "Tanzania", flagCode: "tz", description: "Mining operations and mineral exploration across the mainland.", projects: "15+ Active Projects" },
  { name: "Kenya", flagCode: "ke", description: "Headquarters. Equipment supply and security services.", projects: "20+ Active Projects" },
  { name: "Uganda", flagCode: "ug", description: "Industrial security and infrastructure projects.", projects: "10+ Active Projects" },
  { name: "DR Congo", flagCode: "cd", description: "Mineral exploration and mining partnerships.", projects: "12+ Active Projects" },
  { name: "Rwanda", flagCode: "rw", description: "Security deployments and equipment supply.", projects: "8+ Active Projects" },
  { name: "Burundi", flagCode: "bi", description: "Emerging market operations and trading.", projects: "5+ Active Projects" }
];

const CountryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive: show 1 card on mobile, 2 on tablet, 3 on desktop
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

  // Auto-scroll
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
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center" style={{ boxShadow: '0 20px 40px -12px rgba(0, 119, 255, 0.15)' }}>
                {/* Flag using CDN image - reliable across all browsers */}
                <img 
                  src={`https://flagcdn.com/w80/${country.flagCode}.png`}
                  alt={`${country.name} flag`}
                  className="w-20 h-20 mx-auto mb-4 rounded-lg shadow-md object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{country.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{country.description}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs font-semibold rounded-full">
                  {country.projects}
                </span>
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
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white dark:bg-slate-800 shadow-lg hover:bg-electric-blue hover:text-white text-electric-blue p-2 rounded-full transition-all duration-300 z-10"
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
