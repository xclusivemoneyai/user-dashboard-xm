import { LayoutDashboard, TrendingUp, Users, Bell, BarChart3, Users2, Store } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  isHeader?: boolean;
}

const SidebarItem = ({ icon, label, active, isHeader }: SidebarItemProps) => {
  if (isHeader) {
    return (
      <div className="px-3 py-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
      </div>
    );
  }

  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-primary/10 text-primary border-l-4 border-primary -ml-4 pl-[12px]"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center">{icon}</div>
      <span>{label}</span>
    </button>
  );
};

export const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-sidebar shadow-sm">
      <div className="flex flex-col gap-0.5 p-4">
        <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} label="Summary" />
        <SidebarItem icon={<TrendingUp className="h-5 w-5" />} label="Account Config" />
        <SidebarItem icon={<Users className="h-5 w-5" />} label="Copy Trading" />
        <SidebarItem icon={<Bell className="h-5 w-5" />} label="Alert to Trade" />
        <SidebarItem icon={<BarChart3 className="h-5 w-5" />} label="Create Alerts" active />
        <SidebarItem icon={<Users2 className="h-5 w-5" />} label="Groups" />
        
        <div className="mt-4">
          <SidebarItem label="Pages" isHeader />
          <SidebarItem icon={<Store className="h-5 w-5" />} label="Marketplace" />
        </div>
      </div>
    </aside>
  );
};
