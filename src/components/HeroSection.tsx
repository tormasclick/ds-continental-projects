import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = ({ slides = [] }: { slides?: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering && slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, slides.length]);

  if (slides.length === 0) return null;

  const current = slides[currentIndex];

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image - Full width */}
      <div className="absolute inset-0 w-full h-full">
        <img src={current.image} alt={current.label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 w-full" />
      </div>
      
      {/* Centered Content - Full width flex centering */}
      <div className="relative h-full w-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {current.label}
          </h1>
          {current.description && (
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {current.description}
            </p>
          )}
          {current.ctaText && (
            <button className="bg-electric-blue hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              {current.ctaText}
            </button>
          )}
        </div>
      </div>

      {/* Left and Right Navigation Buttons */}
      {slides.length > 1 && (
        <>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-electric-blue text-white p-3 rounded-full transition-all z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-electric-blue text-white p-3 rounded-full transition-all z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};

export default HeroSection;
