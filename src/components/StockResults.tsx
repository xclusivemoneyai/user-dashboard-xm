import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Shield,
  ChevronDown,
  Info,
  X,
  Plus,
  Send,
  Network,
  MessageSquare,
  ChevronLeft,
  Edit2,
  Trash2,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface StockResultsProps {
  stockName: string;
  ticker: string;
}

export const StockResults = ({ stockName, ticker }: StockResultsProps) => {
  const [newsDateFilter, setNewsDateFilter] = useState("Last 7 days");
  const [newsSortFilter, setNewsSortFilter] = useState("Newest");
  const [selectedMode, setSelectedMode] = useState("Balanced");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [sentimentFilters, setSentimentFilters] = useState({
    positive: true,
    negative: true,
    neutral: true,
  });

  const chatHistory = [
    { id: 1, title: "Q1 FY26 Sales Volume Growth...", timestamp: "22:53 | October 28, 2025" },
    { id: 2, title: "Q1 FY26 Summary Insights", timestamp: "22:51 | October 28, 2025" },
  ];

  const modes = ["Balanced", "Concise", "Descriptive"];

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

  const aiQuestions = [
    "What are the key drivers of AGEL's revenue growth?",
    "How does AGEL plan to achieve its 50 GW target by 2030?",
    "What are the new technological innovations adopted by AGEL?",
    "What are AGEL's strategies to maintain high EBITDA margins?",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500 pb-32">
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
          <div className="space-y-6">
            {/* News Header with Filters */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <h2 className="text-xl md:text-2xl font-bold">News</h2>
                <div className="p-1.5 rounded-full bg-muted">
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-auto flex-wrap">
                {/* Date Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2 rounded-full">
                      {newsDateFilter}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      onClick={() => setNewsDateFilter("Last 7 days")}
                      className={newsDateFilter === "Last 7 days" ? "bg-primary/10 text-primary" : ""}
                    >
                      Last 7 days
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center justify-between">
                      <span className="text-muted-foreground">Last 30 days</span>
                      <Badge variant="secondary" className="text-xs">Pro</Badge>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center justify-between">
                      <span className="text-muted-foreground">Last 90 days</span>
                      <Badge variant="secondary" className="text-xs">Pro</Badge>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Sort Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2 rounded-full">
                      {newsSortFilter}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem className="flex items-center justify-between">
                      <span className="text-muted-foreground">Relevance</span>
                      <Badge variant="secondary" className="text-xs">Pro</Badge>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setNewsSortFilter("Newest")}
                      className={newsSortFilter === "Newest" ? "bg-primary/10 text-primary" : ""}
                    >
                      Newest
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Sentiment Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2 rounded-full">
                      Sentiment
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 p-3">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="positive"
                          checked={sentimentFilters.positive}
                          onCheckedChange={(checked) =>
                            setSentimentFilters({ ...sentimentFilters, positive: checked as boolean })
                          }
                        />
                        <label htmlFor="positive" className="text-sm cursor-pointer flex-1">
                          Positive
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="negative"
                          checked={sentimentFilters.negative}
                          onCheckedChange={(checked) =>
                            setSentimentFilters({ ...sentimentFilters, negative: checked as boolean })
                          }
                        />
                        <label htmlFor="negative" className="text-sm cursor-pointer flex-1">
                          Negative
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="neutral"
                          checked={sentimentFilters.neutral}
                          onCheckedChange={(checked) =>
                            setSentimentFilters({ ...sentimentFilters, neutral: checked as boolean })
                          }
                        />
                        <label htmlFor="neutral" className="text-sm cursor-pointer flex-1">
                          Neutral
                        </label>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* News Card 1 - Positive */}
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">N</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">NDTV Profit</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      Adani Green Shares Surge Over 14%; Adani Total Up Nearly 9% As Group Stocks Rally
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      Adani Green shares surged over 14% and Adani Total rose nearly 9% during Wednesday's trading as all Adani Group stocks experienced a rally, indicating strong market performance for the group.
                    </p>
                  </div>
                </div>
              </Card>

              {/* News Card 2 - Positive */}
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">R</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Rediff Money</p>
                        <p className="text-xs text-muted-foreground">20 hours ago</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      Adani Green Energy Q2 Profit Up 28% to Rs 644 Cr
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      Adani Green Energy reported a 28% increase in Q2 net profit to Rs 644 crore on October 28, 2025, driven by its renewable energy business. Revenue from power supply rose to Rs 2,776 crore, while operational capacity expanded to 16.7 GW, on track for a 50 GW target by 2029.
                    </p>
                  </div>
                </div>
              </Card>

              {/* News Card 3 - Positive */}
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-700 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">ET</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">ET Now</p>
                        <p className="text-xs text-muted-foreground">21 hours ago</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      Adani Green Q2 Results FY2026: Net profit rises 25% - Check company's quarterly results, revenue and other key DETAILS
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      Adani Green Energy Ltd reported a 25% increase in net profit for Q2 FY26, highlighting strong revenue growth and operational performance. This positive result reflects the company's robust position in the renewable energy sector.
                    </p>
                  </div>
                </div>
              </Card>

              {/* News Card 4 - Neutral */}
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">N</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">NDTV Profit</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      Q2 Results Today: Tata Capital, Adani Green, TVS Motor, Premier Energies Among 60+ Firms To Declare Earnings
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      Over 60 companies, including Adani Green Energy Ltd, are set to announce their Q2 earnings today. This could provide insights into the company's financial performance and market outlook.
                    </p>
                  </div>
                </div>
              </Card>

              {/* News Card 5 - Negative */}
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">M</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Moneycontrol</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      Adani Energy Solutions Q2 results: Net profit falls 21% to Rs 534 crore
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      Adani Energy Solutions reported a 21% decline in net profit for Q2, amounting to Rs 534 crore. This drop may influence investor sentiment and stock performance in the upcoming trading sessions.
                    </p>
                  </div>
                </div>
              </Card>

              {/* News Card 6 - Positive */}
              <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">B</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Bloomberg</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      Adani Green Expands Solar Capacity With New 500 MW Project
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      Adani Green Energy announced a new 500 MW solar project, further expanding its renewable energy portfolio and reinforcing its commitment to clean energy targets.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Ask AI Section */}
      <div className="mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2 px-3">
              Ask AI
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
        </div>

        {/* Company Logo and Title */}
        <div className="text-center space-y-6 py-8">
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white lowercase">
                {stockName.split(' ')[0].charAt(0) + stockName.split(' ')[0].slice(1, 5).toLowerCase()}
              </span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-medium">
            Ask anything about{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {stockName.toUpperCase()}
            </span>
          </h2>

          {/* Suggestion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {aiQuestions.map((question, index) => (
              <Card
                key={index}
                className="p-4 hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm text-left text-muted-foreground group-hover:text-foreground transition-colors">
                    {question}
                  </p>
                  <Send className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Search Bar */}
      <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <div className="max-w-6xl mx-auto p-4">
          <div className="relative mb-3">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z" />
              </svg>
            </div>
            <Input
              type="text"
              placeholder="Ask me anything..."
              className="pl-12 pr-16 py-6 text-base bg-card border-border rounded-xl"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors">
              <Send className="h-5 w-5" />
            </button>
          </div>

          {/* Options Bar */}
          <div className="flex items-center gap-2 justify-center flex-wrap">
            {/* Mode Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 rounded-full">
                  <Network className="h-4 w-4" />
                  {selectedMode}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                {modes.map((mode) => (
                  <DropdownMenuItem
                    key={mode}
                    onClick={() => setSelectedMode(mode)}
                    className={selectedMode === mode ? "bg-muted" : ""}
                  >
                    {mode}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Chat History with Sidebar */}
            <Sheet open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 rounded-full">
                  <MessageSquare className="h-4 w-4" />
                  Chat history
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="px-6 py-4 border-b">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setIsHistoryOpen(false)}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <SheetTitle className="text-xl">Chat history</SheetTitle>
                    </div>
                  </SheetHeader>
                  
                  <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                    {chatHistory.map((chat) => (
                      <div
                        key={chat.id}
                        className="group py-3 border-b border-border hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-foreground truncate">
                              {chat.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {chat.timestamp}
                            </p>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="gap-2">
                                <Edit2 className="h-4 w-4" />
                                Rename
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2 text-destructive">
                                <Trash2 className="h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-6 py-4 border-t">
                    <Button className="w-full gap-2" variant="outline">
                      <Plus className="h-4 w-4" />
                      New Chat
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};
