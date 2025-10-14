import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Plus, AlertCircle, Lock, Info, Trash2, Eye, Download, X, TrendingUp, Search, FileText, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CopyTrading = () => {
  const navigate = useNavigate();
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("children");
  const [openPosFilter, setOpenPosFilter] = useState("all");
  const [closedPosFilter, setClosedPosFilter] = useState("all");
  const [orderSearchQuery, setOrderSearchQuery] = useState("");
  const [expandedMasterAccounts, setExpandedMasterAccounts] = useState<string[]>([]);
  const [expandedChildAccounts, setExpandedChildAccounts] = useState<string[]>([]);
  const [childAccountTabs, setChildAccountTabs] = useState<{[key: string]: string}>({});

  const toggleMasterExpand = (id: string) => {
    setExpandedMasterAccounts(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleChildExpand = (id: string) => {
    setExpandedChildAccounts(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

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

  // Positions mock data
  const openPositions = [
    {
      id: "1",
      type: "B",
      name: "NIFTY 14 OCT 25600 CALL",
      product: "Normal",
      qty: 75,
      avgPrice: 2.40,
      ltp: 0.05,
      pnl: -187.50,
      changePercent: -97.92
    }
  ];

  const closedPositions = [
    {
      id: "1",
      type: "C",
      name: "NIFTY 14 OCT 24800 PUT",
      exchange: "NSE",
      product: "Normal",
      qty: 75,
      buyAvgPrice: 6.10,
      sellAvgPrice: 1.40,
      ltp: 0.05,
      pnl: -352.50
    },
    {
      id: "2",
      type: "C",
      name: "NIFTY 14 OCT 25200 CALL",
      exchange: "NSE",
      product: "Normal",
      qty: 150,
      buyAvgPrice: 56.08,
      sellAvgPrice: 60.10,
      ltp: 0.05,
      pnl: 603.75
    },
    {
      id: "3",
      type: "C",
      name: "NIFTY 14 OCT 25200 PUT",
      exchange: "NSE",
      product: "Normal",
      qty: 150,
      buyAvgPrice: 16.05,
      sellAvgPrice: 52.05,
      ltp: 54.20,
      pnl: 5400.00
    },
    {
      id: "4",
      type: "C",
      name: "NIFTY 14 OCT 25400 CALL",
      exchange: "NSE",
      product: "Normal",
      qty: 75,
      buyAvgPrice: 17.15,
      sellAvgPrice: 62.15,
      ltp: 0.10,
      pnl: 3375.00
    }
  ];

  // Order book mock data
  const executedOrders = [
    {
      id: "1",
      time: "15:00:48",
      type: "B",
      name: "NIFTY 14 OCT 25200 CALL",
      exchange: "NSE",
      product: "Normal",
      qty: "75 / 75",
      orderType: "Limit",
      price: 0.80,
      ltp: 0.05,
      status: "Success"
    },
    {
      id: "2",
      time: "10:19:12",
      type: "S",
      name: "NIFTY 14 OCT 25200 CALL",
      exchange: "NSE",
      product: "Normal",
      qty: "75 / 75",
      orderType: "Limit",
      price: 52.50,
      ltp: 0.05,
      status: "Success"
    },
    {
      id: "3",
      time: "10:19:11",
      type: "B",
      name: "NIFTY 14 OCT 25600 CALL",
      exchange: "NSE",
      product: "Normal",
      qty: "75 / 75",
      orderType: "Limit",
      price: 2.25,
      ltp: 0.05,
      status: "Success"
    },
    {
      id: "4",
      time: "09:31:06",
      type: "B",
      name: "NIFTY 14 OCT 25200 PUT",
      exchange: "NSE",
      product: "Normal",
      qty: "150 / 150",
      orderType: "Market",
      price: 16.05,
      ltp: 54.20,
      status: "Success"
    },
    {
      id: "5",
      time: "09:31:06",
      type: "S",
      name: "NIFTY 14 OCT 24800 PUT",
      exchange: "NSE",
      product: "Normal",
      qty: "75 / 75",
      orderType: "Market",
      price: 1.40,
      ltp: 0.05,
      status: "Success"
    },
    {
      id: "6",
      time: "09:24:39",
      type: "B",
      name: "NIFTY 14 OCT 25400 CALL",
      exchange: "NSE",
      product: "Normal",
      qty: "75 / 75",
      orderType: "Market",
      price: 17.15,
      ltp: 0.10,
      status: "Success"
    },
    {
      id: "7",
      time: "09:15:16",
      type: "S",
      name: "NIFTY 14 OCT 25600 CALL",
      exchange: "NSE",
      product: "Normal",
      qty: "75 / 75",
      orderType: "Limit",
      price: 2.25,
      ltp: 0.05,
      status: "Success"
    },
    {
      id: "8",
      time: "09:15:15",
      type: "B",
      name: "NIFTY 14 OCT 25200 CALL",
      exchange: "NSE",
      product: "Normal",
      qty: "75 / 75",
      orderType: "Limit",
      price: 111.35,
      ltp: 0.05,
      status: "Success"
    }
  ];

  const filteredOpenPositions = openPositions.filter(pos => {
    if (openPosFilter === "loss") return pos.pnl < 0;
    return true;
  });

  const filteredClosedPositions = closedPositions.filter(pos => {
    if (closedPosFilter === "profit") return pos.pnl > 0;
    if (closedPosFilter === "loss") return pos.pnl < 0;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-6">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Header */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Users className="h-6 w-6" />
                    Copy Trading Setup
                  </CardTitle>
                  <CardDescription className="mt-1">
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
            <CardHeader className="bg-blue-100 border-b border-blue-200 pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5 text-blue-700" />
                Unassigned Accounts
              </CardTitle>
              <CardDescription>
                Accounts added but not yet assigned a role (Master or Child). Assign their role below to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
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
            <CardHeader className="bg-green-100 border-b border-green-200 pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lock className="h-5 w-5 text-green-700" />
                Master Accounts
              </CardTitle>
              <CardDescription>
                Accounts selected to replicate their trades across linked child accounts.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              {masterAccounts.map((master) => (
                <Collapsible 
                  key={master.id} 
                  open={expandedMasterAccounts.includes(master.id)}
                  onOpenChange={() => toggleMasterExpand(master.id)}
                  className="space-y-4 bg-white rounded-lg p-3 md:p-4"
                >
                  {/* Master Info */}
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12"></TableHead>
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
                          <TableCell>
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                {expandedMasterAccounts.includes(master.id) ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </Button>
                            </CollapsibleTrigger>
                          </TableCell>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                                <ArrowRight className="h-4 w-4 text-primary" />
                              </div>
                              {master.id}
                            </div>
                          </TableCell>
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

                  <CollapsibleContent className="space-y-4">

                  {/* Master Actions */}
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" className="border-green-500 text-green-700 hover:bg-green-50">
                      Turn On All Child Copying
                    </Button>
                    <Button size="sm" variant="outline">
                      Turn Off All Child Copying
                    </Button>
                    <Button size="sm" variant="outline" className="border-cyan-500 text-cyan-700 hover:bg-cyan-50">
                      Exit Master Positions
                    </Button>
                    <Button size="sm" variant="outline">
                      Exit All Child Positions
                    </Button>
                    <Button size="sm" variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                      Remove Master
                    </Button>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-border">
                    <div className="flex gap-6 overflow-x-auto">
                      <button 
                        onClick={() => setActiveTab("children")}
                        className={`pb-3 px-1 font-medium whitespace-nowrap ${
                          activeTab === "children" 
                            ? "text-foreground border-b-2 border-primary" 
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        View Children
                      </button>
                      <button 
                        onClick={() => setActiveTab("positions")}
                        className={`pb-3 px-1 font-medium whitespace-nowrap ${
                          activeTab === "positions" 
                            ? "text-foreground border-b-2 border-primary" 
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Positions
                      </button>
                      <button 
                        onClick={() => setActiveTab("holdings")}
                        className={`pb-3 px-1 font-medium whitespace-nowrap ${
                          activeTab === "holdings" 
                            ? "text-foreground border-b-2 border-primary" 
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Holdings
                      </button>
                      <button 
                        onClick={() => setActiveTab("orders")}
                        className={`pb-3 px-1 font-medium whitespace-nowrap ${
                          activeTab === "orders" 
                            ? "text-foreground border-b-2 border-primary" 
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Order Book
                      </button>
                    </div>
                  </div>

                  {/* Tab Content */}
                  {activeTab === "children" && (
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
                  )}

                  {activeTab === "positions" && (
                    <div className="space-y-6">
                      {/* Summary Stats */}
                      <div className="bg-muted/50 rounded-lg p-4 md:p-6">
                        <h3 className="text-xl font-bold mb-4">Today's Positions</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Live P&L:</p>
                            <p className="text-xl font-bold text-success">₹ 8,838.75</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Open Positions:</p>
                            <p className="text-xl font-bold">1</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Closed Positions:</p>
                            <p className="text-xl font-bold">4</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Margin Available:</p>
                            <p className="text-xl font-bold">₹4,05,860.01</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Margin Used:</p>
                            <p className="text-xl font-bold">₹167.58</p>
                          </div>
                          <div className="flex items-end gap-2">
                            <Button size="icon" variant="ghost">
                              <Eye className="h-5 w-5" />
                            </Button>
                            <Button size="sm" className="bg-success hover:bg-success/90">
                              + Top up
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Open Positions */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <h4 className="text-lg font-bold">Open</h4>
                            <Select defaultValue="pnl">
                              <SelectTrigger className="w-[120px] h-9">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pnl">P&L</SelectItem>
                                <SelectItem value="value">Value</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button variant="outline" size="sm" className="border-warning text-warning hover:bg-warning/10">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Analyse
                          </Button>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2 mb-4">
                          <Button
                            size="sm"
                            variant={openPosFilter === "all" ? "default" : "outline"}
                            onClick={() => setOpenPosFilter("all")}
                          >
                            All <Badge variant="secondary" className="ml-2">1</Badge>
                          </Button>
                          <Button
                            size="sm"
                            variant={openPosFilter === "loss" ? "default" : "outline"}
                            onClick={() => setOpenPosFilter("loss")}
                          >
                            In Loss <Badge variant="secondary" className="ml-2">1</Badge>
                          </Button>
                        </div>

                        {/* Open Positions Table */}
                        <div className="overflow-x-auto bg-white rounded-lg">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="w-12">
                                  <Checkbox />
                                </TableHead>
                                <TableHead>B/S</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead className="text-right">Qty</TableHead>
                                <TableHead className="text-right">Avg Price</TableHead>
                                <TableHead className="text-right">LTP</TableHead>
                                <TableHead className="text-right">P&L</TableHead>
                                <TableHead className="text-right">Change %</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {filteredOpenPositions.map((pos) => (
                                <TableRow key={pos.id}>
                                  <TableCell>
                                    <Checkbox />
                                  </TableCell>
                                  <TableCell>
                                    <Badge className="bg-success hover:bg-success">{pos.type}</Badge>
                                  </TableCell>
                                  <TableCell className="font-medium">{pos.name}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                                      {pos.product}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-right text-success">+{pos.qty}</TableCell>
                                  <TableCell className="text-right">{pos.avgPrice.toFixed(2)}</TableCell>
                                  <TableCell className="text-right">{pos.ltp.toFixed(2)}</TableCell>
                                  <TableCell className={`text-right font-semibold ${pos.pnl < 0 ? 'text-destructive' : 'text-success'}`}>
                                    {pos.pnl.toFixed(2)}
                                  </TableCell>
                                  <TableCell className={`text-right ${pos.changePercent < 0 ? 'text-destructive' : 'text-success'}`}>
                                    {pos.changePercent.toFixed(2)}%
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <Button size="icon" variant="ghost" className="h-8 w-8">
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>

                        {/* Actions Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download as CSV
                          </Button>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold">
                              Total P&L: <span className="text-destructive">-187.50</span>
                            </span>
                            <Button variant="outline" size="sm">
                              Set P&L Exit
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Closed Positions */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-4 mb-4">
                          <h4 className="text-lg font-bold">Closed</h4>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2 mb-4">
                          <Button
                            size="sm"
                            variant={closedPosFilter === "all" ? "default" : "outline"}
                            onClick={() => setClosedPosFilter("all")}
                          >
                            All <Badge variant="secondary" className="ml-2">4</Badge>
                          </Button>
                          <Button
                            size="sm"
                            variant={closedPosFilter === "profit" ? "default" : "outline"}
                            onClick={() => setClosedPosFilter("profit")}
                          >
                            In Profit <Badge variant="secondary" className="ml-2">3</Badge>
                          </Button>
                          <Button
                            size="sm"
                            variant={closedPosFilter === "loss" ? "default" : "outline"}
                            onClick={() => setClosedPosFilter("loss")}
                          >
                            In Loss <Badge variant="secondary" className="ml-2">1</Badge>
                          </Button>
                        </div>

                        {/* Closed Positions Table */}
                        <div className="overflow-x-auto bg-white rounded-lg">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead className="text-right">Qty</TableHead>
                                <TableHead className="text-right">Buy Avg Price</TableHead>
                                <TableHead className="text-right">Sell Avg Price</TableHead>
                                <TableHead className="text-right">LTP</TableHead>
                                <TableHead className="text-right">P&L</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {filteredClosedPositions.map((pos) => (
                                <TableRow key={pos.id}>
                                  <TableCell>
                                    <div className="flex items-center gap-2">
                                      <Badge variant="secondary" className="w-7 h-7 flex items-center justify-center">
                                        {pos.type}
                                      </Badge>
                                      <div>
                                        <p className="font-medium">{pos.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                          {pos.exchange} <Badge variant="outline" className="ml-1 text-xs">W</Badge>
                                        </p>
                                      </div>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                                      {pos.product}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-right">{pos.qty}</TableCell>
                                  <TableCell className="text-right">{pos.buyAvgPrice.toFixed(2)}</TableCell>
                                  <TableCell className="text-right">{pos.sellAvgPrice.toFixed(2)}</TableCell>
                                  <TableCell className="text-right">{pos.ltp.toFixed(2)}</TableCell>
                                  <TableCell className={`text-right font-semibold ${pos.pnl < 0 ? 'text-destructive' : 'text-success'}`}>
                                    {pos.pnl.toFixed(2)}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>

                        {/* Actions Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download as CSV
                          </Button>
                          <span className="text-sm font-semibold">
                            Realised P&L: <span className="text-success">9,026.25</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "holdings" && (
                    <div className="space-y-6">
                      {/* Summary Stats */}
                      <div className="bg-muted/50 rounded-lg p-4 md:p-6">
                        <h3 className="text-xl font-bold mb-4">Today's Holdings</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Live P&L:</p>
                            <p className="text-xl font-bold text-success">₹ 8,838.75</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Open Positions:</p>
                            <p className="text-xl font-bold">1</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Closed Positions:</p>
                            <p className="text-xl font-bold">4</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Margin Available:</p>
                            <p className="text-xl font-bold">₹4,05,860.01</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Margin Used:</p>
                            <p className="text-xl font-bold">₹167.58</p>
                          </div>
                          <div className="flex items-end gap-2">
                            <Button size="icon" variant="ghost">
                              <Eye className="h-5 w-5" />
                            </Button>
                            <Button size="sm" className="bg-success hover:bg-success/90">
                              + Top up
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Open Holdings */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <h4 className="text-lg font-bold">Open</h4>
                            <Select defaultValue="pnl">
                              <SelectTrigger className="w-[120px] h-9">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pnl">P&L</SelectItem>
                                <SelectItem value="value">Value</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button variant="outline" size="sm" className="border-warning text-warning hover:bg-warning/10">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Analyse
                          </Button>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2 mb-4">
                          <Button
                            size="sm"
                            variant={openPosFilter === "all" ? "default" : "outline"}
                            onClick={() => setOpenPosFilter("all")}
                          >
                            All <Badge variant="secondary" className="ml-2">1</Badge>
                          </Button>
                          <Button
                            size="sm"
                            variant={openPosFilter === "loss" ? "default" : "outline"}
                            onClick={() => setOpenPosFilter("loss")}
                          >
                            In Loss <Badge variant="secondary" className="ml-2">1</Badge>
                          </Button>
                        </div>

                        {/* Open Holdings Table */}
                        <div className="overflow-x-auto bg-white rounded-lg">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="w-12">
                                  <Checkbox />
                                </TableHead>
                                <TableHead>B/S</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead className="text-right">Qty</TableHead>
                                <TableHead className="text-right">Avg Price</TableHead>
                                <TableHead className="text-right">LTP</TableHead>
                                <TableHead className="text-right">P&L</TableHead>
                                <TableHead className="text-right">Change %</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {filteredOpenPositions.map((pos) => (
                                <TableRow key={pos.id}>
                                  <TableCell>
                                    <Checkbox />
                                  </TableCell>
                                  <TableCell>
                                    <Badge className="bg-success hover:bg-success">{pos.type}</Badge>
                                  </TableCell>
                                  <TableCell className="font-medium">{pos.name}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                                      {pos.product}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-right text-success">+{pos.qty}</TableCell>
                                  <TableCell className="text-right">{pos.avgPrice.toFixed(2)}</TableCell>
                                  <TableCell className="text-right">{pos.ltp.toFixed(2)}</TableCell>
                                  <TableCell className={`text-right font-semibold ${pos.pnl < 0 ? 'text-destructive' : 'text-success'}`}>
                                    {pos.pnl.toFixed(2)}
                                  </TableCell>
                                  <TableCell className={`text-right ${pos.changePercent < 0 ? 'text-destructive' : 'text-success'}`}>
                                    {pos.changePercent.toFixed(2)}%
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <Button size="icon" variant="ghost" className="h-8 w-8">
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>

                        {/* Actions Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download as CSV
                          </Button>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold">
                              Total P&L: <span className="text-destructive">-187.50</span>
                            </span>
                            <Button variant="outline" size="sm">
                              Set P&L Exit
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Closed Holdings */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-4 mb-4">
                          <h4 className="text-lg font-bold">Closed</h4>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2 mb-4">
                          <Button
                            size="sm"
                            variant={closedPosFilter === "all" ? "default" : "outline"}
                            onClick={() => setClosedPosFilter("all")}
                          >
                            All <Badge variant="secondary" className="ml-2">4</Badge>
                          </Button>
                          <Button
                            size="sm"
                            variant={closedPosFilter === "profit" ? "default" : "outline"}
                            onClick={() => setClosedPosFilter("profit")}
                          >
                            In Profit <Badge variant="secondary" className="ml-2">3</Badge>
                          </Button>
                          <Button
                            size="sm"
                            variant={closedPosFilter === "loss" ? "default" : "outline"}
                            onClick={() => setClosedPosFilter("loss")}
                          >
                            In Loss <Badge variant="secondary" className="ml-2">1</Badge>
                          </Button>
                        </div>

                        {/* Closed Holdings Table */}
                        <div className="overflow-x-auto bg-white rounded-lg">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead className="text-right">Qty</TableHead>
                                <TableHead className="text-right">Buy Avg Price</TableHead>
                                <TableHead className="text-right">Sell Avg Price</TableHead>
                                <TableHead className="text-right">LTP</TableHead>
                                <TableHead className="text-right">P&L</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {filteredClosedPositions.map((pos) => (
                                <TableRow key={pos.id}>
                                  <TableCell>
                                    <div className="flex items-center gap-2">
                                      <Badge variant="secondary" className="w-7 h-7 flex items-center justify-center">
                                        {pos.type}
                                      </Badge>
                                      <div>
                                        <p className="font-medium">{pos.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                          {pos.exchange} <Badge variant="outline" className="ml-1 text-xs">W</Badge>
                                        </p>
                                      </div>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                                      {pos.product}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-right">{pos.qty}</TableCell>
                                  <TableCell className="text-right">{pos.buyAvgPrice.toFixed(2)}</TableCell>
                                  <TableCell className="text-right">{pos.sellAvgPrice.toFixed(2)}</TableCell>
                                  <TableCell className="text-right">{pos.ltp.toFixed(2)}</TableCell>
                                  <TableCell className={`text-right font-semibold ${pos.pnl < 0 ? 'text-destructive' : 'text-success'}`}>
                                    {pos.pnl.toFixed(2)}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>

                        {/* Actions Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download as CSV
                          </Button>
                          <span className="text-sm font-semibold">
                            Realised P&L: <span className="text-success">9,026.25</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "orders" && (
                    <div className="space-y-6">
                      {/* Pending Orders */}
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="text-lg font-bold mb-4">Pending Orders</h4>
                        <div className="flex items-center gap-3 text-muted-foreground p-8 bg-white rounded-lg border-2 border-dashed">
                          <FileText className="h-10 w-10 text-muted-foreground/50" />
                          <p>Orders when placed appear here. None at this moment...</p>
                        </div>
                      </div>

                      {/* Executed Orders */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <h4 className="text-lg font-bold">Executed</h4>
                            <div className="flex gap-2">
                              <Button size="sm" variant="default">
                                All
                              </Button>
                              <Button size="sm" variant="outline">
                                Success <Badge variant="secondary" className="ml-2">8</Badge>
                              </Button>
                            </div>
                          </div>
                          <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Search for Executed Orders"
                              value={orderSearchQuery}
                              onChange={(e) => setOrderSearchQuery(e.target.value)}
                              className="pl-9"
                            />
                          </div>
                        </div>

                        {/* Executed Orders Table */}
                        <div className="overflow-x-auto bg-white rounded-lg">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Time</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead className="text-right">Qty</TableHead>
                                <TableHead>Order Type</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="text-right">LTP</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {executedOrders.map((order) => (
                                <TableRow key={order.id}>
                                  <TableCell className="font-medium">{order.time}</TableCell>
                                  <TableCell>
                                    <div className="flex items-center gap-2">
                                      <Badge 
                                        className={order.type === "B" 
                                          ? "bg-success hover:bg-success" 
                                          : "bg-destructive hover:bg-destructive"
                                        }
                                      >
                                        {order.type}
                                      </Badge>
                                      <div>
                                        <p className="font-medium">{order.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                          <Badge variant="outline" className="text-xs mr-1">W</Badge>
                                          {order.exchange}
                                        </p>
                                      </div>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                                      {order.product}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-right">{order.qty}</TableCell>
                                  <TableCell>{order.orderType}</TableCell>
                                  <TableCell className="text-right">{order.price.toFixed(2)}</TableCell>
                                  <TableCell className="text-right">{order.ltp.toFixed(2)}</TableCell>
                                  <TableCell className="text-center">
                                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                                      {order.status}
                                    </Badge>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>

                        {/* Actions Row */}
                        <div className="mt-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download as CSV
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </CardContent>
          </Card>

          {/* Child Accounts */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="bg-blue-100 border-b border-blue-200 pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-blue-700" />
                Child Accounts
              </CardTitle>
              <CardDescription>
                Accounts where all trades from their assigned Master will be copied.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="overflow-x-auto bg-white rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
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
                      <Collapsible 
                        key={child.id}
                        open={expandedChildAccounts.includes(child.id)}
                        onOpenChange={() => toggleChildExpand(child.id)}
                        asChild
                      >
                        <>
                          <TableRow>
                            <TableCell>
                              <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  {expandedChildAccounts.includes(child.id) ? (
                                    <ChevronDown className="h-4 w-4" />
                                  ) : (
                                    <ChevronRight className="h-4 w-4" />
                                  )}
                                </Button>
                              </CollapsibleTrigger>
                            </TableCell>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                                  <ArrowRight className="h-4 w-4 text-primary" />
                                </div>
                                {child.name} ({child.id})
                              </div>
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
                          <CollapsibleContent asChild>
                            <TableRow>
                              <TableCell colSpan={7} className="bg-muted/30">
                                <div className="p-4 space-y-4">
                                  {/* Action Buttons */}
                                  <div className="flex flex-wrap gap-2">
                                    <Button size="sm" variant="outline" className="border-green-500 text-green-700 hover:bg-green-50">
                                      Start Copying
                                    </Button>
                                    <Button size="sm" variant="outline">
                                      Stop Copying
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-cyan-500 text-cyan-700 hover:bg-cyan-50">
                                      Square Off Specific Symbol
                                    </Button>
                                    <Button size="sm" variant="outline">
                                      Exit All Positions
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                                      Remove Child
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                                      Change Master
                                    </Button>
                                  </div>

                                  {/* Tabs */}
                                  <div className="border-b border-border">
                                    <div className="flex gap-6 overflow-x-auto">
                                      <button 
                                        onClick={() => setChildAccountTabs({...childAccountTabs, [child.id]: "orderbook"})}
                                        className={`pb-3 px-1 font-medium whitespace-nowrap ${
                                          (childAccountTabs[child.id] || "orderbook") === "orderbook"
                                            ? "text-primary border-b-2 border-primary" 
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                      >
                                        Order Book
                                      </button>
                                      <button 
                                        onClick={() => setChildAccountTabs({...childAccountTabs, [child.id]: "positions"})}
                                        className={`pb-3 px-1 font-medium whitespace-nowrap ${
                                          childAccountTabs[child.id] === "positions"
                                            ? "text-primary border-b-2 border-primary" 
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                      >
                                        Positions
                                      </button>
                                      <button 
                                        onClick={() => setChildAccountTabs({...childAccountTabs, [child.id]: "holdings"})}
                                        className={`pb-3 px-1 font-medium whitespace-nowrap ${
                                          childAccountTabs[child.id] === "holdings"
                                            ? "text-primary border-b-2 border-primary" 
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                      >
                                        Holdings
                                      </button>
                                    </div>
                                  </div>

                                  {/* Tab Content */}
                                  <div className="bg-background rounded-lg p-8 text-center">
                                    <p className="text-muted-foreground">
                                      {(childAccountTabs[child.id] || "orderbook") === "orderbook" && "No orders for this child account."}
                                      {childAccountTabs[child.id] === "positions" && "No positions for this child account."}
                                      {childAccountTabs[child.id] === "holdings" && "No holdings for this child account."}
                                    </p>
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          </CollapsibleContent>
                        </>
                      </Collapsible>
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
