import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  BarChart3,
  Scale,
  TrendingUpDown,
  DollarSign,
  Activity,
  Shield
} from "lucide-react";

interface StockResultsProps {
  stockName: string;
  ticker: string;
}

export const StockResults = ({ stockName, ticker }: StockResultsProps) => {
  const stockData = {
    price: "₹1119.50",
    change: "+114.95",
    changePercent: "11.44%",
    marketCap: "₹1,62,998 Cr",
    pe: "83.64",
    checklist: [
      { 
        icon: BarChart3, 
        label: "Performance", 
        value: "MARKET LEADER", 
        status: "success" as const 
      },
      { 
        icon: Scale, 
        label: "Valuation", 
        value: "OVERVALUED", 
        status: "error" as const 
      },
      { 
        icon: TrendingUpDown, 
        label: "Growth", 
        value: "EXCEPTIONAL", 
        status: "success" as const 
      },
      { 
        icon: DollarSign, 
        label: "Profitability", 
        value: "MODERATE MARGIN", 
        status: "warning" as const 
      },
      { 
        icon: Activity, 
        label: "Technicals", 
        value: "BULLISH", 
        status: "success" as const 
      },
      { 
        icon: Shield, 
        label: "Risk", 
        value: "HIGH RISK", 
        status: "error" as const 
      },
    ],
    returns: [
      { period: "1D", value: "11.44%", positive: true },
      { period: "1M", value: "8.09%", positive: true },
      { period: "3M", value: "13.71%", positive: true },
      { period: "1Y", value: "31.59%", positive: true },
      { period: "3Y", value: "46.60%", positive: true },
      { period: "5Y", value: "30.74%", positive: true },
      { period: "10Y", value: "3707.82%", positive: true },
    ]
  };

  const getStatusIcon = (status: "success" | "warning" | "error") => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusBg = (status: "success" | "warning" | "error") => {
    switch (status) {
      case "success":
        return "bg-green-500/10 border-green-500/20";
      case "warning":
        return "bg-amber-500/10 border-amber-500/20";
      case "error":
        return "bg-red-500/10 border-red-500/20";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Stock Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {stockName.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{stockName}</h1>
              <p className="text-muted-foreground">{ticker}</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Watchlist
          </Button>
        </div>

        {/* Price Section */}
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold">{stockData.price}</span>
              <div className="flex items-center gap-1 text-green-500">
                <TrendingUp className="h-5 w-5" />
                <span className="text-xl font-semibold">{stockData.change}</span>
                <span className="text-xl">({stockData.changePercent})</span>
              </div>
            </div>
          </div>
          <div className="flex gap-8 pb-1">
            <div>
              <p className="text-sm text-muted-foreground">Market Cap</p>
              <p className="text-lg font-semibold">{stockData.marketCap}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">P/E</p>
              <p className="text-lg font-semibold">{stockData.pe}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Checklist */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Investment Checklist</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {stockData.checklist.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className={`p-4 border ${getStatusBg(item.status)} transition-all hover:scale-105`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    {getStatusIcon(item.status)}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-xs font-semibold">{item.value}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Chart Section */}
      <Card className="p-6">
        <div className="space-y-4">
          {/* Chart Placeholder with gradient */}
          <div className="h-64 bg-gradient-to-br from-red-500/5 via-background to-green-500/5 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
            {/* Simulated chart line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              <path
                d="M 0,150 Q 100,120 200,130 T 400,110 T 600,90 T 800,70"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.6"
              />
            </svg>
            <p className="text-sm text-muted-foreground relative z-10">
              Price chart visualization
            </p>
          </div>

          {/* Time Period Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {stockData.returns.map((ret, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="min-w-[70px]"
              >
                <div className="text-center">
                  <div className="font-semibold">{ret.period}</div>
                  <div className={`text-xs ${ret.positive ? "text-green-500" : "text-red-500"}`}>
                    {ret.value}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-transparent border-b rounded-none pb-0">
          <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Overview
          </TabsTrigger>
          <TabsTrigger value="technicals" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Technicals
          </TabsTrigger>
          <TabsTrigger value="forecast" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Forecast
          </TabsTrigger>
          <TabsTrigger value="peers" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Peers
          </TabsTrigger>
          <TabsTrigger value="financials" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Financials
          </TabsTrigger>
          <TabsTrigger value="shareholdings" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Shareholdings
          </TabsTrigger>
          <TabsTrigger value="projection" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Projection
          </TabsTrigger>
          <TabsTrigger value="news" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            News
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Company Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sector</span>
                  <span className="font-medium">Energy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Industry</span>
                  <span className="font-medium">Renewable Energy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="font-medium">2015</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">52W High</span>
                  <span className="font-medium">₹2,174.10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">52W Low</span>
                  <span className="font-medium">₹831.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Volume</span>
                  <span className="font-medium">8.2M</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Performance</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ROE</span>
                  <span className="font-medium">12.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Debt/Equity</span>
                  <span className="font-medium">1.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">EPS</span>
                  <span className="font-medium">₹13.4</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technicals">
          <Card className="p-6">
            <p className="text-muted-foreground">Technical analysis data will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="forecast">
          <Card className="p-6">
            <p className="text-muted-foreground">Forecast data will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="peers">
          <Card className="p-6">
            <p className="text-muted-foreground">Peer comparison will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="financials">
          <Card className="p-6">
            <p className="text-muted-foreground">Financial statements will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="shareholdings">
          <Card className="p-6">
            <p className="text-muted-foreground">Shareholding pattern will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="projection">
          <Card className="p-6">
            <p className="text-muted-foreground">Future projections will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="news">
          <Card className="p-6">
            <p className="text-muted-foreground">Latest news and updates will be displayed here.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
