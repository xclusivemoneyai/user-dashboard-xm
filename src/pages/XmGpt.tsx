import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Lightbulb, Building2, FileText, Network, MessageSquare, ChevronDown, Crown, AlertTriangle, MoreVertical, Plus, ChevronLeft, Edit2, Trash2, Paperclip, BookOpen, Mic } from "lucide-react";
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
          <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-medium text-center mb-12 text-foreground">
              What can I help with?
            </h1>

            {/* Search Bar with Action Buttons */}
            <div className="w-full max-w-3xl space-y-4">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-4 shadow-lg">
                <Input
                  type="text"
                  placeholder="Ask anything"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0 px-2 py-6 placeholder:text-muted-foreground/60"
                />
                
                {/* Action Buttons Row */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 rounded-full hover:bg-muted/50 text-foreground/80"
                    >
                      <Paperclip className="h-4 w-4" />
                      Attach
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 rounded-full hover:bg-muted/50 text-foreground/80"
                      onClick={handleSearch}
                    >
                      <Search className="h-4 w-4" />
                      Search
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 rounded-full hover:bg-muted/50 text-foreground/80"
                    >
                      <BookOpen className="h-4 w-4" />
                      Study
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 rounded-full hover:bg-muted/50 text-foreground/80"
                  >
                    <Mic className="h-4 w-4" />
                    Voice
                  </Button>
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
