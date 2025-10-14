import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "PROFESSIONAL",
      price: 1899,
      originalPrice: 2849,
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      features: [
        "Auto Login",
        "30Days",
        "Copy Trading upto 9 Accounts (Excluding Master)",
        "1 Master Account"
      ]
    },
    {
      name: "ENTERPRISE",
      price: 3099,
      originalPrice: 3799,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      features: [
        "Auto Login",
        "30Days",
        "Copy Trading upto 24 Accounts (Excluding Master)",
        "Upto 2 Master Accounts"
      ]
    },
    {
      name: "Custom",
      price: 845,
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      isActive: true,
      customFields: [
        { label: "No of Master Accounts", value: "1" },
        { label: "No of Child Accounts", value: "1" },
        { label: "Validity (in Days)", value: "30" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <Tabs value={billingCycle} onValueChange={setBillingCycle} className="w-auto">
              <TabsList className="bg-muted">
                <TabsTrigger value="monthly">monthly</TabsTrigger>
                <TabsTrigger value="quarterly">quarterly</TabsTrigger>
                <TabsTrigger value="half-yearly">half-yearly</TabsTrigger>
                <TabsTrigger value="yearly">yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.name} className={`${plan.bgColor} border-none relative`}>
                {plan.isActive && (
                  <Badge className="absolute top-4 right-4 bg-green-500">Active</Badge>
                )}
                <CardContent className="pt-8 pb-8 px-8">
                  <h3 className={`text-2xl font-bold mb-6 ${plan.textColor} underline decoration-4 underline-offset-4 w-fit`}>
                    {plan.name}
                  </h3>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-xl text-muted-foreground line-through">{plan.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">+18% GST applicable</p>
                  </div>

                  {plan.features && (
                    <div className="space-y-4 mb-8 min-h-[200px]">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {plan.customFields && (
                    <div className="space-y-4 mb-8">
                      {plan.customFields.map((field, index) => (
                        <div key={index} className="space-y-1">
                          <p className="text-sm text-muted-foreground">{field.label}</p>
                          <p className="text-lg font-medium">{field.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white"
                    size="lg"
                  >
                    {plan.isActive ? "Extend" : "Subscribe"}
                  </Button>
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
