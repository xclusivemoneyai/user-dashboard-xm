import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ArrowRight, TrendingUp, ChevronDown, ChevronUp, Target } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("free");
  const [selectedPlatform, setSelectedPlatform] = useState("tradingview");
  const [isSubscribedOpen, setIsSubscribedOpen] = useState(false);

  // Subscription data
  const subscriptionStats = {
    activeAlgos: 3,
    pausedAlgos: 1,
    notDeployed: 0,
    totalSubscriptions: 4
  };

  const deployedAlgos = [
    {
      id: 1,
      name: "Index Sniper",
      partner: "Stratzy",
      planAmount: "₹1,999",
      amountRequired: "₹80,000",
      startDate: "27 Aug 25",
      endDate: "30 Mar 26",
      status: "Paused"
    },
    {
      id: 2,
      name: "Expiry Short Strangle",
      partner: "Stratzy",
      planAmount: "₹2,499",
      amountRequired: "₹2,50,000",
      startDate: "4 Sep 25",
      endDate: "4 Dec 25",
      status: "Active"
    },
    {
      id: 3,
      name: "Zen Credit Spread Overnight",
      partner: "Stratzy",
      planAmount: "₹799",
      amountRequired: "₹1,20,000",
      startDate: "7 Oct 25",
      endDate: "6 Nov 25",
      status: "Active"
    },
    {
      id: 4,
      name: "V-Score Credit Spread Overnight",
      partner: "Stratzy",
      planAmount: "₹799",
      amountRequired: "₹80,000",
      startDate: "7 Oct 25",
      endDate: "6 Nov 25",
      status: "Active"
    }
  ];

  const categories = [
    { id: "free", label: "FREE TOOLS" },
    { id: "exclusive", label: "EXCLUSIVE TOOLS" },
  ];

  const platforms = [
    { id: "tradingview", label: "TRADINGVIEW" },
    { id: "ninjatrader", label: "NINJATRADER" },
    { id: "metatrader4", label: "METATRADER 4" },
    { id: "metatrader5", label: "METATRADER 5" },
    { id: "thinkorswim", label: "THINKORSWIM" },
  ];

  const indicators = [
    {
      id: "1",
      name: "Session Gap Fill",
      description: "The Session Gap Fill trading indicator is a powerful tool designed to automatically detect and highlight filled and unfilled price gaps between regular trading sessions. It helps traders visually identify areas of strong market sentiment changes and provides a...",
      createdDate: "Oct 8, 2025",
      imageUrl: "/placeholder.svg",
      isFilled: true,
    },
    {
      id: "2",
      name: "Power Hour Breakout Signals",
      description: "The Power Hour Breakout trading indicator is designed to help traders pinpoint key intraday levels based on high-probability breakout active session—Power Hour. Defined as the last hour of the U.S. trading session (3:00 p.m. to 4:00 p.m. EST by default), this period...",
      createdDate: "Oct 1, 2025",
      imageUrl: "/placeholder.svg",
      isFilled: false,
    },
    {
      id: "3",
      name: "Initial Balance Breakout Signals",
      description: "The Initial Balance Breakout Signals is a powerful trading indicator designed to help traders identify high-probability breakout opportunities based on the Initial Balance (IB) concept. This tool automatically identifies the IB range (or allows you to use custom...",
      createdDate: "Sep 24, 2025",
      imageUrl: "/placeholder.svg",
      isFilled: true,
    },
    {
      id: "4",
      name: "Volume Profile Analyzer",
      description: "Advanced volume profile indicator that helps identify key support and resistance levels based on volume distribution. Perfect for intraday and swing traders looking to find high-probability entry and exit points in the market...",
      createdDate: "Sep 15, 2025",
      imageUrl: "/placeholder.svg",
      isFilled: false,
    },
    {
      id: "5",
      name: "Smart Money Concepts",
      description: "Track institutional money flow and identify market structure breaks, order blocks, and fair value gaps. This indicator combines multiple smart money concepts to give you an edge in understanding where the big players are positioned...",
      createdDate: "Sep 10, 2025",
      imageUrl: "/placeholder.svg",
      isFilled: true,
    },
    {
      id: "6",
      name: "Multi-Timeframe RSI",
      description: "View RSI across multiple timeframes simultaneously to spot divergences and overbought/oversold conditions. This powerful tool helps you align your trades with the bigger picture while maintaining precision on lower timeframes...",
      createdDate: "Sep 5, 2025",
      imageUrl: "/placeholder.svg",
      isFilled: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 pt-16">
        <div className="p-4 md:p-8">
          {/* Subscribed Section */}
          <Collapsible open={isSubscribedOpen} onOpenChange={setIsSubscribedOpen} className="mb-8">
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between mb-4 h-12 text-lg font-semibold hover:bg-accent"
              >
                <span>Subscribed</span>
                {isSubscribedOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3 p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Track, Manage Your Algo Subscriptions</h2>
              </div>

              {/* Subscription Snapshot */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Subscription Snapshot</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-card/50 border-border">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">Active Algos</p>
                      <p className="text-3xl font-bold">{subscriptionStats.activeAlgos}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-border">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">Paused Algos</p>
                      <p className="text-3xl font-bold">{subscriptionStats.pausedAlgos}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-border">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">Not Deployed</p>
                      <p className="text-3xl font-bold text-warning">{subscriptionStats.notDeployed}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-border">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">Total Subscriptions</p>
                      <p className="text-3xl font-bold">{subscriptionStats.totalSubscriptions}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Deployed Algos Table */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Deployed Algos</h3>
                <Card className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-semibold">Algo Name</TableHead>
                          <TableHead className="font-semibold">Partner</TableHead>
                          <TableHead className="font-semibold">Plan Amount</TableHead>
                          <TableHead className="font-semibold">Amount Required</TableHead>
                          <TableHead className="font-semibold">Start Date</TableHead>
                          <TableHead className="font-semibold">End Date</TableHead>
                          <TableHead className="font-semibold">Mandate</TableHead>
                          <TableHead className="font-semibold">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {deployedAlgos.map((algo) => (
                          <TableRow key={algo.id} className="hover:bg-muted/30">
                            <TableCell className="font-medium">{algo.name}</TableCell>
                            <TableCell>{algo.partner}</TableCell>
                            <TableCell>{algo.planAmount}</TableCell>
                            <TableCell>{algo.amountRequired}</TableCell>
                            <TableCell className="text-muted-foreground">{algo.startDate}</TableCell>
                            <TableCell className="text-muted-foreground">{algo.endDate}</TableCell>
                            <TableCell>
                              <Button 
                                variant="link" 
                                className="p-0 h-auto text-warning hover:text-warning/80 font-semibold"
                              >
                                {algo.status === "Paused" ? "Unset Now >" : "Set Now >"}
                              </Button>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={algo.status === "Active" ? "default" : "secondary"}
                                className={algo.status === "Active" 
                                  ? "bg-success hover:bg-success text-white" 
                                  : "bg-muted hover:bg-muted text-muted-foreground"
                                }
                              >
                                {algo.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Universal hub for custom indicators
                </h1>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                  Discover and integrate powerful trading indicators for your platform
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search indicators"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>

            {/* Horizontal Filters */}
            <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-2 md:mb-3 text-sm sm:text-base">Categories</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className="rounded-full px-8 py-5 text-sm font-semibold"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Platform Filters */}
              <div>
                <h3 className="font-semibold mb-2 md:mb-3 text-sm sm:text-base">Platform</h3>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <Button
                      key={platform.id}
                      variant={selectedPlatform === platform.id ? "default" : "outline"}
                      className="rounded-full px-6 py-5 text-sm font-semibold"
                      onClick={() => setSelectedPlatform(platform.id)}
                    >
                      {platform.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Filter Tags */}
              <div>
                <h3 className="font-semibold mb-2 md:mb-3 text-sm sm:text-base">Filter Tags</h3>
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground">No active filters</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">{indicators.length}</span> RESULTS
              </p>
            </div>

            {/* Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
                {indicators.map((indicator) => (
                  <Card key={indicator.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Chart Preview */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          {/* Simulated chart with gradient boxes */}
                          <div className="absolute inset-0 p-4 flex items-end justify-around">
                            <div className="w-1/4 bg-success/20 backdrop-blur-sm border border-success/40 rounded" style={{ height: '40%' }}></div>
                            <div className="w-1/4 bg-destructive/20 backdrop-blur-sm border border-destructive/40 rounded" style={{ height: '60%' }}></div>
                            <div className="w-1/4 bg-success/20 backdrop-blur-sm border border-success/40 rounded" style={{ height: '50%' }}></div>
                          </div>
                          {/* Grid lines */}
                          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                            {[...Array(16)].map((_, i) => (
                              <div key={i} className="border-slate-700/30 border-r border-b"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {indicator.isFilled && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-success/90 hover:bg-success text-white">
                            Filled
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{indicator.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">Created {indicator.createdDate}</p>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm mb-4 line-clamp-3">
                        {indicator.description}
                      </CardDescription>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        See Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
      </div>
    </DashboardLayout>
  );
};

export default Marketplace;
