import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Subscription = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
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
      price: "$79",
      period: "/month",
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
      price: "$199",
      period: "/month",
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
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 mt-16">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-foreground">Choose Your Plan</h1>
              <p className="text-muted-foreground">Select the perfect subscription plan for your trading needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={cn(
                    "relative",
                    plan.popular && "border-primary shadow-lg"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-4"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.popular ? "Get Started" : "Choose Plan"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Current Subscription</CardTitle>
                <CardDescription>Manage your active subscription</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-semibold">Pro Plan</p>
                    <p className="text-sm text-muted-foreground">Next billing date: January 15, 2026</p>
                  </div>
                  <Button variant="outline">Manage Subscription</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Subscription;

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
