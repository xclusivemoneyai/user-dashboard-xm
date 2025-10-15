import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Flame, Calendar, ChevronLeft, ChevronRight, MoreVertical, Search, Copy, RefreshCw, Trash2, Edit, Download } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const AccountConfig = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"all" | "success" | "failed">("all");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const accounts = [
    {
      id: "1",
      clientId: "1100434692",
      name: "Amit yadav",
      broker: "dhan",
      avatarColor: "bg-emerald-500",
      balance: "40834.16",
      autoLogin: "Invalid Access Token",
      autoLoginStatus: "error" as const,
      lastLoginTime: "14-10-2025 08:11:00",
    },
    {
      id: "2",
      clientId: "1882400",
      name: "Ankit Singh Garia",
      broker: "dhan",
      avatarColor: "bg-blue-500",
      balance: "Cash/FNO = -40.63",
      autoLogin: "Success",
      autoLoginStatus: "success" as const,
      lastLoginTime: "14-10-2025 08:17:05",
    },
    {
      id: "3",
      clientId: "CX9849",
      name: "FA109446",
      broker: "zerodha",
      avatarColor: "bg-orange-500",
      balance: "Unavailable",
      autoLogin: "Invalid Username/Password",
      autoLoginStatus: "error" as const,
      lastLoginTime: "14-10-2025 08:02:03",
    },
    {
      id: "4",
      clientId: "FA109446",
      name: "Unavailable",
      broker: "finavsia",
      avatarColor: "bg-yellow-600",
      balance: "Unavailable",
      autoLogin: "Invalid Input: User Blocked Due To Multiple Wrong Attempts",
      autoLoginStatus: "error" as const,
      lastLoginTime: "14-10-2025 08:12:00",
    },
    {
      id: "5",
      clientId: "FA96623",
      name: "Amit Kumar Yadav",
      broker: "finavsia",
      avatarColor: "bg-yellow-600",
      balance: "Unavailable",
      autoLogin: "Invalid Input : Wrong Password",
      autoLoginStatus: "error" as const,
      lastLoginTime: "14-10-2025 08:12:00",
    },
    {
      id: "6",
      clientId: "FA146021",
      name: "Unavailable",
      broker: "finavsia",
      avatarColor: "bg-yellow-600",
      balance: "Unavailable",
      autoLogin: "Invalid Input: User Blocked Due To Multiple Wrong Attempts",
      autoLoginStatus: "error" as const,
      lastLoginTime: "14-10-2025 08:12:00",
    },
  ];

  const filteredAccounts = accounts.filter((account) => {
    if (activeTab === "success") return account.autoLoginStatus === "success";
    if (activeTab === "failed") return account.autoLoginStatus === "error";
    return true;
  });

  const successCount = accounts.filter(a => a.autoLoginStatus === "success").length;
  const failedCount = accounts.filter(a => a.autoLoginStatus === "error").length;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} copied`,
      description: "Copied to clipboard successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 pt-16">
        <div className="p-4 md:p-8">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 md:mb-6 bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-lg p-4 sm:p-6 border border-primary/20">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                Account Configuration
              </h1>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>Dashboard</span>
                <span>•</span>
                <span className="text-foreground font-medium">Account Configuration</span>
              </div>
            </div>
            <Button className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add New Account</span>
              <span className="sm:hidden">Add Account</span>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 md:mb-6">
            <div className="bg-card rounded-lg p-2 sm:p-3 border border-border">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Total capacity</p>
                  <p className="text-lg sm:text-xl font-bold">2</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-2 sm:p-3 border border-border">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-success" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Master capacity</p>
                  <p className="text-lg sm:text-xl font-bold">1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-2 sm:p-3 border border-border">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-warning" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Children capacity</p>
                  <p className="text-lg sm:text-xl font-bold">1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-2 sm:p-3 border border-border">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-destructive" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Plan name</p>
                  <p className="text-sm sm:text-base font-semibold">Custom</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-2 sm:p-3 border border-border">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Validity</p>
                  <p className="text-xs sm:text-sm font-semibold truncate">04 Nov 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accounts Table */}
          <div className="bg-card rounded-lg border border-border">
            {/* Tabs */}
            <div className="flex items-center gap-6 px-4 pt-3 pb-2 border-b border-border">
              <button
                onClick={() => setActiveTab("all")}
                className={`pb-2 px-1 font-medium transition-colors relative flex items-center gap-2 text-sm ${
                  activeTab === "all"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All
                <Badge variant="secondary" className="rounded-full h-5 px-2 text-xs">
                  {accounts.length}
                </Badge>
                {activeTab === "all" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("success")}
                className={`pb-2 px-1 font-medium transition-colors relative flex items-center gap-2 text-sm ${
                  activeTab === "success"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Success
                <Badge className="rounded-full h-5 px-2 text-xs bg-success/20 text-success hover:bg-success/20 border-0">
                  {successCount}
                </Badge>
                {activeTab === "success" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("failed")}
                className={`pb-2 px-1 font-medium transition-colors relative flex items-center gap-2 text-sm ${
                  activeTab === "failed"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Failed
                <Badge className="rounded-full h-5 px-2 text-xs bg-destructive/20 text-destructive hover:bg-destructive/20 border-0">
                  {failedCount}
                </Badge>
                {activeTab === "failed" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-3 border-b border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[160px] h-9">
                    <SelectValue placeholder="Broker" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brokers</SelectItem>
                    <SelectItem value="dhan">Dhan</SelectItem>
                    <SelectItem value="zerodha">Zerodha</SelectItem>
                    <SelectItem value="finavsia">Finavsia</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-full sm:w-56 h-9"
                  />
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-12 h-10">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="h-10">Client ID</TableHead>
                    <TableHead className="h-10 hidden lg:table-cell">Opening Balance</TableHead>
                    <TableHead className="h-10">Auto-Login</TableHead>
                    <TableHead className="h-10 hidden md:table-cell">Last Login Time</TableHead>
                    <TableHead className="h-10 hidden xl:table-cell">Developer URL</TableHead>
                    <TableHead className="h-10 hidden xl:table-cell">Static IP</TableHead>
                    <TableHead className="h-10">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAccounts.map((account) => (
                    <TableRow key={account.id} className="h-14">
                      <TableCell className="py-2">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="py-2">
                        <div className="flex items-center gap-2">
                          <Avatar className={`h-8 w-8 ${account.avatarColor}`}>
                            <AvatarFallback className="text-white font-semibold text-xs">
                              {account.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="font-medium text-sm truncate">{account.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{account.clientId}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-2 hidden lg:table-cell">
                        <span className="text-sm">{account.balance}</span>
                      </TableCell>
                      <TableCell className="py-2">
                        <Badge 
                          variant={account.autoLoginStatus === "success" ? "outline" : "destructive"}
                          className={`text-[11px] leading-tight max-w-[200px] h-auto py-1 px-2 ${account.autoLoginStatus === "success" ? "bg-success/10 text-success border-success/20" : ""}`}
                        >
                          <span className="line-clamp-2">{account.autoLogin}</span>
                        </Badge>
                      </TableCell>
                      <TableCell className="py-2 hidden md:table-cell">
                        <span className="text-xs whitespace-nowrap">{account.lastLoginTime}</span>
                      </TableCell>
                      <TableCell className="py-2 hidden xl:table-cell">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="h-8 text-xs bg-success/10 text-success border-success/20 hover:bg-success/20"
                          onClick={() => copyToClipboard("https://developer-url.com", "URL")}
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy URL
                        </Button>
                      </TableCell>
                      <TableCell className="py-2 hidden xl:table-cell">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="h-8 text-xs bg-success/10 text-success border-success/20 hover:bg-success/20"
                          onClick={() => copyToClipboard("192.168.1.1", "IP")}
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy IP
                        </Button>
                      </TableCell>
                      <TableCell className="py-2">
                        <div className="flex items-center gap-1">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="h-8 text-xs bg-success/10 text-success border-success/20 hover:bg-success/20 hidden sm:inline-flex"
                          >
                            <RefreshCw className="h-3 w-3 mr-1" />
                            Reconnect
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="sm:hidden">
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Reconnect
                              </DropdownMenuItem>
                              <DropdownMenuItem className="xl:hidden">
                                <Copy className="h-4 w-4 mr-2" />
                                Copy URL
                              </DropdownMenuItem>
                              <DropdownMenuItem className="xl:hidden">
                                <Copy className="h-4 w-4 mr-2" />
                                Copy IP
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Showing {filteredAccounts.length} of {accounts.length} accounts
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Rows per page:</span>
                  <Select value={rowsPerPage.toString()} onValueChange={(val) => setRowsPerPage(Number(val))}>
                    <SelectTrigger className="w-[70px] h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <span className="text-sm text-muted-foreground">
                  1-{filteredAccounts.length} of {filteredAccounts.length}
                </span>
                
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountConfig;
