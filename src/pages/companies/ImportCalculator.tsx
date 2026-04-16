import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Calculator } from "lucide-react";

const ImportCalculator = () => {
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [country, setCountry] = useState("Kenya");
  const [tax, setTax] = useState("16");
  const [result, setResult] = useState<{ total: number; delivery: string } | null>(null);

  const calculate = () => {
    const p = parseFloat(price) || 0;
    const s = parseFloat(shipping) || 0;
    const t = parseFloat(tax) || 0;
    const subtotal = p + s;
    const taxAmount = subtotal * (t / 100);
    const total = subtotal + taxAmount;
    const deliveryDays = country === "Kenya" ? "14-21 days" : country === "Uganda" ? "18-28 days" : "21-35 days";
    setResult({ total, delivery: deliveryDays });
  };

  return (
    <div className="pt-16">
      <section className="py-16 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-headline font-bold text-primary-foreground">Equipment Import Cost Calculator</h1>
          <p className="mt-2 text-primary-foreground/80">Estimate your total machinery import costs.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
            <Calculator className="w-10 h-10 text-electric-blue mb-4" />
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-subheading font-medium text-foreground mb-1">Machine Price (USD)</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" placeholder="e.g. 250000" />
              </div>
              <div>
                <label className="block text-sm font-subheading font-medium text-foreground mb-1">Shipping Cost (USD)</label>
                <input type="number" value={shipping} onChange={(e) => setShipping(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" placeholder="e.g. 15000" />
              </div>
              <div>
                <label className="block text-sm font-subheading font-medium text-foreground mb-1">Destination Country</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground">
                  {["Kenya", "Uganda", "Tanzania", "DRC", "Rwanda"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-subheading font-medium text-foreground mb-1">Tax Percentage (%)</label>
                <input type="number" value={tax} onChange={(e) => setTax(e.target.value)} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground" />
              </div>
              <button onClick={calculate} className="w-full py-3 bg-electric-blue text-primary-foreground font-subheading font-semibold rounded-md hover:opacity-90 transition-opacity">
                Calculate Total Cost
              </button>
            </div>
            {result && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Estimated Total Import Cost</p>
                <p className="text-3xl font-mono-stat font-bold text-electric-blue">${result.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                <p className="mt-2 text-sm text-muted-foreground">Estimated Delivery: <span className="font-semibold text-foreground">{result.delivery}</span></p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportCalculator;
