import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LayoutDashboard, TrendingUp, Users, Bell, ArrowUpRight, ArrowDownRight, Wallet, IndianRupee, TrendingDown, Activity, Filter, Search, ArrowUpDown, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const Index = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("1D");

  const performanceData = {
    "1D": [
      { time: "9:00", value: 2847000 },
      { time: "10:00", value: 2843000 },
      { time: "11:00", value: 2851000 },
      { time: "12:00", value: 2848000 },
      { time: "1:00", value: 2855000 },
      { time: "2:00", value: 2849000 },
      { time: "3:00", value: 2858000 },
      { time: "4:00", value: 2862000 },
    ],
    "1W": [
      { time: "Mon", value: 2800000 },
      { time: "Tue", value: 2820000 },
      { time: "Wed", value: 2810000 },
      { time: "Thu", value: 2835000 },
      { time: "Fri", value: 2847650 },
    ],
    "1M": [
      { time: "W1", value: 2700000 },
      { time: "W2", value: 2750000 },
      { time: "W3", value: 2800000 },
      { time: "W4", value: 2847650 },
    ],
    "3M": [
      { time: "Jan", value: 2540000 },
      { time: "Feb", value: 2650000 },
      { time: "Mar", value: 2847650 },
    ],
    "6M": [
      { time: "Oct", value: 2400000 },
      { time: "Nov", value: 2500000 },
      { time: "Dec", value: 2600000 },
      { time: "Jan", value: 2700000 },
      { time: "Feb", value: 2750000 },
      { time: "Mar", value: 2847650 },
    ],
    "1Y": [
      { time: "Apr", value: 2290000 },
      { time: "Jun", value: 2350000 },
      { time: "Aug", value: 2450000 },
      { time: "Oct", value: 2500000 },
      { time: "Dec", value: 2650000 },
      { time: "Feb", value: 2750000 },
      { time: "Mar", value: 2847650 },
    ],
    "All": [
      { time: "2022", value: 2000000 },
      { time: "2023", value: 2400000 },
      { time: "2024", value: 2847650 },
    ],
  };

  const performanceMetrics = {
    "1D": { return: "+0.4%", comparison: "vs benchmark" },
    "1W": { return: "+2.1%", comparison: "vs benchmark" },
    "1M": { return: "+5.6%", comparison: "vs benchmark" },
    "3M": { return: "+12.4%", comparison: "vs benchmark" },
    "6M": { return: "+18.7%", comparison: "vs benchmark" },
    "1Y": { return: "+24.3%", comparison: "vs benchmark" },
    "All": { return: "+42.3%", comparison: "vs benchmark" },
  };

  const periods = ["1D", "1W", "1M", "3M", "6M", "1Y", "All"];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 pt-16">
        <div className="p-4 md:p-8">
          {/* Page Header */}
          <div className="bg-card rounded-xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <LayoutDashboard className="h-6 w-6 sm:h-7 sm:w-7" />
                  <h1 className="text-2xl sm:text-3xl font-bold">Dashboard Summary</h1>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Overview of your trading activities and account performance.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs sm:text-sm text-muted-foreground">Total Portfolio Value</p>
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold">₹28,47,650</p>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs sm:text-sm text-muted-foreground">Total Investment</p>
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <IndianRupee className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold">₹24,50,000</p>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs sm:text-sm text-muted-foreground">Total Gain/Loss</p>
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-green-600">₹3,97,650</p>
              <p className="text-xs text-green-600 mt-1">+16.23%</p>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs sm:text-sm text-muted-foreground">Today's Gain/Loss</p>
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-green-600">₹12,450</p>
              <p className="text-xs text-green-600 mt-1">+0.44%</p>
            </Card>
          </div>

          {/* Account Summary */}
          <div className="mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <h2 className="text-lg sm:text-xl font-bold">Account Summary</h2>
              <Button variant="link" size="sm" onClick={() => navigate('/account-config')} className="self-start sm:self-auto">Manage Accounts</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <Card className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Zerodha</p>
                      <p className="text-xs text-muted-foreground">ZD1234</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">active</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Portfolio Value</span>
                    <span className="font-semibold">₹12,45,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Gain/Loss</span>
                    <span className="font-semibold text-green-600">₹1,45,000<span className="text-xs ml-1">+13.2%</span></span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Dhan</p>
                      <p className="text-xs text-muted-foreground">DH5678</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">active</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Portfolio Value</span>
                    <span className="font-semibold">₹8,56,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Gain/Loss</span>
                    <span className="font-semibold text-green-600">₹1,56,000<span className="text-xs ml-1">+22.3%</span></span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Angel One</p>
                      <p className="text-xs text-muted-foreground">AO9012</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">active</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Portfolio Value</span>
                    <span className="font-semibold">₹7,46,650</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Gain/Loss</span>
                    <span className="font-semibold text-green-600">₹96,650<span className="text-xs ml-1">+14.9%</span></span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Portfolio Performance */}
          <Card className="p-4 sm:p-6 mb-6 md:mb-8">
            <div className="flex flex-col gap-4 mb-6">
              <h2 className="text-lg sm:text-xl font-bold">Portfolio Performance</h2>
              <div className="flex flex-wrap gap-1.5">
                {periods.map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                    className="text-xs px-3 py-1.5 h-auto min-w-[44px]"
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-1">
                <p className="text-2xl sm:text-3xl font-bold">{performanceMetrics[selectedPeriod as keyof typeof performanceMetrics].return}</p>
                <span className="text-xs sm:text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  {performanceMetrics[selectedPeriod as keyof typeof performanceMetrics].comparison}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Portfolio return for {selectedPeriod}</p>
            </div>

            <div className="h-48 sm:h-64 mb-4 sm:mb-6 -mx-2 sm:mx-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData[selectedPeriod as keyof typeof performanceData]} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" opacity={0.3} />
                  <XAxis 
                    dataKey="time" 
                    className="text-[10px] sm:text-xs"
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    className="text-[10px] sm:text-xs"
                    stroke="hsl(var(--muted-foreground))"
                    tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                    tick={{ fontSize: 10 }}
                    width={45}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                      padding: "8px"
                    }}
                    formatter={(value: number) => [`₹${value.toLocaleString()}`, "Value"]}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center p-2 sm:p-3 rounded-lg bg-muted/30">
                <p className="text-lg sm:text-2xl font-bold text-green-600">+24.3%</p>
                <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">1 Year</p>
              </div>
              <div className="text-center p-2 sm:p-3 rounded-lg bg-muted/30">
                <p className="text-lg sm:text-2xl font-bold text-blue-600">+18.7%</p>
                <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">6 Months</p>
              </div>
              <div className="text-center p-2 sm:p-3 rounded-lg bg-muted/30">
                <p className="text-lg sm:text-2xl font-bold text-purple-600">+12.4%</p>
                <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">3 Months</p>
              </div>
            </div>
          </Card>

          {/* Top Holdings - Full Width */}
          <Card className="p-4 sm:p-6 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <h2 className="text-lg sm:text-xl font-bold">Holdings</h2>
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search stocks..." 
                  className="pl-9 h-9 text-sm"
                />
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filters:</span>
              </div>
              <Select defaultValue="all-accounts">
                <SelectTrigger className="w-[140px] sm:w-[160px] h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-accounts">All Accounts</SelectItem>
                  <SelectItem value="zerodha">Zerodha</SelectItem>
                  <SelectItem value="dhan">Dhan</SelectItem>
                  <SelectItem value="angel-one">Angel One</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all-stocks">
                <SelectTrigger className="w-[120px] sm:w-[140px] h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-stocks">All Stocks</SelectItem>
                  <SelectItem value="equity">Equity</SelectItem>
                  <SelectItem value="options">Options</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="text-left py-2 px-2 font-medium">Name</th>
                    <th className="text-center py-2 px-2 font-medium">Product</th>
                    <th className="text-center py-2 px-2 font-medium">Qty</th>
                    <th className="text-right py-2 px-2 font-medium">Buy Avg Price</th>
                    <th className="text-right py-2 px-2 font-medium">Sell Avg Price</th>
                    <th className="text-right py-2 px-2 font-medium">LTP</th>
                    <th className="text-right py-2 px-2 font-medium">P&L</th>
                    <th className="text-center py-2 px-2 font-medium"></th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 rounded-md bg-muted">
                          <AvatarFallback className="rounded-md text-[10px] font-semibold">A</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">AXISBANK</span>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-muted-foreground/30">NSE</Badge>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 bg-amber-50 border-amber-200 text-amber-700">W</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Badge variant="outline" className="text-[10px] border-emerald-500 text-emerald-600 bg-emerald-50">Normal</Badge>
                    </td>
                    <td className="py-2.5 px-2 text-center">75</td>
                    <td className="py-2.5 px-2 text-right">990.00</td>
                    <td className="py-2.5 px-2 text-right">1,045.00</td>
                    <td className="py-2.5 px-2 text-right">1,045.00</td>
                    <td className="py-2.5 px-2 text-right">
                      <span className="text-green-600 font-semibold">4,125.00</span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Avatar className="h-7 w-7 rounded-md bg-blue-100 mx-auto">
                        <AvatarFallback className="rounded-md text-[10px] font-semibold text-blue-700">Z</AvatarFallback>
                      </Avatar>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 rounded-md bg-muted">
                          <AvatarFallback className="rounded-md text-[10px] font-semibold">B</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">BHARTIARTL</span>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-muted-foreground/30">NSE</Badge>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 bg-amber-50 border-amber-200 text-amber-700">W</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Badge variant="outline" className="text-[10px] border-emerald-500 text-emerald-600 bg-emerald-50">Normal</Badge>
                    </td>
                    <td className="py-2.5 px-2 text-center">90</td>
                    <td className="py-2.5 px-2 text-right">850.00</td>
                    <td className="py-2.5 px-2 text-right">920.00</td>
                    <td className="py-2.5 px-2 text-right">920.00</td>
                    <td className="py-2.5 px-2 text-right">
                      <span className="text-green-600 font-semibold">6,300.00</span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Avatar className="h-7 w-7 rounded-md bg-orange-100 mx-auto">
                        <AvatarFallback className="rounded-md text-[10px] font-semibold text-orange-700">AO</AvatarFallback>
                      </Avatar>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 rounded-md bg-muted">
                          <AvatarFallback className="rounded-md text-[10px] font-semibold">H</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">HDFCBANK</span>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-muted-foreground/30">NSE</Badge>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 bg-amber-50 border-amber-200 text-amber-700">W</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Badge variant="outline" className="text-[10px] border-emerald-500 text-emerald-600 bg-emerald-50">Normal</Badge>
                    </td>
                    <td className="py-2.5 px-2 text-center">100</td>
                    <td className="py-2.5 px-2 text-right">1,580.00</td>
                    <td className="py-2.5 px-2 text-right">1,650.00</td>
                    <td className="py-2.5 px-2 text-right">1,650.00</td>
                    <td className="py-2.5 px-2 text-right">
                      <span className="text-green-600 font-semibold">7,000.00</span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Avatar className="h-7 w-7 rounded-md bg-emerald-100 mx-auto">
                        <AvatarFallback className="rounded-md text-[10px] font-semibold text-emerald-700">D</AvatarFallback>
                      </Avatar>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 rounded-md bg-muted">
                          <AvatarFallback className="rounded-md text-[10px] font-semibold">I</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">ICICIBANK</span>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-muted-foreground/30">NSE</Badge>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 bg-amber-50 border-amber-200 text-amber-700">W</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Badge variant="outline" className="text-[10px] border-emerald-500 text-emerald-600 bg-emerald-50">Normal</Badge>
                    </td>
                    <td className="py-2.5 px-2 text-center">120</td>
                    <td className="py-2.5 px-2 text-right">920.00</td>
                    <td className="py-2.5 px-2 text-right">985.00</td>
                    <td className="py-2.5 px-2 text-right">985.00</td>
                    <td className="py-2.5 px-2 text-right">
                      <span className="text-green-600 font-semibold">7,800.00</span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Avatar className="h-7 w-7 rounded-md bg-orange-100 mx-auto">
                        <AvatarFallback className="rounded-md text-[10px] font-semibold text-orange-700">AO</AvatarFallback>
                      </Avatar>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 rounded-md bg-muted">
                          <AvatarFallback className="rounded-md text-[10px] font-semibold">I</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">INFY</span>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-muted-foreground/30">NSE</Badge>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 bg-amber-50 border-amber-200 text-amber-700">W</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Badge variant="outline" className="text-[10px] border-emerald-500 text-emerald-600 bg-emerald-50">Normal</Badge>
                    </td>
                    <td className="py-2.5 px-2 text-center">80</td>
                    <td className="py-2.5 px-2 text-right">1,420.00</td>
                    <td className="py-2.5 px-2 text-right">1,385.00</td>
                    <td className="py-2.5 px-2 text-right">1,385.00</td>
                    <td className="py-2.5 px-2 text-right">
                      <span className="text-red-600 font-semibold">-2,800.00</span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Avatar className="h-7 w-7 rounded-md bg-emerald-100 mx-auto">
                        <AvatarFallback className="rounded-md text-[10px] font-semibold text-emerald-700">D</AvatarFallback>
                      </Avatar>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 rounded-md bg-muted">
                          <AvatarFallback className="rounded-md text-[10px] font-semibold">R</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">RELIANCE</span>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-muted-foreground/30">NSE</Badge>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 bg-amber-50 border-amber-200 text-amber-700">W</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Badge variant="outline" className="text-[10px] border-emerald-500 text-emerald-600 bg-emerald-50">Normal</Badge>
                    </td>
                    <td className="py-2.5 px-2 text-center">50</td>
                    <td className="py-2.5 px-2 text-right">2,450.00</td>
                    <td className="py-2.5 px-2 text-right">2,680.00</td>
                    <td className="py-2.5 px-2 text-right">2,680.00</td>
                    <td className="py-2.5 px-2 text-right">
                      <span className="text-green-600 font-semibold">11,500.00</span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Avatar className="h-7 w-7 rounded-md bg-blue-100 mx-auto">
                        <AvatarFallback className="rounded-md text-[10px] font-semibold text-blue-700">Z</AvatarFallback>
                      </Avatar>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 rounded-md bg-muted">
                          <AvatarFallback className="rounded-md text-[10px] font-semibold">T</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">TCS</span>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-muted-foreground/30">NSE</Badge>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 bg-amber-50 border-amber-200 text-amber-700">W</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Badge variant="outline" className="text-[10px] border-emerald-500 text-emerald-600 bg-emerald-50">Normal</Badge>
                    </td>
                    <td className="py-2.5 px-2 text-center">30</td>
                    <td className="py-2.5 px-2 text-right">3,520.00</td>
                    <td className="py-2.5 px-2 text-right">3,780.00</td>
                    <td className="py-2.5 px-2 text-right">3,780.00</td>
                    <td className="py-2.5 px-2 text-right">
                      <span className="text-green-600 font-semibold">7,800.00</span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Avatar className="h-7 w-7 rounded-md bg-blue-100 mx-auto">
                        <AvatarFallback className="rounded-md text-[10px] font-semibold text-blue-700">Z</AvatarFallback>
                      </Avatar>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30">
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7 rounded-md bg-muted">
                          <AvatarFallback className="rounded-md text-[10px] font-semibold">W</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">WIPRO</span>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-muted-foreground/30">NSE</Badge>
                          <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 bg-amber-50 border-amber-200 text-amber-700">W</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Badge variant="outline" className="text-[10px] border-emerald-500 text-emerald-600 bg-emerald-50">Normal</Badge>
                    </td>
                    <td className="py-2.5 px-2 text-center">110</td>
                    <td className="py-2.5 px-2 text-right">410.00</td>
                    <td className="py-2.5 px-2 text-right">395.00</td>
                    <td className="py-2.5 px-2 text-right">395.00</td>
                    <td className="py-2.5 px-2 text-right">
                      <span className="text-red-600 font-semibold">-1,650.00</span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <Avatar className="h-7 w-7 rounded-md bg-orange-100 mx-auto">
                        <AvatarFallback className="rounded-md text-[10px] font-semibold text-orange-700">AO</AvatarFallback>
                      </Avatar>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-3">
              <Card className="p-3 border-l-4 border-l-blue-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-base">AXISBANK</h3>
                    <p className="text-xs text-muted-foreground">Axis Bank Ltd.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-base">₹78,375.00</p>
                    <p className="text-xs text-green-600 font-semibold">+₹4,125.00 (+5.56%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">B</Badge>
                  <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-600">Normal</Badge>
                  <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">W</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Qty. 75 x ₹1,045.00 NSE</p>
                  <Avatar className="h-6 w-6 rounded-md bg-blue-100">
                    <AvatarFallback className="rounded-md text-[10px] font-semibold text-blue-700">Z</AvatarFallback>
                  </Avatar>
                </div>
              </Card>

              <Card className="p-3 border-l-4 border-l-orange-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-base">BHARTIARTL</h3>
                    <p className="text-xs text-muted-foreground">Bharti Airtel Ltd.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-base">₹82,800.00</p>
                    <p className="text-xs text-green-600 font-semibold">+₹6,300.00 (+8.24%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">B</Badge>
                  <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-600">Normal</Badge>
                  <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">W</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Qty. 90 x ₹920.00 NSE</p>
                  <Avatar className="h-6 w-6 rounded-md bg-orange-100">
                    <AvatarFallback className="rounded-md text-[10px] font-semibold text-orange-700">AO</AvatarFallback>
                  </Avatar>
                </div>
              </Card>

              <Card className="p-3 border-l-4 border-l-emerald-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-base">HDFCBANK</h3>
                    <p className="text-xs text-muted-foreground">HDFC Bank Ltd.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-base">₹1,65,000.00</p>
                    <p className="text-xs text-green-600 font-semibold">+₹7,000.00 (+4.43%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">B</Badge>
                  <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-600">Normal</Badge>
                  <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">W</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Qty. 100 x ₹1,650.00 NSE</p>
                  <Avatar className="h-6 w-6 rounded-md bg-emerald-100">
                    <AvatarFallback className="rounded-md text-[10px] font-semibold text-emerald-700">D</AvatarFallback>
                  </Avatar>
                </div>
              </Card>

              <Card className="p-3 border-l-4 border-l-red-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-base">INFY</h3>
                    <p className="text-xs text-muted-foreground">Infosys Ltd.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-base">₹1,10,800.00</p>
                    <p className="text-xs text-red-600 font-semibold">-₹2,800.00 (-2.46%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">B</Badge>
                  <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-600">Normal</Badge>
                  <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">W</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Qty. 80 x ₹1,385.00 NSE</p>
                  <Avatar className="h-6 w-6 rounded-md bg-emerald-100">
                    <AvatarFallback className="rounded-md text-[10px] font-semibold text-emerald-700">D</AvatarFallback>
                  </Avatar>
                </div>
              </Card>

              <Card className="p-3 border-l-4 border-l-blue-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-base">RELIANCE</h3>
                    <p className="text-xs text-muted-foreground">Reliance Industries Ltd.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-base">₹1,34,000.00</p>
                    <p className="text-xs text-green-600 font-semibold">+₹11,500.00 (+9.39%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">B</Badge>
                  <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-600">Normal</Badge>
                  <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">W</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Qty. 50 x ₹2,680.00 NSE</p>
                  <Avatar className="h-6 w-6 rounded-md bg-blue-100">
                    <AvatarFallback className="rounded-md text-[10px] font-semibold text-blue-700">Z</AvatarFallback>
                  </Avatar>
                </div>
              </Card>
            </div>
          </Card>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">

            {/* Sector Allocation */}
            <Card className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Sector Allocation</h2>
                <Button variant="link" size="sm" className="self-start sm:self-auto">View Details</Button>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="truncate">Information Technology</span>
                    </div>
                    <span className="font-semibold ml-2">28.5%</span>
                  </div>
                  <Progress value={28.5} className="h-1.5 sm:h-2" />
                  <p className="text-[10px] sm:text-xs text-muted-foreground">₹8,11,781</p>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500 flex-shrink-0"></div>
                      <span className="truncate">Financial Services</span>
                    </div>
                    <span className="font-semibold ml-2">24.2%</span>
                  </div>
                  <Progress value={24.2} className="h-1.5 sm:h-2" />
                  <p className="text-[10px] sm:text-xs text-muted-foreground">₹6,89,211</p>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500 flex-shrink-0"></div>
                      <span className="truncate">Oil & Gas</span>
                    </div>
                    <span className="font-semibold ml-2">18.3%</span>
                  </div>
                  <Progress value={18.3} className="h-1.5 sm:h-2" />
                  <p className="text-[10px] sm:text-xs text-muted-foreground">₹5,21,120</p>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="truncate">Consumer Goods</span>
                    </div>
                    <span className="font-semibold ml-2">12.1%</span>
                  </div>
                  <Progress value={12.1} className="h-1.5 sm:h-2" />
                  <p className="text-[10px] sm:text-xs text-muted-foreground">₹3,44,566</p>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500 flex-shrink-0"></div>
                      <span className="truncate">Healthcare</span>
                    </div>
                    <span className="font-semibold ml-2">8.7%</span>
                  </div>
                  <Progress value={8.7} className="h-1.5 sm:h-2" />
                  <p className="text-[10px] sm:text-xs text-muted-foreground">₹2,47,746</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Transactions */}
          <Card className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <h2 className="text-lg sm:text-xl font-bold">Recent Transactions</h2>
              <Button variant="link" size="sm" className="self-start sm:self-auto">View All</Button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <ArrowDownRight className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <p className="font-semibold text-sm sm:text-base">WIPRO</p>
                      <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 py-0">BUY</Badge>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground truncate">50 shares @ ₹445.20 • Zerodha</p>
                  </div>
                </div>
                <p className="font-semibold text-sm sm:text-base whitespace-nowrap">₹22,260</p>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <p className="font-semibold text-sm sm:text-base">BHARTIARTL</p>
                      <Badge variant="destructive" className="text-[10px] sm:text-xs px-1.5 py-0">SELL</Badge>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground truncate">30 shares @ ₹1156.75 • Dhan</p>
                  </div>
                </div>
                <p className="font-semibold text-sm sm:text-base whitespace-nowrap">₹34,703</p>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <ArrowDownRight className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <p className="font-semibold text-sm sm:text-base">MARUTI</p>
                      <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 py-0">BUY</Badge>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground truncate">10 shares @ ₹10450.30 • Angel One</p>
                  </div>
                </div>
                <p className="font-semibold text-sm sm:text-base whitespace-nowrap">₹1,04,503</p>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <p className="font-semibold text-sm sm:text-base">TCS</p>
                      <Badge variant="outline" className="text-[10px] sm:text-xs px-1.5 py-0">DIVIDEND</Badge>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground truncate">80 shares @ ₹25.00 • Dhan</p>
                  </div>
                </div>
                <p className="font-semibold text-sm sm:text-base whitespace-nowrap">₹2,000</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
