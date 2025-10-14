import { Plus, Search } from "lucide-react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StrategyCard } from "@/components/StrategyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                  Your Trading Strategies
                </h1>
                <p className="text-muted-foreground">
                  Manage and create automated trading strategies for your connected accounts.
                </p>
              </div>
              <Button size="lg" className="gap-2">
                <Plus className="h-5 w-5" />
                Create New Strategy
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search strategies by name..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="all-statuses">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-statuses">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-accounts">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Accounts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-accounts">All Accounts</SelectItem>
                <SelectItem value="zerodha">Zerodha</SelectItem>
                <SelectItem value="dhan">Dhan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Strategy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <StrategyCard key={index} {...strategy} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
