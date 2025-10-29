import { LayoutDashboard, TrendingUp, Users, Bell, BarChart3, Users2, Store, User, FileText, CreditCard, Phone, MessageCircle, Video, UserPlus, ChevronDown, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  isHeader?: boolean;
  path?: string;
  subtitle?: string;
  nested?: boolean;
}

const SidebarItem = ({ icon, label, active, isHeader, path, subtitle, nested }: SidebarItemProps) => {
  const navigate = useNavigate();

  if (isHeader) {
    return (
      <div className="px-3 py-1.5 mt-3 first:mt-0">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
      </div>
    );
  }

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
        nested && "ml-6",
        active
          ? "bg-primary/10 text-primary border-l-4 border-primary -ml-4 pl-[12px]"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
        nested && active && "ml-2"
      )}
    >
      <div className="flex h-4 w-4 items-center justify-center flex-shrink-0">{icon}</div>
      <div className="flex flex-col items-start flex-1">
        <span className="text-sm leading-tight">{label}</span>
        {subtitle && <span className="text-[10px] text-muted-foreground font-normal leading-tight">{subtitle}</span>}
      </div>
    </button>
  );
};

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const DashboardSidebar = ({ isOpen = false, onClose }: DashboardSidebarProps) => {
  const location = useLocation();
  const [isAlertToTradeOpen, setIsAlertToTradeOpen] = useState(
    location.pathname === "/alert-to-trade" || location.pathname === "/create-alerts"
  );
  const [isXmGptOpen, setIsXmGptOpen] = useState(location.pathname === "/xm-gpt");

  const chatHistory = [
    { id: 1, title: "Q1 FY26 Sales Volume Growth...", timestamp: "22:53 | Oct 28" },
    { id: 2, title: "Q1 FY26 Summary Insights", timestamp: "22:51 | Oct 28" },
    { id: 3, title: "Adani Green Analysis", timestamp: "20:15 | Oct 27" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-sidebar shadow-sm overflow-y-auto z-40 transition-transform duration-300",
        "md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col gap-0.5 p-3 py-2">
        <SidebarItem label="Dashboard" isHeader />
        <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} label="Summary" path="/" active={location.pathname === "/"} />
        
        {/* XM GPT Collapsible with History */}
        <Collapsible open={isXmGptOpen} onOpenChange={setIsXmGptOpen}>
          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                location.pathname === "/xm-gpt"
                  ? "bg-primary/10 text-primary border-l-4 border-primary -ml-4 pl-[12px]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <div className="flex h-4 w-4 items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4" />
              </div>
              <span className="text-sm leading-tight flex-1 text-left">XM GPT</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isXmGptOpen && "rotate-180")} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-0.5 mt-0.5">
            {chatHistory.map((chat) => (
              <button
                key={chat.id}
                className="flex w-full items-start gap-2 rounded-lg px-3 py-2 ml-6 text-xs transition-colors text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="text-xs leading-tight truncate w-full text-left">{chat.title}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight">{chat.timestamp}</span>
                </div>
              </button>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <SidebarItem icon={<TrendingUp className="h-4 w-4" />} label="Account Config" path="/account-config" active={location.pathname === "/account-config"} />
        <SidebarItem icon={<Users className="h-4 w-4" />} label="Copy Trading" path="/copy-trading" active={location.pathname === "/copy-trading"} />
        
        {/* Alert to Trade Collapsible */}
        <Collapsible open={isAlertToTradeOpen} onOpenChange={setIsAlertToTradeOpen}>
          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                (location.pathname === "/alert-to-trade" || location.pathname === "/create-alerts")
                  ? "bg-primary/10 text-primary border-l-4 border-primary -ml-4 pl-[12px]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <div className="flex h-4 w-4 items-center justify-center flex-shrink-0">
                <Bell className="h-4 w-4" />
              </div>
              <span className="text-sm leading-tight flex-1 text-left">Alert to Trade</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isAlertToTradeOpen && "rotate-180")} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-0.5 mt-0.5">
            <SidebarItem 
              icon={<Bell className="h-4 w-4" />} 
              label="Alert to Trade" 
              path="/alert-to-trade" 
              active={location.pathname === "/alert-to-trade"} 
              nested 
            />
            <SidebarItem 
              icon={<BarChart3 className="h-4 w-4" />} 
              label="Create Alert" 
              path="/create-alerts" 
              active={location.pathname === "/create-alerts"} 
              nested 
            />
          </CollapsibleContent>
        </Collapsible>

        <SidebarItem icon={<Users2 className="h-4 w-4" />} label="Groups" path="/groups" active={location.pathname === "/groups"} />
        <SidebarItem icon={<Store className="h-4 w-4" />} label="Marketplace" path="/marketplace" active={location.pathname === "/marketplace"} />

          <SidebarItem label="Management" isHeader />
          <SidebarItem icon={<User className="h-4 w-4" />} label="User" path="/user" active={location.pathname === "/user"} />
          <SidebarItem icon={<FileText className="h-4 w-4" />} label="Invoices" path="/invoices" active={location.pathname === "/invoices"} />
          <SidebarItem icon={<CreditCard className="h-4 w-4" />} label="Pricing" path="/pricing" active={location.pathname === "/pricing"} />

          <SidebarItem label="Support" isHeader />
          <SidebarItem icon={<Phone className="h-4 w-4" />} label="Call" path="/call" active={location.pathname === "/call"} />
          <SidebarItem icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" path="/whatsapp" active={location.pathname === "/whatsapp"} />
          <SidebarItem icon={<Video className="h-4 w-4" />} label="Tutorials" path="/tutorials" active={location.pathname === "/tutorials"} />

          <SidebarItem label="Partner With Us" isHeader />
          <SidebarItem icon={<UserPlus className="h-4 w-4" />} label="Personal Referral" />
        </div>
      </aside>
    </>
  );
};
