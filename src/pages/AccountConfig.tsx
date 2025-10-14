import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Flame, Calendar, ChevronLeft, ChevronRight, MoreVertical, Search, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
  const [denseMode, setDenseMode] = useState(false);
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Account Configuration</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Dashboard</span>
                <span>•</span>
                <span className="text-foreground">Account Configuration</span>
              </div>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Account
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total capacity</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Master capacity</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Children capacity</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Flame className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Plan name</p>
                  <p className="text-lg font-semibold">Custom</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Validity</p>
                  <p className="text-sm font-semibold">04 Nov 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accounts Table */}
          <div className="bg-card rounded-lg border border-border">
            {/* Tabs */}
            <div className="flex items-center gap-6 px-6 pt-4 border-b border-border">
              <button
                onClick={() => setActiveTab("all")}
                className={`pb-3 px-1 font-medium transition-colors relative flex items-center gap-2 ${
                  activeTab === "all"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All
                <Badge variant="secondary" className="rounded-full">
                  {accounts.length}
                </Badge>
                {activeTab === "all" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("success")}
                className={`pb-3 px-1 font-medium transition-colors relative flex items-center gap-2 ${
                  activeTab === "success"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Success
                <Badge variant="secondary" className="rounded-full">
                  {successCount}
                </Badge>
                {activeTab === "success" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("failed")}
                className={`pb-3 px-1 font-medium transition-colors relative flex items-center gap-2 ${
                  activeTab === "failed"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Failed
                <Badge variant="secondary" className="rounded-full">
                  {failedCount}
                </Badge>
                {activeTab === "failed" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center justify-between gap-4 p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Broker" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brokers</SelectItem>
                    <SelectItem value="dhan">Dhan</SelectItem>
                    <SelectItem value="zerodha">Zerodha</SelectItem>
                    <SelectItem value="finavsia">Finavsia</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
              </div>
              
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Client ID</TableHead>
                    <TableHead>Opening Balance</TableHead>
                    <TableHead>Auto-Login</TableHead>
                    <TableHead>Last Login Time</TableHead>
                    <TableHead>Developer URL</TableHead>
                    <TableHead>Static IP</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAccounts.map((account) => (
                    <TableRow key={account.id} className={denseMode ? "h-12" : ""}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className={`h-10 w-10 ${account.avatarColor}`}>
                            <AvatarFallback className="text-white font-semibold">
                              {account.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{account.name}</p>
                            <p className="text-sm text-muted-foreground">{account.clientId}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{account.balance}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={account.autoLoginStatus === "success" ? "outline" : "destructive"}
                          className={account.autoLoginStatus === "success" ? "bg-success/10 text-success border-success/20" : ""}
                        >
                          {account.autoLogin}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{account.lastLoginTime.split(" ")[0]}</p>
                          <p className="text-muted-foreground">{account.lastLoginTime.split(" ")[1]}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-success/10 text-success border-success/20 hover:bg-success/20"
                          onClick={() => copyToClipboard("https://developer-url.com", "URL")}
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy URL
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-success/10 text-success border-success/20 hover:bg-success/20"
                          onClick={() => copyToClipboard("192.168.1.1", "IP")}
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy IP
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-success/10 text-success border-success/20 hover:bg-success/20"
                        >
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Reconnect
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-border">
              <div className="flex items-center gap-3">
                <Switch checked={denseMode} onCheckedChange={setDenseMode} />
                <span className="text-sm text-muted-foreground">Dense</span>
              </div>
              
              <div className="flex items-center gap-6">
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
