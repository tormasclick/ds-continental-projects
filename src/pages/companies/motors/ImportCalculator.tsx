import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import MotorsLayout from "@/components/MotorsLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/machinery_image_of_202604161655.jpeg";

const ImportCalculator = () => {
  const [equipmentType, setEquipmentType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    let basePrice = 0;
    if (equipmentType === "excavator") basePrice = 50000;
    else if (equipmentType === "tractor") basePrice = 30000;
    else if (equipmentType === "engine") basePrice = 15000;
    else basePrice = 20000;
    
    const total = basePrice * quantity;
    setEstimate(total);
  };

  return (
    <MotorsLayout 
      title="Import Cost Calculator" 
      subtitle="Estimate your equipment import costs"
      heroImage={heroImage}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Calculate Your Import Cost" subtitle="Get an estimate for your heavy equipment import" />
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Equipment Type</label>
                <select 
                  value={equipmentType} 
                  onChange={(e) => setEquipmentType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-electric-blue focus:border-electric-blue"
                >
                  <option value="">Select equipment type</option>
                  <option value="excavator">Excavator</option>
                  <option value="tractor">Tractor</option>
                  <option value="engine">Industrial Engine</option>
                  <option value="other">Other Equipment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-electric-blue focus:border-electric-blue"
                />
              </div>

              <button 
                onClick={calculateEstimate}
                className="w-full bg-electric-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Calculate Estimate
              </button>

              {estimate !== null && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-center">
                    <span className="text-lg font-semibold text-green-800">Estimated Cost: </span>
                    <span className="text-2xl font-bold text-green-600">${estimate.toLocaleString()}</span>
                  </p>
                  <p className="text-sm text-green-600 text-center mt-2">*This is a rough estimate. Contact us for a detailed quote.</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a more accurate quote?</p>
            <a href="/companies/motors/contact" className="inline-flex items-center gap-2 bg-industrial-red hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all">
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </MotorsLayout>
  );
};

export default ImportCalculator;
