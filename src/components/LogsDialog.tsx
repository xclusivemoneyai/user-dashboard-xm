import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface LogsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  strategyTitle: string;
}

export const LogsDialog = ({ open, onOpenChange, strategyTitle }: LogsDialogProps) => {
  // Sample logs data
  const logs = [
    {
      id: 1,
      timestamp: "2024-03-15 10:30:45",
      type: "success",
      message: "Strategy activated successfully",
    },
    {
      id: 2,
      timestamp: "2024-03-15 10:25:12",
      type: "info",
      message: "Webhook URL updated",
    },
    {
      id: 3,
      timestamp: "2024-03-15 10:20:33",
      type: "success",
      message: "Order executed: BUY 100 shares",
    },
    {
      id: 4,
      timestamp: "2024-03-15 10:15:21",
      type: "warning",
      message: "Connection test timeout, retrying...",
    },
    {
      id: 5,
      timestamp: "2024-03-15 10:10:05",
      type: "error",
      message: "Failed to execute order: Insufficient balance",
    },
    {
      id: 6,
      timestamp: "2024-03-15 10:05:18",
      type: "info",
      message: "Strategy configuration updated",
    },
  ];

  const getLogBadgeVariant = (type: string) => {
    switch (type) {
      case "success":
        return "success";
      case "error":
        return "destructive";
      case "warning":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">Strategy Logs</DialogTitle>
          <p className="text-sm text-muted-foreground">{strategyTitle}</p>
        </DialogHeader>
        
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-3">
            {logs.map((log) => (
              <div
                key={log.id}
                className="border border-border rounded-lg p-4 space-y-2 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={getLogBadgeVariant(log.type) as any}>
                    {log.type.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                </div>
                <p className="text-sm">{log.message}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
