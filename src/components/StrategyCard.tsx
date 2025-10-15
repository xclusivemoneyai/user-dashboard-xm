import { useState } from "react";
import { Copy, FileText, Pencil, Trash2, Play, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PayloadDialog } from "@/components/PayloadDialog";
import { LogsDialog } from "@/components/LogsDialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

interface StrategyCardProps {
  title: string;
  type: string;
  status: "active" | "inactive";
  description: string;
  accounts: string;
  webhookUrl: string;
  onEdit?: () => void;
}

export const StrategyCard = ({
  title,
  type,
  status: initialStatus,
  description,
  accounts,
  webhookUrl,
  onEdit,
}: StrategyCardProps) => {
  const [status, setStatus] = useState<"active" | "inactive">(initialStatus);
  const [isConnected, setIsConnected] = useState(false);
  const [showPayload, setShowPayload] = useState(false);
  const [showLogs, setShowLogs] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const samplePayload = `{
  "exchange": "NSE",
  "transactionType": "BUY",
  "orderType": "limit",
  "orderValidity": "day",
  "productType": "intraday",
  "masterAccounts": [
    "${accounts}"
  ]
}`;

  const handleTestConnection = () => {
    // Simulate connection test
    setTimeout(() => {
      setIsConnected(true);
      toast({
        title: "Success!",
        description: "Connection tested successfully",
      });
    }, 500);
  };

  const handleToggleStatus = () => {
    const newStatus = status === "active" ? "inactive" : "active";
    setStatus(newStatus);
    toast({
      title: "Status Updated",
      description: `Strategy ${newStatus === "active" ? "activated" : "deactivated"} successfully`,
    });
  };

  const handleClone = () => {
    toast({
      title: "Strategy Cloned",
      description: "Strategy has been cloned successfully",
    });
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleLogs = () => {
    setShowLogs(true);
  };

  const handleDelete = () => {
    setShowDeleteDialog(false);
    toast({
      title: "Strategy Deleted",
      description: "Strategy has been deleted successfully",
      variant: "destructive",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(webhookUrl);
    toast({
      title: "Copied!",
      description: "Webhook URL copied to clipboard",
    });
  };

  const handleRefresh = () => {
    toast({
      title: "Refreshing",
      description: "Strategy details refreshed",
    });
  };

  return (
    <>
    <Card className="hover:shadow-lg transition-all duration-300 border-border">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 border-2 border-muted">
            <AvatarFallback className="bg-muted text-foreground font-semibold">
              {title.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-base truncate">{title}</h3>
              <Badge variant={status === "active" ? "success" : "secondary"} className="shrink-0">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{type}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pb-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Accounts:</p>
            <p className="text-sm">{accounts}</p>
          </div>
          
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Webhook URL</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 truncate rounded bg-muted px-2 py-1 text-xs font-mono">
                {webhookUrl}
              </code>
              <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={handleCopy}>
                <Copy className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={handleRefresh}>
                <RefreshCw className="h-3.5 w-3.5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 shrink-0"
                onClick={handleTestConnection}
              >
                <Play className={`h-3.5 w-3.5 ${isConnected ? 'text-success' : 'text-destructive'}`} />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2 pt-4 border-t border-border">
        <div className="flex w-full gap-2">
          <Button 
            variant={status === "active" ? "warning" : "success"} 
            size="sm" 
            className="flex-1"
            onClick={handleToggleStatus}
          >
            {status === "active" ? "Deactivate" : "Activate"}
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-muted" onClick={handleClone}>
            Clone
          </Button>
          <Button variant="default" size="sm" className="flex-1" onClick={() => setShowPayload(true)}>
            Payload
          </Button>
        </div>
        <div className="flex w-full gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-muted" onClick={handleLogs}>
            <FileText className="h-4 w-4 mr-1" />
            Logs
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-muted" onClick={handleEdit}>
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button variant="destructive" size="sm" className="flex-1" onClick={() => setShowDeleteDialog(true)}>
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>

    <PayloadDialog
      open={showPayload}
      onOpenChange={setShowPayload}
      webhookUrl={webhookUrl}
      payload={samplePayload}
    />

    <LogsDialog
      open={showLogs}
      onOpenChange={setShowLogs}
      strategyTitle={title}
    />

    <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the strategy "{title}". This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
};
