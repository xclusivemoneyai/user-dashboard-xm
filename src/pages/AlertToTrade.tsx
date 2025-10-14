import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { StrategyCard } from "@/components/StrategyCard";
import { CreateStrategyDialog } from "@/components/CreateStrategyDialog";

const AlertToTrade = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

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
