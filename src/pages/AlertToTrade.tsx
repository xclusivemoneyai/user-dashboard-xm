import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StrategyCard } from "@/components/StrategyCard";
import { CreateStrategyDialog } from "@/components/CreateStrategyDialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const AlertToTrade = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [accountFilter, setAccountFilter] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Alert to Trade</h1>
              <p className="text-muted-foreground mt-2">Manage your trading strategies and alerts</p>
            </div>
            <Button size="lg" onClick={() => setIsCreateDialogOpen(true)}>
              New Strategy
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search strategies by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <Select value={accountFilter} onValueChange={setAccountFilter}>
              <SelectTrigger className="w-full md:w-[280px]">
                <SelectValue placeholder="All Accounts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Accounts</SelectItem>
                <SelectItem value="dhan-akku">dhan - akku_dhan (1100880151)</SelectItem>
                <SelectItem value="dhan-aman">dhan - Aman_Dhan (1106883507)</SelectItem>
                <SelectItem value="dhan-amit">dhan - Amit_Dhan (1100434692)</SelectItem>
                <SelectItem value="dhan-ankit">dhan - Ankit_Dhan (1106901510)</SelectItem>
                <SelectItem value="finvasia-amit">finvasia - amit- finvasia (FA96623)</SelectItem>
                <SelectItem value="zerodha-amit">zerodha - Amit_Zerodha (CX9849)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StrategyCard
              title="test zerodha (idea)"
              type="Stocks - Systematic"
              status="active"
              description="No description provided for this strategy."
              accounts="Amit_Zerodha (CX9849) (zerodha)"
              webhookUrl="https://dashboard.xclusiv..."
            />
            <StrategyCard
              title="Amit_Dhan_Strategy_Test"
              type="Stocks - Systematic"
              status="active"
              description="No description provided for this strategy."
              accounts="Amit_Dhan (1100434692) (dhan)"
              webhookUrl="https://dashboard.xclusiv..."
            />
            <StrategyCard
              title="test - single stock (idea)"
              type="Stocks - Systematic"
              status="inactive"
              description="No description provided for this strategy."
              accounts="60"
              webhookUrl="https://dashboard.xclusiv..."
            />
          </div>
        </div>
      </main>

      <CreateStrategyDialog 
        open={isCreateDialogOpen} 
        onOpenChange={setIsCreateDialogOpen}
      />
    </div>
  );
};

export default AlertToTrade;
