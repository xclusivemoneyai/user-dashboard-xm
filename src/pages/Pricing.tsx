import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, Heart, X } from "lucide-react";
import { useState } from "react";
import { PricingCalculator } from "@/components/PricingCalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedProduct, setSelectedProduct] = useState("copy-trading");
  const [managePlanOpen, setManagePlanOpen] = useState(false);

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
                    <Dialog open={managePlanOpen} onOpenChange={setManagePlanOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8">
                          Manage Subscription
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] p-0 gap-0 bg-card border-border">
                        {/* Header */}
                        <div className="p-6 pb-4">
                          <h2 className="text-2xl font-bold text-foreground">Manage Plan</h2>
                          <p className="text-sm text-muted-foreground mt-1">Subscription & Billing Settings</p>
                        </div>

                        {/* Current Plan Card */}
                        <div className="px-6 pb-6">
                          <Card className="bg-muted/50 border-border">
                            <CardContent className="p-4 flex items-center justify-between gap-4">
                              <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center">
                                  <Heart className="h-6 w-6 text-white fill-white" />
                                </div>
                                <div>
                                  <p className="text-lg font-bold text-foreground">You're on Pro Plan</p>
                                  <p className="text-sm text-muted-foreground">Renews Nov 14, 2025</p>
                                </div>
                              </div>
                              <Button variant="outline" className="shrink-0">
                                Downgrade to Free
                              </Button>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Action Buttons */}
                        <div className="px-6 pb-6 flex flex-col gap-3">
                          <Button 
                            className="w-full h-12 text-base bg-primary hover:bg-primary/90"
                            onClick={() => {/* Handle update subscription */}}
                          >
                            Update subscription
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full h-12 text-base"
                            onClick={() => {/* Handle view invoice */}}
                          >
                            View Invoice
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full h-12 text-base"
                            onClick={() => {/* Handle cancel subscription */}}
                          >
                            Cancel subscription
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>


          {/* Pricing Calculator Section */}
          <PricingCalculator />

          {/* FAQ Section */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-sm sm:text-base">Does this work with my broker?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes! TradeEdge Pro integrates with Alert2Trade, which supports 100+ brokers including Zerodha, Interactive Brokers, TD Ameritrade, Binance, and more.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-sm sm:text-base">What if I'm new to Pine Script?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    No problem! Our platform is designed for traders of all experience levels. We provide comprehensive tutorials, documentation, and support to help you get started with automated trading strategies.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-sm sm:text-base">How is this different from other TradingView strategies?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Our platform offers advanced automation, real-time alerts, copy trading capabilities, and seamless broker integration. We focus on making automated trading accessible and reliable for everyone.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-sm sm:text-base">Can I use this for crypto trading?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Absolutely! Our platform supports crypto trading through multiple exchanges including Binance, Coinbase, and other major platforms via Alert2Trade integration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-sm sm:text-base">What about risk management?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    We provide built-in risk management tools including stop-loss, take-profit automation, position sizing calculators, and portfolio diversification features to help protect your capital.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;
