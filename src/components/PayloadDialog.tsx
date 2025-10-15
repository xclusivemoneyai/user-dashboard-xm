import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PayloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  webhookUrl: string;
  payload: string;
}

export const PayloadDialog = ({ open, onOpenChange, webhookUrl, payload }: PayloadDialogProps) => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">Strategy Webhook Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <label className="text-sm font-semibold mb-2 block">Webhook URL</label>
            <div className="flex gap-2">
              <code className="flex-1 bg-muted px-3 py-2 rounded-md text-xs md:text-sm font-mono break-all">
                {webhookUrl}
              </code>
              <Button
                variant="outline"
                size="icon"
                onClick={() => copyToClipboard(webhookUrl, "Webhook URL")}
                className="shrink-0"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">JSON Payload</label>
            <div className="relative">
              <pre className="bg-muted px-3 py-3 rounded-md text-xs md:text-sm font-mono overflow-x-auto max-h-[400px] overflow-y-auto">
                {payload}
              </pre>
              <Button
                variant="outline"
                size="icon"
                onClick={() => copyToClipboard(payload, "JSON Payload")}
                className="absolute top-2 right-2"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
