import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Lightbulb, Building2, FileText, Network, MessageSquare, ChevronDown, Crown, AlertTriangle, MoreVertical, Plus, ChevronLeft, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StockResults } from "@/components/StockResults";
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

const XmGpt = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMode, setSelectedMode] = useState("Balanced");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchedStock, setSearchedStock] = useState({ name: "", ticker: "" });
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Parse stock name and ticker from query
      const query = searchQuery.trim().toUpperCase();
      setSearchedStock({
        name: query.includes("@") ? query.split("@")[1] : query,
        ticker: query.includes("@") ? query.split("@")[1] : query
      });
      setShowResults(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const modes = ["Balanced", "Concise", "Descriptive"];
  
  const chatHistory = [
    { id: 1, title: "Q1 FY26 Sales Volume Growth...", timestamp: "22:53 | October 28, 2025" },
    { id: 2, title: "Q1 FY26 Summary Insights", timestamp: "22:51 | October 28, 2025" },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Warning Banner */}
          <div className="mb-6 bg-warning/10 border border-warning/20 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <p className="text-sm md:text-base text-foreground">
                You have exhausted your daily limit of AI prompts.
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => navigate("/pricing")}
            >
              <Crown className="h-4 w-4" />
              Upgrade
            </Button>
          </div>

          {/* Show stock results or hero section */}
          {showResults ? (
            <div className="py-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowResults(false);
                  setSearchQuery("");
                }}
                className="mb-6"
              >
                ← Back to search
              </Button>
              <StockResults 
                stockName={searchedStock.name || "Adani Green Energy Ltd"}
                ticker={searchedStock.ticker || "ADANIGREEN"}
              />
            </div>
          ) : (
          <div className="text-center space-y-8 py-8 md:py-12">
            <h1 className="text-3xl md:text-5xl font-bold">
              New Standard of{" "}
              <span className="text-primary">Trading Research</span>
            </h1>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Ask anything or enter stock name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-4 pr-12 py-6 text-base md:text-lg bg-card border-border rounded-xl"
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <Search className="h-5 w-5 text-primary hover:text-primary/80" />
                </button>
              </div>

              {/* Options Bar */}
              <div className="flex flex-wrap items-center gap-2 justify-center">
                {/* Mode Selector with Dropdown */}
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

              {/* Disclaimer */}
              <p className="text-xs md:text-sm text-muted-foreground">
                AI can make mistakes. Check important information.
              </p>
            </div>

            {/* Lightbulb Icon */}
            <div className="flex justify-center py-8">
              <div className="p-6 rounded-full bg-primary/10 border border-primary/20">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Prefix a company with <span className="text-foreground font-semibold">@</span> to ask questions.
              </p>
              <p className="text-sm text-muted-foreground">
                Try{" "}
                <button className="text-primary hover:underline font-medium">
                  Summarize Q1 FY26 Concall @ZAGGLE
                </button>{" "}
                or just type{" "}
                <button className="text-primary hover:underline font-medium">
                  INFY
                </button>{" "}
                to get started
              </p>
            </div>

            {/* Curious Minds Section */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z" />
                </svg>
                <h2 className="text-lg font-medium">Curious minds on fuzz are asking...</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="text-left p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group">
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    Earnings alert! Which stocks could grab headlines this week (Oct 27-31)?
                  </p>
                </button>
                
                <button className="text-left p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group">
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    Gold's sharp October 2025 fall: What's really driving the decline?
                  </p>
                </button>

                <button className="text-left p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group">
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    India–US trade deal: Which stocks could turn into the next big winners?
                  </p>
                </button>

                <button className="text-left p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group">
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    LIC & Adani: What investors should know about the bond news?
                  </p>
                </button>
              </div>
            </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            {/* Companies Stat */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-lg bg-muted/50">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">5000+</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Companies listed on NSE and BSE, from blue-chips to niche micro-caps — tracked in real time.
                </p>
              </div>
            </div>

            {/* Documents Stat */}
            <div className="text-center space-y-4 md:border-x border-border md:px-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-lg bg-muted/50">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">100K+</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documents like annual reports, investor presentations, concall transcripts and other exchange filings captured.
                </p>
              </div>
            </div>

            {/* Data Points Stat */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-lg bg-muted/50">
                  <Network className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">40M+</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data points extracted by AI from 100K+ documents to answer your questions on the spot.
                </p>
              </div>
            </div>
          </div>
          </div>
          )}
        </div>
      </main>
      </div>
    </DashboardLayout>
  );
};

export default XmGpt;
