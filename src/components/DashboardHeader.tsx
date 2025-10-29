import { Bell, Moon, Sun, Settings, Menu } from "lucide-react";
import xmLogo from "@/assets/xclusive-money-logo.png";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { NotificationsPanel } from "./NotificationsPanel";
import { NewAutomationModal, SettingsModal, ProfileModal } from "./ActionModals";
import { useTheme } from "next-themes";
import { useState } from "react";

interface DashboardHeaderProps {
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
}

export const DashboardHeader = ({ isSidebarOpen, onSidebarToggle }: DashboardHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [showAutomationModal, setShowAutomationModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="shrink-0"
            onClick={onSidebarToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <img src={xmLogo} alt="Xclusive Money" className="h-8 w-auto" />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button 
            onClick={() => setShowAutomationModal(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 hidden sm:flex"
          >
            <span className="text-lg mr-2">+</span>
            New Automation
          </Button>
          <Button 
            onClick={() => setShowAutomationModal(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 sm:hidden" 
            size="icon"
          >
            <span className="text-lg">+</span>
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] rounded-full"
                >
                  9
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 border-border" align="end">
              <NotificationsPanel />
            </PopoverContent>
          </Popover>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex"
            onClick={() => setShowSettingsModal(true)}
          >
            <Settings className="h-5 w-5" />
          </Button>
          <button onClick={() => setShowProfileModal(true)}>
            <Avatar className="h-8 w-8 sm:h-9 sm:w-9 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">U</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>

      {/* Modals */}
      <NewAutomationModal open={showAutomationModal} onOpenChange={setShowAutomationModal} />
      <SettingsModal open={showSettingsModal} onOpenChange={setShowSettingsModal} />
      <ProfileModal open={showProfileModal} onOpenChange={setShowProfileModal} />
    </header>
  );
};
