import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { AlertTriangle } from "lucide-react";

const riskPlans: Record<string, string> = {
  "small-low": "Basic security package: 2 guards, perimeter monitoring, weekly patrols.",
  "small-medium": "Standard package: 4 guards, CCTV system (8 cameras), 24/7 monitoring.",
  "small-high": "Enhanced package: 6 guards, full CCTV (16 cameras), armed response unit, access control.",
  "medium-low": "Standard package: 6 guards, CCTV system (16 cameras), access control.",
  "medium-medium": "Advanced package: 10 guards, full CCTV (32 cameras), control room, patrol vehicles.",
  "medium-high": "Premium package: 16 guards, advanced surveillance, armed response, K9 unit, access control.",
  "large-low": "Corporate package: 12 guards, integrated CCTV (48 cameras), central control room.",
  "large-medium": "Enterprise package: 20 guards, full perimeter defense, armed response, drone surveillance.",
  "large-high": "Maximum security: 30+ guards, military-grade surveillance, armored response, 24/7 command center.",
};

const RiskAssessment = () => {
  const [size, setSize] = useState("medium");
  const [location, setLocation] = useState("urban");
  const [risk, setRisk] = useState("medium");
  const [result, setResult] = useState<string | null>(null);

  const assess = () => {
    setResult(riskPlans[`${size}-${risk}`] || "Custom assessment required. Please contact our team.");
  };

  return (
    <div className="pt-16">
      <section className="py-16 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-headline font-bold text-primary-foreground">Security Risk Assessment Tool</h1>
          <p className="mt-2 text-primary-foreground/80">Get a recommended security plan for your facility.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
            <AlertTriangle className="w-10 h-10 text-industrial-red mb-4" />
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-subheading font-medium text-foreground mb-1">Facility Size</label>
                <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground">
                  <option value="small">Small (up to 5,000 sqm)</option>
                  <option value="medium">Medium (5,000 - 50,000 sqm)</option>
                  <option value="large">Large (50,000+ sqm)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-subheading font-medium text-foreground mb-1">Location Type</label>
                <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground">
                  <option value="urban">Urban</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural / Remote</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-subheading font-medium text-foreground mb-1">Risk Level</label>
                <select value={risk} onChange={(e) => setRisk(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button onClick={assess} className="w-full py-3 bg-industrial-red text-primary-foreground font-subheading font-semibold rounded-md hover:opacity-90 transition-opacity">
                Get Security Recommendation
              </button>
            </div>
            {result && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-1">Recommended Security Plan</p>
                <p className="text-sm text-muted-foreground">{result}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskAssessment;
