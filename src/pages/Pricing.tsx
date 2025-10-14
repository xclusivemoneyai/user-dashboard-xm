import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

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

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Current Subscription Section */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold">Current Subscription</CardTitle>
              <CardDescription className="text-base">Manage your active subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xl font-semibold">Pro Plan</p>
                      <p className="text-sm text-muted-foreground">Next billing date: January 15, 2026</p>
                    </div>
                    <Button variant="outline" size="lg" className="px-8">
                      Manage Subscription
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Choose Your Plan Section */}
          <div className="text-center space-y-3 pt-4">
            <h1 className="text-4xl font-bold text-foreground">Choose Your Plan</h1>
            <p className="text-lg text-muted-foreground">Select the perfect subscription plan for your trading needs</p>
          </div>

          <div className="flex justify-center">
            <Tabs value={billingCycle} onValueChange={setBillingCycle} className="w-auto">
              <TabsList className="bg-muted">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly">
                  Quarterly 
                  <span className="ml-1 text-xs text-primary font-semibold">Save 10%</span>
                </TabsTrigger>
                <TabsTrigger value="yearly">
                  Yearly 
                  <span className="ml-1 text-xs text-primary font-semibold">Save 25%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative border-2 hover:shadow-lg transition-shadow ${
                  plan.popular ? "border-primary shadow-lg" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold">${calculatePrice(plan.basePrice)}</span>
                      <span className="text-lg text-muted-foreground">
                        /{billingCycle === "monthly" ? "month" : billingCycle === "quarterly" ? "3 months" : "year"}
                      </span>
                    </div>

                    <ul className="space-y-3 min-h-[280px]">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.popular ? "Get Started" : "Choose Plan"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
