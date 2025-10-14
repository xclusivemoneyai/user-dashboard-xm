import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { AccountCard } from "@/components/AccountCard";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings, Plus } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const Index = () => {
  const [activeTab, setActiveTab] = useState<"all" | "connected" | "failed">("all");

  const accounts = [
    {
      accountNumber: "1106901510",
      username: "Ankit_Dhan",
      balance: 0,
      status: "error" as const,
      broker: "dhan",
      icon: "₹",
    },
    {
      accountNumber: "1100880151",
      username: "akku_dhan",
      balance: 0,
      status: "connected" as const,
      broker: "dhan",
      icon: "₹",
    },
    {
      accountNumber: "FA96623",
      username: "amit- finavsia",
      balance: 0,
      status: "connected" as const,
      broker: "finavsia",
      icon: "∞",
    },
  ];

  const filteredAccounts = accounts.filter((account) => {
    if (activeTab === "connected") return account.status === "connected";
    if (activeTab === "failed") return account.status === "error";
    return true;
  });

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
                  <Settings className="h-7 w-7" />
                  <h1 className="text-3xl font-bold">Account Configuration</h1>
                </div>
                <p className="text-muted-foreground">
                  Manage your trading accounts. Add, edit, or reconnect accounts from multiple brokers.
                </p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add New Account
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard label="Total Capacity" value="10" />
            <StatCard label="Master Accounts" value="1" />
            <StatCard label="Child Accounts" value="2" />
            <StatCard label="Current Plan" value="Professional" />
          </div>

          {/* Accounts Section */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Connected Accounts</h2>
              <div className="flex gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Brokers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brokers</SelectItem>
                    <SelectItem value="dhan">Dhan</SelectItem>
                    <SelectItem value="finavsia">Finavsia</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Search..."
                  className="w-64"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-6 mb-6 border-b border-border">
              <button
                onClick={() => setActiveTab("all")}
                className={`pb-3 px-1 font-medium transition-colors relative ${
                  activeTab === "all"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All
                {activeTab === "all" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("connected")}
                className={`pb-3 px-1 font-medium transition-colors relative ${
                  activeTab === "connected"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Connected
                {activeTab === "connected" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("failed")}
                className={`pb-3 px-1 font-medium transition-colors relative ${
                  activeTab === "failed"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Failed
                {activeTab === "failed" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            </div>

            {/* Accounts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAccounts.map((account) => (
                <AccountCard key={account.accountNumber} {...account} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
