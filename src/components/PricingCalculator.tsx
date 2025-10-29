import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { Calculator, ChevronDown, Shield, Lock, CreditCard, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const PricingCalculator = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(["copy-trading"]);
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

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const calculatePrice = () => {
    const tier = tiers.find(t => t.id === selectedTier);
    const cycle = cycles.find(c => c.id === selectedCycle);
    if (!tier || !cycle || selectedProducts.length === 0) return 0;
    
    const pricePerProduct = tier.basePrice * (1 - cycle.discount);
    const totalPrice = pricePerProduct * selectedProducts.length;
    return Math.round(totalPrice);
  };

  const getCyclePeriod = () => {
    switch(selectedCycle) {
      case "monthly": return "month";
      case "quarterly": return "3 months";
      case "yearly": return "year";
      default: return "month";
    }
  };

  const comparisonFeatures = [
    { feature: "Trading Accounts", basic: "5", pro: "20", enterprise: "Unlimited" },
    { feature: "Real-time Alerts", basic: true, pro: true, enterprise: true },
    { feature: "Copy Trading", basic: "Basic", pro: "Advanced", enterprise: "Advanced + Custom" },
    { feature: "AI Analysis", basic: false, pro: true, enterprise: true },
    { feature: "API Access", basic: false, pro: true, enterprise: true },
    { feature: "Custom Automation", basic: false, pro: true, enterprise: true },
    { feature: "Advanced Analytics", basic: false, pro: true, enterprise: true },
    { feature: "Priority Support", basic: false, pro: true, enterprise: true },
    { feature: "24/7 Dedicated Support", basic: false, pro: false, enterprise: true },
    { feature: "White-label Solution", basic: false, pro: false, enterprise: true },
    { feature: "Custom Integrations", basic: false, pro: false, enterprise: true },
    { feature: "Team Management", basic: false, pro: false, enterprise: true },
    { feature: "SLA Guarantee", basic: false, pro: false, enterprise: true },
  ];

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
            <label className="text-sm font-semibold text-foreground">Products (Select Multiple)</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "h-12 w-full justify-between bg-background font-normal",
                    selectedProducts.length === 0 && "text-muted-foreground"
                  )}
                >
                  {selectedProducts.length === 0
                    ? "Select products..."
                    : `${selectedProducts.length} product${selectedProducts.length > 1 ? 's' : ''} selected`}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 bg-background" align="start">
                <div className="p-4 space-y-3">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={`calc-${product.id}`}
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={() => toggleProduct(product.id)}
                      />
                      <label
                        htmlFor={`calc-${product.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                      >
                        {product.name}
                      </label>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
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
          <div className="text-center space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Your Total</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-foreground">${calculatePrice()}</span>
                <span className="text-lg text-muted-foreground">/ {getCyclePeriod()}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {selectedProducts.length > 0 
                  ? selectedProducts.map(id => products.find(p => p.id === id)?.name).join(" + ")
                  : "No products selected"
                } • {tiers.find(t => t.id === selectedTier)?.name} • {cycles.find(c => c.id === selectedCycle)?.name}
              </p>
              {selectedProducts.length > 1 && (
                <p className="text-xs text-muted-foreground mt-2">
                  ${Math.round(calculatePrice() / selectedProducts.length)} per product
                </p>
              )}
            </div>

            <Button 
              size="lg" 
              className="w-full max-w-md bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-lg py-6"
              disabled={selectedProducts.length === 0}
            >
              Pay Now
            </Button>

            <div className="space-y-4 pt-4">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-700 dark:text-purple-300 px-6 py-2 text-sm font-semibold">
                No questions asked 30 days refund
              </Badge>

              <Card className="bg-card border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-center">Safe and Secure Checkout</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="text-muted-foreground">Payments are processed securely</span>
                    </div>
                    <div className="flex items-center justify-center gap-6 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded">
                          <Lock className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-semibold">SECURE</p>
                          <p className="text-xs text-muted-foreground">SSL Encryption</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        <CreditCard className="h-6 w-6 text-muted-foreground" />
                        <CreditCard className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Compare Plan Features</h3>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold text-foreground">Features</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Basic</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Pro</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell className="text-center">
                      {typeof item.basic === 'boolean' ? (
                        item.basic ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{item.basic}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {typeof item.pro === 'boolean' ? (
                        item.pro ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{item.pro}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {typeof item.enterprise === 'boolean' ? (
                        item.enterprise ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{item.enterprise}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
