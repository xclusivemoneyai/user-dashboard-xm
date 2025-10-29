import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Calculator } from "lucide-react";

export const PricingCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState("copy-trading");
  const [selectedCycle, setSelectedCycle] = useState("monthly");
  const [selectedTier, setSelectedTier] = useState("pro");

  const products = [
    { id: "xm-gpt", name: "XM GPT" },
    { id: "copy-trading", name: "Copy Trading" },
    { id: "alert2trade", name: "Alert2Trade" }
  ];

  const cycles = [
    { id: "monthly", name: "Monthly", discount: 0 },
    { id: "quarterly", name: "Quarterly", discount: 0.10 },
    { id: "yearly", name: "Yearly", discount: 0.25 }
  ];

  const tiers = [
    { id: "basic", name: "Basic", basePrice: 29 },
    { id: "pro", name: "Pro", basePrice: 79 },
    { id: "enterprise", name: "Enterprise", basePrice: 199 }
  ];

  const calculatePrice = () => {
    const tier = tiers.find(t => t.id === selectedTier);
    const cycle = cycles.find(c => c.id === selectedCycle);
    if (!tier || !cycle) return 0;
    
    const discountedPrice = tier.basePrice * (1 - cycle.discount);
    return Math.round(discountedPrice);
  };

  const getCyclePeriod = () => {
    switch(selectedCycle) {
      case "monthly": return "month";
      case "quarterly": return "3 months";
      case "yearly": return "year";
      default: return "month";
    }
  };

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Pricing Calculator</CardTitle>
            <CardDescription>Customize your plan and see the cost</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Product</label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger className="h-12 bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {products.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Billing Cycle</label>
            <Select value={selectedCycle} onValueChange={setSelectedCycle}>
              <SelectTrigger className="h-12 bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {cycles.map((cycle) => (
                  <SelectItem key={cycle.id} value={cycle.id}>
                    {cycle.name} {cycle.discount > 0 && `(Save ${cycle.discount * 100}%)`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Plan Tier</label>
            <Select value={selectedTier} onValueChange={setSelectedTier}>
              <SelectTrigger className="h-12 bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tiers.map((tier) => (
                  <SelectItem key={tier.id} value={tier.id}>
                    {tier.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Your Total</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-foreground">${calculatePrice()}</span>
              <span className="text-lg text-muted-foreground">/ {getCyclePeriod()}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {products.find(p => p.id === selectedProduct)?.name} • {tiers.find(t => t.id === selectedTier)?.name} • {cycles.find(c => c.id === selectedCycle)?.name}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
