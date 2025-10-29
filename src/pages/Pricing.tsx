import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";
import { PricingCalculator } from "@/components/PricingCalculator";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedProduct, setSelectedProduct] = useState("copy-trading");

  const getDiscount = (cycle: string) => {
    switch(cycle) {
      case "quarterly": return 0.10; // 10% discount
      case "yearly": return 0.25; // 25% discount
      default: return 0;
    }
  };

  const calculatePrice = (basePrice: number) => {
    const discount = getDiscount(billingCycle);
    return Math.round(basePrice * (1 - discount));
  };

  const plans = [
    {
      name: "Basic",
      basePrice: 29,
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5 trading accounts",
        "Basic copy trading",
        "Email support",
        "Real-time alerts",
        "Mobile app access"
      ]
    },
    {
      name: "Pro",
      basePrice: 79,
      description: "Ideal for professional traders",
      features: [
        "Up to 20 trading accounts",
        "Advanced copy trading",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom automation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      basePrice: 199,
      description: "For large teams and institutions",
      features: [
        "Unlimited trading accounts",
        "White-label solution",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "Team management",
        "SLA guarantee"
      ]
    }
  ];

  const products = [
    { id: "xm-gpt", name: "XM GPT" },
    { id: "copy-trading", name: "Copy Trading" },
    { id: "alert2trade", name: "Alert2Trade" }
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* Hero Banner Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-border p-8 md:p-12">
            <div className="relative z-10">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">PLANS & PACKAGES</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                Choose the Product
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                That's Right for Your Business
              </h2>
            </div>
          </div>

          {/* Current Subscription Section */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold">Current Subscription</CardTitle>
              <CardDescription className="text-sm sm:text-base">Manage your active subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <Card className="border-border">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-lg sm:text-xl font-semibold">Pro Plan</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Next billing date: January 15, 2026</p>
                    </div>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8">
                      Manage Subscription
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>


          {/* Pricing Calculator Section */}
          <PricingCalculator />
        </div>
      </main>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;
