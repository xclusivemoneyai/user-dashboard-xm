import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, RefreshCw, Trash2 } from "lucide-react";

interface AccountCardProps {
  accountNumber: string;
  username: string;
  balance: number;
  status: "connected" | "error";
  broker: string;
  icon: string;
}

export const AccountCard = ({
  accountNumber,
  username,
  balance,
  status,
  broker,
  icon,
}: AccountCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold ${
          broker === "finavsia" ? "bg-amber-500" : "bg-emerald-500"
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{accountNumber}</h3>
          <p className="text-sm text-muted-foreground">{username}</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Balance:</span>
          <span className="font-medium">₹{balance}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Status:</span>
          <Badge variant={status === "connected" ? "success" : "destructive"}>
            {status === "connected" ? "Connected" : "Error"}
          </Badge>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
