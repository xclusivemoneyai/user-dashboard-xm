import { LayoutDashboard, TrendingUp, Users, Bell, BarChart3, Users2, Store, User, FileText, CreditCard, Phone, MessageCircle, Video, UserPlus, Menu, X, Bot, ChevronDown } from "lucide-react";
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
}

const SidebarItem = ({ icon, label, active, isHeader, path, subtitle }: SidebarItemProps) => {
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
        active
          ? "bg-primary/10 text-primary border-l-4 border-primary -ml-4 pl-[12px]"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
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

export const DashboardSidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed left-4 top-20 z-50 md:hidden bg-primary text-primary-foreground p-2 rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-sidebar shadow-sm overflow-y-auto z-40 transition-transform duration-300",
        "md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col gap-0.5 p-3 py-2">
        <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} label="Summary" path="/" active={location.pathname === "/"} />
        <SidebarItem icon={<Bot className="h-4 w-4" />} label="XM GPT" path="/xm-gpt" active={location.pathname === "/xm-gpt"} />
        <SidebarItem icon={<TrendingUp className="h-4 w-4" />} label="Account Config" path="/account-config" active={location.pathname === "/account-config"} />
        <SidebarItem icon={<Users className="h-4 w-4" />} label="Copy Trading" path="/copy-trading" active={location.pathname === "/copy-trading"} />
        <SidebarItem icon={<Bell className="h-4 w-4" />} label="Alert to Trade" path="/alert-to-trade" active={location.pathname === "/alert-to-trade"} />
        <SidebarItem icon={<BarChart3 className="h-4 w-4" />} label="Create Alert" path="/create-alerts" active={location.pathname === "/create-alerts"} />
        <SidebarItem icon={<Users2 className="h-4 w-4" />} label="Groups" path="/groups" active={location.pathname === "/groups"} />
        
        <Collapsible open={isMarketplaceOpen} onOpenChange={setIsMarketplaceOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                location.pathname === "/marketplace" || location.pathname === "/subscription"
                  ? "bg-primary/10 text-primary border-l-4 border-primary -ml-4 pl-[12px]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <Store className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1 text-left">Marketplace</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isMarketplaceOpen && "rotate-180")} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-6 mt-1 space-y-1">
            <SidebarItem icon={<CreditCard className="h-4 w-4" />} label="Subscription" path="/subscription" active={location.pathname === "/subscription"} />
          </CollapsibleContent>
        </Collapsible>

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
