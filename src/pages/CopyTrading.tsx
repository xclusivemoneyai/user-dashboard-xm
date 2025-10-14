import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Plus, AlertCircle, Lock, Info, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CopyTrading = () => {
  const navigate = useNavigate();
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  // Mock data
  const unassignedAccounts = [
    { id: "1106901510", username: "Ankit_Dhan", broker: "dhan" },
    { id: "1100880151", username: "akku_dhan", broker: "dhan" },
    { id: "FA96623", username: "amit- finavsia", broker: "finavsia" }
  ];

  const masterAccounts = [
    {
      id: "CX9849",
      username: "Amit_Zerodha",
      broker: "zerodha",
      status: "LIVE",
      copyEnabled: true,
      children: 2,
      linkedChildren: [
        { id: "1106883507", name: "Aman_Dhan", status: "LIVE", copyEnabled: false, quantity: 1 },
        { id: "1100434692", name: "Amit_Dhan", status: "LIVE", copyEnabled: true, quantity: 1 }
      ]
    }
  ];

  const childAccounts = [
    { id: "1106883507", name: "Aman_Dhan", master: "Amit_Zerodha", masterId: "CX9849", broker: "dhan", status: "LIVE", copyEnabled: false, quantity: 1 },
    { id: "1100434692", name: "Amit_Dhan", master: "Amit_Zerodha", masterId: "CX9849", broker: "dhan", status: "LIVE", copyEnabled: true, quantity: 1 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Users className="h-6 w-6" />
                    Copy Trading Setup
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Manage your trading accounts for copy trading. Use the{" "}
                    <button
                      onClick={() => navigate("/account-config")}
                      className="text-primary hover:underline font-medium"
                    >
                      Account Configuration
                    </button>{" "}
                    page to add new accounts. Below, you can assign roles, link/unlink accounts, and control the copying process.
                  </CardDescription>
                </div>
                <Button onClick={() => navigate("/account-config")} className="shrink-0">
                  <Plus className="h-4 w-4 mr-2" />
                  Configure New Account
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Unassigned Accounts */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="bg-blue-100 border-b border-blue-200">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5 text-blue-700" />
                Unassigned Accounts
              </CardTitle>
              <CardDescription>
                Accounts added but not yet assigned a role (Master or Child). Assign their role below to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unassignedAccounts.map((account) => (
                  <Card key={account.id} className="bg-white">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold">{account.id}</p>
                            <p className="text-sm text-muted-foreground">Username: {account.username}</p>
                          </div>
                          <Badge variant="secondary" className="text-xs">Not Assigned</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">Set as Master</Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-cyan-50 hover:bg-cyan-100 border-cyan-200">
                            Set as Child
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Master Accounts */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="bg-green-100 border-b border-green-200">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lock className="h-5 w-5 text-green-700" />
                Master Accounts
              </CardTitle>
              <CardDescription>
                Accounts selected to replicate their trades across linked child accounts.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {masterAccounts.map((master) => (
                <div key={master.id} className="space-y-4 bg-white rounded-lg p-4 md:p-6">
                  {/* Master Info */}
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Account</TableHead>
                          <TableHead>Username</TableHead>
                          <TableHead>Broker</TableHead>
                          <TableHead className="text-center">Status</TableHead>
                          <TableHead className="text-center">Copy</TableHead>
                          <TableHead className="text-center">Children</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">{master.id}</TableCell>
                          <TableCell>{master.username}</TableCell>
                          <TableCell className="capitalize">{master.broker}</TableCell>
                          <TableCell className="text-center">
                            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                              {master.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                              On
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">{master.children}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  {/* Master Actions */}
                  <div className="flex flex-wrap gap-2">
                    <Button variant="destructive" size="sm">Remove Master</Button>
                    <Button variant="outline" size="sm">Turn On All Child Copying</Button>
                    <Button variant="outline" size="sm">Turn Off All Child Copying</Button>
                    <Button variant="outline" size="sm">Exit Master Positions</Button>
                    <Button variant="outline" size="sm">Exit All Child Positions</Button>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-border">
                    <div className="flex gap-6 overflow-x-auto">
                      <button className="pb-3 px-1 font-medium text-foreground border-b-2 border-primary whitespace-nowrap">
                        View Children
                      </button>
                      <button className="pb-3 px-1 font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">
                        Positions
                      </button>
                      <button className="pb-3 px-1 font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">
                        Holdings
                      </button>
                      <button className="pb-3 px-1 font-medium text-muted-foreground hover:text-foreground whitespace-nowrap">
                        Order Book
                      </button>
                    </div>
                  </div>

                  {/* Linked Children */}
                  <div>
                    <h4 className="font-semibold mb-3">Linked Child Accounts</h4>
                    <div className="space-y-2">
                      {master.linkedChildren.map((child) => (
                        <div key={child.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{child.name} ({child.id})</span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                              {child.status}
                            </Badge>
                            <Switch checked={child.copyEnabled} />
                            <Badge variant={child.copyEnabled ? "default" : "secondary"}>
                              {child.copyEnabled ? "On" : "Off"}
                            </Badge>
                            <span className="text-sm">Qty: {child.quantity}</span>
                            <Button variant="destructive" size="sm">Remove</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Child Accounts */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="bg-blue-100 border-b border-blue-200">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-blue-700" />
                Child Accounts
              </CardTitle>
              <CardDescription>
                Accounts where all trades from their assigned Master will be copied.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead>Master</TableHead>
                      <TableHead>Broker</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                      <TableHead className="text-center">Copy</TableHead>
                      <TableHead className="text-center">Settings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {childAccounts.map((child) => (
                      <TableRow key={child.id}>
                        <TableCell className="font-medium">
                          {child.name} ({child.id})
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{child.master}</p>
                            <p className="text-xs text-muted-foreground">{child.masterId}</p>
                          </div>
                        </TableCell>
                        <TableCell className="capitalize">{child.broker}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                            {child.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center gap-2">
                            <Switch checked={child.copyEnabled} />
                            <Badge variant={child.copyEnabled ? "default" : "secondary"}>
                              {child.copyEnabled ? "On" : "Off"}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center gap-2">
                            <Input
                              type="number"
                              value={child.quantity}
                              className="w-16 h-8 text-center"
                              min="1"
                            />
                            <Button size="sm" variant="outline">Save</Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8">
                              <Info className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Master Orders */}
          <Card className="border-slate-200 bg-slate-50/50">
            <CardHeader className="bg-slate-100 border-b border-slate-200">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5 text-slate-700" />
                Master Orders
              </CardTitle>
              <CardDescription>
                Manage or cancel trades initiated by Master accounts and copied to children.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2 flex-wrap">
                  <Button variant="destructive" size="sm">
                    Cancel Selected
                  </Button>
                  <Button variant="outline" size="sm" className="bg-yellow-50 border-yellow-300 hover:bg-yellow-100">
                    Square Off Selected
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Select All
                </Button>
              </div>
              <Alert>
                <AlertDescription>
                  No active orders at the moment. Orders from Master accounts will appear here.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CopyTrading;
