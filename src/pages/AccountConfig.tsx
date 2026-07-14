import { DashboardLayout } from "@/components/DashboardLayout";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const AccountConfig = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"all" | "success" | "failed">("all");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [selectedBroker, setSelectedBroker] = useState("");
  const [brokerSearch, setBrokerSearch] = useState("");
  const [brokerOpen, setBrokerOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    clientId: "",
    password: "",
    apiKey: "",
    apiSecret: "",
    totpKey: "",
    email: "",
    mobile: "",
  });

  const brokers = [
    { id: "broker1", name: "Broker1", color: "bg-gray-500" },
    { id: "flattrade", name: "Flattrade", color: "bg-indigo-500" },
    { id: "acagarwal", name: "Acagarwal", color: "bg-blue-500" },
    { id: "motilaloswal", name: "Motilaloswal", color: "bg-indigo-700" },
    { id: "kotakneo", name: "Kotakneo", color: "bg-red-500" },
    { id: "tradejini", name: "Tradejini", color: "bg-teal-500" },
    { id: "zebu", name: "Zebu", color: "bg-blue-700" },
    { id: "enrichmoney", name: "Enrichmoney", color: "bg-gray-900" },
    { id: "dhan", name: "Dhan", color: "bg-emerald-500" },
    { id: "finvasia", name: "Finvasia", color: "bg-yellow-600" },
    { id: "fyers", name: "Fyers", color: "bg-indigo-600" },
    { id: "groww", name: "Groww", color: "bg-cyan-500" },
    { id: "aliceblue", name: "Aliceblue", color: "bg-teal-600" },
    { id: "zerodha", name: "Zerodha", color: "bg-orange-500" },
  ];

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
    <DashboardLayout>
      <div className="min-h-screen bg-background">
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
            <Button 
              onClick={() => setShowAddAccount(!showAddAccount)}
              className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">{showAddAccount ? "Cancel" : "Add New Account"}</span>
              <span className="sm:hidden">{showAddAccount ? "Cancel" : "Add Account"}</span>
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

          {/* Add Account Form */}
          {showAddAccount && (
            <div className="bg-card rounded-lg border border-border p-4 sm:p-6 mb-4 md:mb-6 animate-in fade-in slide-in-from-top-4">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Add/Edit Account Details</h2>
              <p className="text-sm text-muted-foreground mb-6">Select your broker to configure account credentials.</p>
              
              {/* Broker Selection Dropdown */}
              <div className="mb-6 max-w-md">
                <label className="text-xs sm:text-sm font-medium mb-2 block">Broker</label>
                <Popover open={brokerOpen} onOpenChange={setBrokerOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      role="combobox"
                      aria-expanded={brokerOpen}
                      className="flex w-full items-center justify-between gap-2 h-10 rounded-md border border-input bg-background px-3 text-sm hover:bg-muted/40 transition-colors"
                    >
                      {selectedBroker ? (
                        (() => {
                          const b = brokers.find((x) => x.id === selectedBroker);
                          if (!b) return <span className="text-muted-foreground">Select broker...</span>;
                          return (
                            <span className="flex items-center gap-2 min-w-0">
                              <span className={`h-6 w-6 rounded-full ${b.color} flex items-center justify-center text-white font-semibold text-[10px] shrink-0`}>
                                {b.name.substring(0, 2).toUpperCase()}
                              </span>
                              <span className="truncate font-medium">{b.name}</span>
                            </span>
                          );
                        })()
                      ) : (
                        <span className="text-muted-foreground">Select broker...</span>
                      )}
                      <ChevronsUpDown className="h-4 w-4 opacity-50 shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Search broker..." value={brokerSearch} onValueChange={setBrokerSearch} />
                      <CommandList>
                        <CommandEmpty>No brokers found</CommandEmpty>
                        <CommandGroup>
                          {brokers.map((broker) => (
                            <CommandItem
                              key={broker.id}
                              value={broker.name}
                              onSelect={() => {
                                setSelectedBroker(broker.id);
                                setBrokerSearch("");
                                setBrokerOpen(false);
                              }}
                              className="flex items-center gap-2"
                            >
                              <span className={`h-6 w-6 rounded-full ${broker.color} flex items-center justify-center text-white font-semibold text-[10px] shrink-0`}>
                                {broker.name.substring(0, 2).toUpperCase()}
                              </span>
                              <span className="flex-1 truncate">{broker.name}</span>
                              <Check className={cn("h-4 w-4", selectedBroker === broker.id ? "opacity-100" : "opacity-0")} />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>


              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-2 block">Username (for your reference)</label>
                  <Input
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    placeholder="Username"
                    className="h-9 sm:h-10"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-2 block">
                    {selectedBroker === "flattrade" ? "Flattrade Client ID" : "Client ID"}
                  </label>
                  <Input
                    value={formData.clientId}
                    onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
                    placeholder={selectedBroker === "flattrade" ? "Flattrade Client ID" : "Client ID"}
                    className="h-9 sm:h-10"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-2 block">Password</label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="h-9 sm:h-10"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-2 block">API Key</label>
                  <Input
                    value={formData.apiKey}
                    onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
                    placeholder="API Key"
                    className="h-9 sm:h-10"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-2 block">API Secret</label>
                  <Input
                    type="password"
                    value={formData.apiSecret}
                    onChange={(e) => setFormData({ ...formData, apiSecret: e.target.value })}
                    placeholder="API Secret"
                    className="h-9 sm:h-10"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-2 block">TOTP Key</label>
                  <Input
                    value={formData.totpKey}
                    onChange={(e) => setFormData({ ...formData, totpKey: e.target.value })}
                    placeholder="TOTP Key"
                    className="h-9 sm:h-10"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-2 block">Email Id (optional)</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Id (optional)"
                    className="h-9 sm:h-10"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-2 block">Mobile no (optional)</label>
                  <Input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="Mobile no (optional)"
                    className="h-9 sm:h-10"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAddAccount(false)}
                  className="w-full sm:w-auto"
                >
                  Close
                </Button>
                <Button 
                  onClick={() => {
                    toast({
                      title: "Account added",
                      description: "Account has been added successfully",
                    });
                    setShowAddAccount(false);
                    setFormData({
                      username: "",
                      clientId: "",
                      password: "",
                      apiKey: "",
                      apiSecret: "",
                      totpKey: "",
                      email: "",
                      mobile: "",
                    });
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  Add Account
                </Button>
              </div>
            </div>
          )}

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

            {/* Mobile Card List */}
            <div className="md:hidden divide-y divide-border">
              {filteredAccounts.map((account) => (
                <div key={account.id} className="p-3 space-y-2.5">
                  <div className="flex items-start gap-2">
                    <Checkbox className="mt-1" />
                    <Avatar className={`h-9 w-9 ${account.avatarColor} shrink-0`}>
                      <AvatarFallback className="text-white font-semibold text-xs">
                        {account.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{account.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{account.clientId}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{account.lastLoginTime}</p>
                    </div>
                  </div>

                  <div
                    className={`w-full rounded-md px-2.5 py-1.5 text-xs leading-snug ${
                      account.autoLoginStatus === "success"
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-destructive text-destructive-foreground"
                    }`}
                  >
                    {account.autoLogin}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8 text-xs bg-success/10 text-success border-success/20 hover:bg-success/20"
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Reconnect
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8 text-xs bg-success/10 text-success border-success/20 hover:bg-success/20"
                      onClick={() => copyToClipboard("https://developer-url.com", "URL")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      URL
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8 text-xs bg-success/10 text-success border-success/20 hover:bg-success/20"
                      onClick={() => copyToClipboard("192.168.1.1", "IP")}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      IP
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
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
                </div>
              ))}
            </div>

            {/* Table (desktop) */}
            <div className="hidden md:block overflow-x-auto">
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
                            className="h-8 text-xs bg-success/10 text-success border-success/20 hover:bg-success/20"
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
    </DashboardLayout>
  );
};

export default AccountConfig;
