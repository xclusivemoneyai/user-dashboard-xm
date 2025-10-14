import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

type NotificationType = "order" | "error" | "transfer";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  accountName: string;
  username: string;
  accountType?: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "order",
    title: "NIFTY 14 OCT 25200 CALL Order Executed",
    description: "Your Buy order for 75 Qty of NIFTY 14 OCT 25200 CALL has been executed at ₹ 0.80 on Dhan.",
    timestamp: "2025-10-14 15:00:49",
    accountName: "Dhan",
    username: "Ankit_Dhan",
    accountType: "CE",
    read: false,
  },
  {
    id: "2",
    type: "order",
    title: "NIFTY 14 OCT 25200 CALL Order Executed",
    description: "Your Sell order for 75 Qty of NIFTY 14 OCT 25200 CALL has been executed at ₹ 52.50 on Dhan.",
    timestamp: "2025-10-14 10:19:12",
    accountName: "Dhan",
    username: "akku_dhan",
    accountType: "PE",
    read: false,
  },
  {
    id: "3",
    type: "error",
    title: "Order Failed - Insufficient Margin",
    description: "Your order could not be placed due to insufficient margin in Zerodha account.",
    timestamp: "2025-10-14 09:45:23",
    accountName: "Zerodha",
    username: "trading_user",
    read: false,
  },
];

export const NotificationsPanel = () => {
  const [activeTab, setActiveTab] = useState("all");
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  const filteredNotifications = mockNotifications.filter((notification) => {
    if (activeTab === "all") return true;
    if (activeTab === "orders") return notification.type === "order";
    if (activeTab === "errors") return notification.type === "error";
    return true;
  });

  return (
    <div className="w-full md:w-[450px]">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold mb-2">Notifications Center</h3>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <>
              <Badge variant="destructive" className="rounded-sm px-1.5 py-0.5 text-xs">
                {unreadCount}
              </Badge>
              <span className="text-sm text-destructive font-medium">
                New notifications for you
              </span>
            </>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-4 pt-3 pb-2 border-b border-border">
          <TabsList className="w-full justify-start bg-transparent p-0 h-auto gap-2">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-success/10 data-[state=active]:text-success rounded-md px-4 py-1.5"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="data-[state=active]:bg-success/10 data-[state=active]:text-success rounded-md px-4 py-1.5"
            >
              Orders
            </TabsTrigger>
            <TabsTrigger
              value="errors"
              className="data-[state=active]:bg-success/10 data-[state=active]:text-success rounded-md px-4 py-1.5"
            >
              Errors
            </TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="h-[400px] md:h-[500px]">
          <TabsContent value={activeTab} className="mt-0 p-2">
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No notifications
              </div>
            ) : (
              <div className="space-y-2">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-3 rounded-lg bg-warning/5 border border-warning/20 hover:bg-warning/10 transition-colors"
                  >
                    <div className="flex gap-3">
                      <div className="flex flex-col gap-1 flex-shrink-0">
                        <Badge
                          variant="warning"
                          className="rounded h-5 w-9 flex items-center justify-center text-[10px] font-bold"
                        >
                          CE
                        </Badge>
                        {notification.accountType && (
                          <Badge
                            variant="default"
                            className="rounded h-5 w-9 flex items-center justify-center text-[10px] font-bold bg-primary"
                          >
                            {notification.accountType}
                          </Badge>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-sm leading-tight">
                            {notification.title}
                          </h4>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {notification.timestamp.split(" ")[1]}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {notification.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs font-normal">
                            {notification.accountName} ({notification.username})
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {notification.timestamp.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};
