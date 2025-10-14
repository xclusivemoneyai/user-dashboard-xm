import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, TrendingUp, Users, Bell, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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
                  <LayoutDashboard className="h-7 w-7" />
                  <h1 className="text-3xl font-bold">Dashboard Summary</h1>
                </div>
                <p className="text-muted-foreground">
                  Overview of your trading activities and account performance.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Total Portfolio</p>
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <p className="text-3xl font-bold mb-1">₹2,45,890</p>
              <div className="flex items-center gap-1 text-xs text-success">
                <ArrowUpRight className="h-3 w-3" />
                <span>+12.5%</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Active Strategies</p>
                <Bell className="h-4 w-4 text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">8</p>
              <p className="text-xs text-muted-foreground">3 alerts triggered today</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Connected Accounts</p>
                <Users className="h-4 w-4 text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">3</p>
              <p className="text-xs text-muted-foreground">2 brokers connected</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Today's P&L</p>
                <TrendingUp className="h-4 w-4 text-destructive" />
              </div>
              <p className="text-3xl font-bold mb-1">₹-3,240</p>
              <div className="flex items-center gap-1 text-xs text-destructive">
                <ArrowDownRight className="h-3 w-3" />
                <span>-1.3%</span>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 cursor-pointer hover:border-primary transition-colors" onClick={() => navigate('/account-config')}>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Account Config</h3>
                  <p className="text-sm text-muted-foreground">Manage trading accounts</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 cursor-pointer hover:border-primary transition-colors" onClick={() => navigate('/create-alerts')}>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Create Alerts</h3>
                  <p className="text-sm text-muted-foreground">Setup automated strategies</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 cursor-pointer hover:border-primary transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Analytics</h3>
                  <p className="text-sm text-muted-foreground">View performance reports</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
