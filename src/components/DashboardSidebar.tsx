import { LayoutDashboard, TrendingUp, Users, Bell, BarChart3, Users2, Store, User, FileText, CreditCard, Lock, Phone, Mail, Send, MessageCircle, MessageSquare, HelpCircle, Video, UserPlus, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

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
      <div className="px-3 py-2 mt-6 first:mt-0">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
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
        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-primary/10 text-primary border-l-4 border-primary -ml-4 pl-[12px]"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center flex-shrink-0">{icon}</div>
      <div className="flex flex-col items-start flex-1">
        <span>{label}</span>
        {subtitle && <span className="text-xs text-muted-foreground font-normal">{subtitle}</span>}
      </div>
    </button>
  );
};

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-sidebar shadow-sm overflow-y-auto">
      <div className="flex flex-col gap-0.5 p-4">
        <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} label="Summary" path="/" active={location.pathname === "/"} />
        <SidebarItem icon={<TrendingUp className="h-5 w-5" />} label="Account Config" path="/account-config" active={location.pathname === "/account-config"} />
        <SidebarItem icon={<Users className="h-5 w-5" />} label="Copy Trading" />
        <SidebarItem icon={<Bell className="h-5 w-5" />} label="Alert to Trade" path="/alert-to-trade" active={location.pathname === "/alert-to-trade"} />
        <SidebarItem icon={<BarChart3 className="h-5 w-5" />} label="Create Alert" path="/create-alerts" active={location.pathname === "/create-alerts"} />
        <SidebarItem icon={<Users2 className="h-5 w-5" />} label="Groups" />
        
        <SidebarItem label="Pages" isHeader />
        <SidebarItem icon={<Store className="h-5 w-5" />} label="Marketplace" />

        <SidebarItem label="Management" isHeader />
        <SidebarItem icon={<User className="h-5 w-5" />} label="User" />
        <SidebarItem icon={<FileText className="h-5 w-5" />} label="Invoices" />
        <SidebarItem icon={<CreditCard className="h-5 w-5" />} label="Change Plan" />
        <SidebarItem icon={<Lock className="h-5 w-5" />} label="Increase Limits" subtitle="change master or child capacity" />

        <SidebarItem label="Support" isHeader />
        <SidebarItem icon={<Phone className="h-5 w-5" />} label="Call" />
        <SidebarItem icon={<Mail className="h-5 w-5" />} label="Mail" />
        <SidebarItem icon={<Send className="h-5 w-5" />} label="Telegram Alerts Channel" />
        <SidebarItem icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" />
        <SidebarItem icon={<MessageSquare className="h-5 w-5" />} label="Chat Support" />
        <SidebarItem icon={<HelpCircle className="h-5 w-5" />} label="Request Anydesk Support" />
        <SidebarItem icon={<Video className="h-5 w-5" />} label="Tutorials" />

        <SidebarItem label="Partner With Us" isHeader />
        <SidebarItem icon={<UserPlus className="h-5 w-5" />} label="Personal Referral" />
        <SidebarItem icon={<Briefcase className="h-5 w-5" />} label="Whitelabel Solution" />
      </div>
    </aside>
  );
};
