import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Input } from "@/components/ui/input";
import { Search, Lightbulb, Building2, FileText, Network } from "lucide-react";
import { useState } from "react";

const XmGpt = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              New Standard of{" "}
              <span className="text-primary">Trading Research</span>
            </h1>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-24 py-6 text-lg bg-card border-border rounded-xl"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground">
                  <kbd className="px-2 py-1 bg-muted rounded border border-border">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="px-2 py-1 bg-muted rounded border border-border">K</kbd>
                </div>
              </div>
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
      </main>
    </div>
  );
};

export default XmGpt;
