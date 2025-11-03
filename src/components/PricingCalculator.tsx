import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { Calculator, ChevronDown, Shield, Lock, CreditCard, Check, X, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductConfig {
  id: string;
  name: string;
  tier: string;
  cycle: string;
}

export const PricingCalculator = () => {
  const [productConfigs, setProductConfigs] = useState<ProductConfig[]>([
    { id: "copy-trading", name: "Copy Trading", tier: "basic", cycle: "monthly" }
  ]);

  const productOptions = [
    { id: "xm-gpt", name: "XM GPT" },
    { id: "copy-trading", name: "Copy Trading" },
    { id: "alert2trade", name: "Alert2Trade" }
  ];

  const cycles = [
    { id: "trial", name: "7 Day Free Trial", discount: 0, isFree: true },
    { id: "monthly", name: "Monthly", discount: 0, isFree: false },
    { id: "quarterly", name: "Quarterly", discount: 0.10, isFree: false },
    { id: "yearly", name: "Yearly", discount: 0.25, isFree: false }
  ];

  const tiers = [
    { id: "basic", name: "Basic", basePrice: 29 },
    { id: "pro", name: "Pro", basePrice: 79 },
    { id: "enterprise", name: "Enterprise", basePrice: 199 }
  ];

  const addProduct = (productId: string) => {
    const product = productOptions.find(p => p.id === productId);
    if (product && !productConfigs.find(pc => pc.id === productId)) {
      setProductConfigs([...productConfigs, {
        id: product.id,
        name: product.name,
        tier: "basic",
        cycle: "monthly"
      }]);
    }
  };

  const removeProduct = (productId: string) => {
    setProductConfigs(productConfigs.filter(pc => pc.id !== productId));
  };

  const updateProductConfig = (productId: string, field: 'tier' | 'cycle', value: string) => {
    setProductConfigs(productConfigs.map(pc => 
      pc.id === productId ? { ...pc, [field]: value } : pc
    ));
  };

  const calculateTotalPrice = () => {
    return productConfigs.reduce((total, config) => {
      const cycle = cycles.find(c => c.id === config.cycle);
      const tier = tiers.find(t => t.id === config.tier);
      
      if (cycle?.isFree || !tier || !cycle) return total;
      
      const priceForProduct = tier.basePrice * (1 - cycle.discount);
      return total + priceForProduct;
    }, 0);
  };

  const hasFreeTrial = productConfigs.some(pc => pc.cycle === "trial");
  const totalPrice = Math.round(calculateTotalPrice());

  const productFeatures = [
    { feature: "Trading Accounts", basic: "5", pro: "20", enterprise: "Unlimited" },
    { feature: "Real-time Alerts", basic: true, pro: true, enterprise: true },
    { feature: "AI Analysis", basic: false, pro: true, enterprise: true },
    { feature: "API Access", basic: false, pro: true, enterprise: true },
    { feature: "Custom Automation", basic: false, pro: true, enterprise: true },
    { feature: "Advanced Analytics", basic: false, pro: true, enterprise: true },
  ];

  const products = [
    { name: "XM GPT", features: productFeatures },
    { name: "Copy Trading", features: productFeatures },
    { name: "Alert2 Trade", features: productFeatures },
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
        {/* Product Configuration Section */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-foreground">Configure Your Products</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <ChevronDown className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 bg-background" align="end">
                <div className="p-3 space-y-2">
                  {productOptions.map((product) => {
                    const isAdded = productConfigs.find(pc => pc.id === product.id);
                    return (
                      <Button
                        key={product.id}
                        variant={isAdded ? "secondary" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => addProduct(product.id)}
                        disabled={!!isAdded}
                      >
                        {isAdded && <Check className="mr-2 h-4 w-4" />}
                        {product.name}
                      </Button>
                    );
                  })}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Individual Product Configurations */}
          {productConfigs.length === 0 ? (
            <Card className="bg-muted/50 border-dashed">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">No products selected. Add a product to get started.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {productConfigs.map((config) => (
                <Card key={config.id} className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {/* Product Header */}
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">{config.name}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => removeProduct(config.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Configuration Selects */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-muted-foreground">Billing Cycle</label>
                          <Select
                            value={config.cycle}
                            onValueChange={(value) => updateProductConfig(config.id, 'cycle', value)}
                          >
                            <SelectTrigger className="h-10 bg-background text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {cycles.map((cycle) => (
                                <SelectItem key={cycle.id} value={cycle.id}>
                                  {cycle.name}
                                  {!cycle.isFree && cycle.discount > 0 && ` (Save ${cycle.discount * 100}%)`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-muted-foreground">Plan Tier</label>
                          <Select
                            value={config.tier}
                            onValueChange={(value) => updateProductConfig(config.id, 'tier', value)}
                          >
                            <SelectTrigger className="h-10 bg-background text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {tiers.map((tier) => (
                                <SelectItem key={tier.id} value={tier.id}>
                                  {tier.name} - ${tier.basePrice}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="bg-primary/10 rounded-xl p-4 md:p-6 border border-primary/20">
          <div className="text-center space-y-4 md:space-y-6">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2">Your Total</p>
              <div className="flex items-baseline justify-center gap-1 md:gap-2">
                <span className="text-3xl md:text-5xl font-bold text-foreground">
                  {hasFreeTrial ? "FREE" : `$${totalPrice}`}
                </span>
                {!hasFreeTrial && totalPrice > 0 && (
                  <span className="text-sm md:text-lg text-muted-foreground">/ month</span>
                )}
              </div>
              {hasFreeTrial && (
                <p className="text-xs md:text-sm text-muted-foreground mt-2">
                  7-day trial included
                </p>
              )}
            </div>

            <Button 
              size="lg" 
              className="w-full max-w-md bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-base md:text-lg py-5 md:py-6"
              disabled={productConfigs.length === 0}
            >
              {hasFreeTrial ? "Start Free Trial" : "Pay Now"}
            </Button>

            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-700 dark:text-purple-300 px-3 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-semibold whitespace-nowrap">
                30 days refund guarantee
              </Badge>

              <Card className="bg-card border-2">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-center">Safe and Secure Checkout</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
                      <span className="text-muted-foreground text-center">Payments are processed securely</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 md:p-2 bg-primary/10 rounded">
                          <Lock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-semibold">SECURE</p>
                          <p className="text-xs text-muted-foreground">SSL Encryption</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                        <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-6 md:mt-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 lg:mb-6 text-center">Compare Plan Features</h3>
          <div className="border rounded-lg overflow-x-auto bg-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10 border-b-2 border-primary/20">
                  <TableHead className="font-bold text-foreground text-xs md:text-sm lg:text-base px-2 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 min-w-[140px] md:min-w-[160px] sticky left-0 bg-primary/10 z-10">Features</TableHead>
                  <TableHead className="text-center font-bold text-foreground text-xs md:text-sm lg:text-base px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 min-w-[70px] md:min-w-[90px]">Basic</TableHead>
                  <TableHead className="text-center font-bold text-foreground text-xs md:text-sm lg:text-base px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 min-w-[70px] md:min-w-[90px]">Pro</TableHead>
                  <TableHead className="text-center font-bold text-foreground text-xs md:text-sm lg:text-base px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 min-w-[85px] md:min-w-[110px]">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, productIndex) => {
                  const renderCell = (value: boolean | string) => {
                    if (typeof value === 'boolean') {
                      return value ? (
                        <Check className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground/50 mx-auto" />
                      );
                    }
                    return <span className="text-xs md:text-sm font-medium">{value}</span>;
                  };

                  return (
                    <>
                      {/* Product Name Row */}
                      <TableRow key={`product-${productIndex}`} className="bg-primary/20 hover:bg-primary/20">
                        <TableCell colSpan={4} className="font-bold text-foreground text-sm md:text-base lg:text-lg px-2 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 text-center sticky left-0 bg-primary/20 z-10">
                          {product.name}
                        </TableCell>
                      </TableRow>
                      {/* Tier Headers Row */}
                      <TableRow className="bg-muted/50 border-b border-border">
                        <TableCell className="px-2 md:px-4 lg:px-6 py-1.5 md:py-2 sticky left-0 bg-muted/50 z-10"></TableCell>
                        <TableCell className="text-center font-semibold text-xs md:text-sm px-2 md:px-3 lg:px-4 py-1.5 md:py-2">Basic</TableCell>
                        <TableCell className="text-center font-semibold text-xs md:text-sm px-2 md:px-3 lg:px-4 py-1.5 md:py-2">Pro</TableCell>
                        <TableCell className="text-center font-semibold text-xs md:text-sm px-2 md:px-3 lg:px-4 py-1.5 md:py-2">Enterprise</TableCell>
                      </TableRow>
                      {/* Feature Rows */}
                      {product.features.map((feature, featureIndex) => (
                        <TableRow key={`${productIndex}-${featureIndex}`} className="hover:bg-muted/30 border-b border-border/50">
                          <TableCell className="font-medium text-xs md:text-sm px-2 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 text-left sticky left-0 bg-card z-10">
                            {feature.feature}
                          </TableCell>
                          <TableCell className="text-center px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-3">
                            {renderCell(feature.basic)}
                          </TableCell>
                          <TableCell className="text-center px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-3">
                            {renderCell(feature.pro)}
                          </TableCell>
                          <TableCell className="text-center px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-3">
                            {renderCell(feature.enterprise)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
