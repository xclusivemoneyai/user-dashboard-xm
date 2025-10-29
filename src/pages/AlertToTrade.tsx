import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StrategyCard } from "@/components/StrategyCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const AlertToTrade = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [accountFilter, setAccountFilter] = useState("all");
  const [editingStrategy, setEditingStrategy] = useState<string | null>(null);

  const handleEdit = (strategyTitle: string) => {
    setEditingStrategy(strategyTitle);
    // Scroll to top to show the edit form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-4 md:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Alert to Trade</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">Manage your trading strategies and alerts</p>
            </div>
            <Button size="lg" onClick={() => navigate("/create-alerts")} className="w-full sm:w-auto">
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

          {/* Edit Form Section */}
          {editingStrategy && (
            <div className="bg-card border border-border rounded-lg p-4 md:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Edit Strategy: {editingStrategy}</h2>
                <Button variant="ghost" size="sm" onClick={() => setEditingStrategy(null)}>
                  Close
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Strategy Name</label>
                  <Input defaultValue={editingStrategy} placeholder="Enter strategy name" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Type</label>
                  <Select defaultValue="stocks-systematic">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stocks-systematic">Stocks - Systematic</SelectItem>
                      <SelectItem value="stocks-discretionary">Stocks - Discretionary</SelectItem>
                      <SelectItem value="options">Options</SelectItem>
                      <SelectItem value="futures">Futures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Input placeholder="Enter description" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Accounts</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dhan-akku">dhan - akku_dhan (1100880151)</SelectItem>
                      <SelectItem value="dhan-aman">dhan - Aman_Dhan (1106883507)</SelectItem>
                      <SelectItem value="dhan-amit">dhan - Amit_Dhan (1100434692)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1" onClick={() => {
                    setEditingStrategy(null);
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }}>
                    Save Changes
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => setEditingStrategy(null)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <StrategyCard
              title="test zerodha (idea)"
              type="Stocks - Systematic"
              status="active"
              description="No description provided for this strategy."
              accounts="Amit_Zerodha (CX9849) (zerodha)"
              webhookUrl="https://dashboard.xclusiv..."
              onEdit={() => handleEdit("test zerodha (idea)")}
            />
            <StrategyCard
              title="Amit_Dhan_Strategy_Test"
              type="Stocks - Systematic"
              status="active"
              description="No description provided for this strategy."
              accounts="Amit_Dhan (1100434692) (dhan)"
              webhookUrl="https://dashboard.xclusiv..."
              onEdit={() => handleEdit("Amit_Dhan_Strategy_Test")}
            />
            <StrategyCard
              title="test - single stock (idea)"
              type="Stocks - Systematic"
              status="inactive"
              description="No description provided for this strategy."
              accounts="60"
              webhookUrl="https://dashboard.xclusiv..."
              onEdit={() => handleEdit("test - single stock (idea)")}
            />
          </div>
        </div>
      </main>
      </div>
    </DashboardLayout>
  );
};

export default AlertToTrade;
