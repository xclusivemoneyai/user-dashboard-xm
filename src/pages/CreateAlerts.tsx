import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StrategyCard } from "@/components/StrategyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, Plus, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const strategies = [
  {
    title: "test zerodha (idea)",
    type: "Stocks - Systematic",
    status: "active" as const,
    description: "No description provided for this strategy.",
    accounts: "Amit_Zerodha (CX9849) (zerodha)",
    webhookUrl: "https://dashboard.xclusiv...",
  },
  {
    title: "Amit_Dhan_Strategy_Test",
    type: "Stocks - Systematic",
    status: "active" as const,
    description: "No description provided for this strategy.",
    accounts: "Amit_Dhan (1100434692) (dhan)",
    webhookUrl: "https://dashboard.xclusiv...",
  },
  {
    title: "test - single stock (idea)",
    type: "Stocks - Systematic",
    status: "active" as const,
    description: "No description provided for this strategy.",
    accounts: "60",
    webhookUrl: "https://dashboard.xclusiv...",
  },
];

const CreateAlerts = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-8">
          {/* Page Header */}
          <div className="bg-card rounded-xl p-8 mb-8 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="h-7 w-7" />
                  <h1 className="text-3xl font-bold">Create Alerts</h1>
                </div>
                <p className="text-muted-foreground">
                  Manage and create automated trading strategies for your connected accounts.
                </p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Strategy
              </Button>
            </div>
          </div>

          {/* Strategies Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Strategies</h2>
              <div className="flex gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Strategies</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search strategies..." 
                    className="pl-9 w-64"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <StrategyCard key={index} {...strategy} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateAlerts;
