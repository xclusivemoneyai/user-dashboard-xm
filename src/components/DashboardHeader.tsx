import { Bell, Moon, Sun, Settings, Menu, User, LayoutDashboard, Plus, Bookmark, LogOut, Monitor, ChevronDown } from "lucide-react";
import xmLogo from "@/assets/xclusive-money-logo.svg";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NotificationsPanel } from "./NotificationsPanel";
import { NewAutomationModal, SettingsModal, ProfileModal } from "./ActionModals";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DashboardHeaderProps {
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
}

export const DashboardHeader = ({ isSidebarOpen, onSidebarToggle }: DashboardHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [showAutomationModal, setShowAutomationModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  return (
    <header className="dark sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="flex h-16 items-center justify-between px-6 text-white">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground">XM</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline text-sm font-medium">Xclusive</span>
                <ChevronDown className="hidden sm:inline h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-background border-border z-[100]" align="end">
              {/* User Profile Header */}
              <div className="flex items-center gap-3 p-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">XM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-foreground">Xclusive Money</p>
                  <p className="text-sm text-muted-foreground">xclusive.moneyy@gmail.com</p>
                </div>
              </div>

              <DropdownMenuSeparator />

              {/* Menu Items */}
              <DropdownMenuItem 
                className="flex items-center gap-3 p-3 cursor-pointer"
                onClick={() => navigate('/user')}
              >
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">Account</span>
              </DropdownMenuItem>

              <DropdownMenuItem 
                className="flex items-center gap-3 p-3 cursor-pointer"
                onClick={() => navigate('/')}
              >
                <LayoutDashboard className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">Dashboard</span>
              </DropdownMenuItem>

              <DropdownMenuItem 
                className="flex items-center gap-3 p-3 cursor-pointer"
              >
                <Plus className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">Watchlists</span>
              </DropdownMenuItem>

              <DropdownMenuItem 
                className="flex items-center gap-3 p-3 cursor-pointer"
              >
                <Bookmark className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">Bookmarks</span>
              </DropdownMenuItem>

              <DropdownMenuItem 
                className="flex items-center gap-3 p-3 cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">Logout</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Theme Switcher */}
              <div className="p-3">
                <div className="flex items-center justify-around bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setTheme("system")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded transition-colors ${
                      theme === "system" ? "bg-background shadow-sm" : "hover:bg-background/50"
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setTheme("light")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded transition-colors ${
                      theme === "light" ? "bg-background shadow-sm" : "hover:bg-background/50"
                    }`}
                  >
                    <Sun className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded transition-colors ${
                      theme === "dark" ? "bg-background shadow-sm" : "hover:bg-background/50"
                    }`}
                  >
                    <Moon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Modals */}
      <NewAutomationModal open={showAutomationModal} onOpenChange={setShowAutomationModal} />
      <SettingsModal open={showSettingsModal} onOpenChange={setShowSettingsModal} />
      <ProfileModal open={showProfileModal} onOpenChange={setShowProfileModal} />
    </header>
  );
};
