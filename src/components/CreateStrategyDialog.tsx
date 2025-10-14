import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateStrategyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateStrategyDialog = ({ open, onOpenChange }: CreateStrategyDialogProps) => {
  const [strategyName, setStrategyName] = useState("");
  const [selectedAccount, setSelectedAccount] = useState(false);
  const [exchange, setExchange] = useState("NSE");
  const [symbolToken, setSymbolToken] = useState("Auto");
  const [tradingSymbolType, setTradingSymbolType] = useState("single");
  const [singleSymbol, setSingleSymbol] = useState("");
  const [alertType, setAlertType] = useState("strategy");
  const [action, setAction] = useState("{{strategy.order.action}}");
  const [orderType, setOrderType] = useState("Limit");
  const [orderValidity, setOrderValidity] = useState("Day");
  const [productType, setProductType] = useState("Intraday / MIS");
  const [orderQuantity, setOrderQuantity] = useState("");
  const [orderValue, setOrderValue] = useState("");

  const webhookPayload = {
    orderValidity: orderValidity.toLowerCase(),
    productType: productType.split(" / ")[0].toLowerCase(),
    masterAccounts: [],
    action: action,
    tradingSymbols: []
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="bg-primary text-primary-foreground p-6 -m-6 mb-6 rounded-t-lg">
          <DialogTitle className="text-2xl font-bold">Create New Strategy</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 px-2">
          {/* Strategy Name */}
          <div className="space-y-2">
            <Label htmlFor="strategyName" className="text-base font-semibold">
              Strategy Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="strategyName"
              placeholder="e.g., Daily Momentum Scalper"
              value={strategyName}
              onChange={(e) => setStrategyName(e.target.value)}
              className="text-base"
            />
          </div>

          {/* Master Accounts */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Master Accounts</Label>
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Checkbox
                id="account1"
                checked={selectedAccount}
                onCheckedChange={(checked) => setSelectedAccount(checked as boolean)}
              />
              <label
                htmlFor="account1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                zerodha - Amit_Zerodha (CX9849)
              </label>
            </div>
            <p className="text-sm text-muted-foreground">
              Select connected master accounts for this strategy.
            </p>
          </div>

          {/* Exchange and Symbol Token */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="exchange" className="text-base font-semibold">
                Exchange <span className="text-destructive">*</span>
              </Label>
              <Select value={exchange} onValueChange={setExchange}>
                <SelectTrigger id="exchange" className="text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="NSE">NSE</SelectItem>
                  <SelectItem value="BSE">BSE</SelectItem>
                  <SelectItem value="NFO">NFO</SelectItem>
                  <SelectItem value="MCX">MCX</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="symbolToken" className="text-base font-semibold">
                Symbol Token
              </Label>
              <Input
                id="symbolToken"
                value={symbolToken}
                onChange={(e) => setSymbolToken(e.target.value)}
                className="text-base"
              />
            </div>
          </div>

          {/* Trading Symbols */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Trading Symbols <span className="text-destructive">*</span>
            </Label>
            <RadioGroup value={tradingSymbolType} onValueChange={setTradingSymbolType}>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single" />
                  <Label htmlFor="single" className="font-normal cursor-pointer">
                    Single Symbol
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="watchlist" id="watchlist" />
                  <Label htmlFor="watchlist" className="font-normal cursor-pointer">
                    Watchlist (TradingView Alert)
                  </Label>
                </div>
              </div>
            </RadioGroup>
            <Textarea
              placeholder="Enter single symbol (e.g., RELIANCE)"
              value={singleSymbol}
              onChange={(e) => setSingleSymbol(e.target.value)}
              className="min-h-[80px] resize-none text-base"
            />
            <p className="text-sm text-muted-foreground">Enter the trading symbol.</p>
          </div>

          {/* Alert Type */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Alert Type</Label>
            <RadioGroup value={alertType} onValueChange={setAlertType}>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="strategy" id="strategy" />
                  <Label htmlFor="strategy" className="font-normal cursor-pointer">
                    Strategy alert
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="manual" id="manual" />
                  <Label htmlFor="manual" className="font-normal cursor-pointer">
                    Manual alert
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Action and Order Type */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="action" className="text-base font-semibold">
                Action
              </Label>
              <Input
                id="action"
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="text-base font-mono"
              />
              <p className="text-sm text-muted-foreground">
                TradingView will replace this with BUY or SELL.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="orderType" className="text-base font-semibold">
                Order Type <span className="text-destructive">*</span>
              </Label>
              <Select value={orderType} onValueChange={setOrderType}>
                <SelectTrigger id="orderType" className="text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="Limit">Limit</SelectItem>
                  <SelectItem value="Market">Market</SelectItem>
                  <SelectItem value="SL">Stop Loss</SelectItem>
                  <SelectItem value="SL-M">Stop Loss Market</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Order Validity and Type of Product */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="orderValidity" className="text-base font-semibold">
                Order Validity
              </Label>
              <Select value={orderValidity} onValueChange={setOrderValidity}>
                <SelectTrigger id="orderValidity" className="text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="Day">Day</SelectItem>
                  <SelectItem value="IOC">IOC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="productType" className="text-base font-semibold">
                Type of Product <span className="text-destructive">*</span>
              </Label>
              <Select value={productType} onValueChange={setProductType}>
                <SelectTrigger id="productType" className="text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="Intraday / MIS">Intraday / MIS</SelectItem>
                  <SelectItem value="CNC / Longterm">CNC / Longterm</SelectItem>
                  <SelectItem value="MTF or Longterm">MTF or Longterm</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Intraday/MIS are equivalent, as are CNC/longterm. "MTF or Longterm" attempts MTF first and falls back to CNC if unavailable.
              </p>
            </div>
          </div>

          {/* Order Quantity and Order Value */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="orderQuantity" className="text-base font-semibold">
                Order Quantity
              </Label>
              <Input
                id="orderQuantity"
                type="number"
                placeholder="e.g., 100"
                value={orderQuantity}
                onChange={(e) => setOrderQuantity(e.target.value)}
                className="text-base"
              />
              <p className="text-sm text-muted-foreground">
                Leave empty if specifying Order Value.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="orderValue" className="text-base font-semibold">
                Order Value
              </Label>
              <Input
                id="orderValue"
                type="number"
                placeholder="e.g., 10000.00"
                value={orderValue}
                onChange={(e) => setOrderValue(e.target.value)}
                className="text-base"
              />
              <p className="text-sm text-muted-foreground">
                Auto-calculates quantity from live price.
              </p>
            </div>
          </div>

          {/* Webhook Payload Preview */}
          <div className="space-y-2">
            <Label className="text-base font-semibold">Webhook Payload Preview</Label>
            <div className="relative">
              <Textarea
                value={JSON.stringify(webhookPayload, null, 2)}
                readOnly
                className="min-h-[180px] resize-none font-mono text-sm bg-muted"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => navigator.clipboard.writeText(JSON.stringify(webhookPayload, null, 2))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-4 pb-2">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onOpenChange(false)}
              className="px-8"
            >
              Cancel
            </Button>
            <Button size="lg" className="px-8">
              Save Strategy
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
