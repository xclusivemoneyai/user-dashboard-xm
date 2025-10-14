import { Copy, ExternalLink, FileText, Pencil, Trash2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface StrategyCardProps {
  title: string;
  type: string;
  status: "active" | "inactive";
  description: string;
  accounts: string;
  webhookUrl: string;
}

export const StrategyCard = ({
  title,
  type,
  status,
  description,
  accounts,
  webhookUrl,
}: StrategyCardProps) => {
  return (
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
              <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
                <Copy className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
                <Play className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2 pt-4 border-t border-border">
        <div className="flex w-full gap-2">
          <Button variant="warning" size="sm" className="flex-1">
            Deactivate
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            Clone
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Payload
          </Button>
        </div>
        <div className="flex w-full gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <FileText className="h-4 w-4 mr-1" />
            Logs
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button variant="destructive" size="sm" className="flex-1">
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
