import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface BaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewAutomationModal = ({ open, onOpenChange }: BaseModalProps) => {
  const { toast } = useToast();
  const [automationName, setAutomationName] = useState("");

  const handleCreate = () => {
    toast({
      title: "Automation Created",
      description: `"${automationName}" has been created successfully.`,
    });
    onOpenChange(false);
    setAutomationName("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Automation</DialogTitle>
          <DialogDescription>
            Set up automated trading rules and workflows
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="automation-name">Automation Name</Label>
            <Input
              id="automation-name"
              placeholder="e.g., Auto Exit at 5% Profit"
              value={automationName}
              onChange={(e) => setAutomationName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="automation-type">Automation Type</Label>
            <Select>
              <SelectTrigger id="automation-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="profit-exit">Profit Exit</SelectItem>
                <SelectItem value="loss-exit">Loss Exit</SelectItem>
                <SelectItem value="time-based">Time Based</SelectItem>
                <SelectItem value="condition-based">Condition Based</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="trigger">Trigger Condition</Label>
            <Textarea
              id="trigger"
              placeholder="Describe when this automation should trigger..."
              rows={3}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="active">Active</Label>
            <Switch id="active" defaultChecked />
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={handleCreate} className="w-full sm:w-auto">Create Automation</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const SettingsModal = ({ open, onOpenChange }: BaseModalProps) => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage your account preferences and configurations
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Notifications</Label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Trade Alerts</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Price Alerts</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Email Notifications</span>
              <Switch />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="default-account">Default Trading Account</Label>
            <Select>
              <SelectTrigger id="default-account">
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zerodha">Zerodha - ZD1234</SelectItem>
                <SelectItem value="dhan">Dhan - DH5678</SelectItem>
                <SelectItem value="angel">Angel One - AO9012</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="risk-level">Risk Level</Label>
            <Select defaultValue="medium">
              <SelectTrigger id="risk-level">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={handleSave} className="w-full sm:w-auto">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const ProfileModal = ({ open, onOpenChange }: BaseModalProps) => {
  const { toast } = useToast();

  const handleUpdate = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
          <DialogDescription>
            Update your profile information and preferences
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="profile-name">Full Name</Label>
            <Input
              id="profile-name"
              placeholder="Your full name"
              defaultValue="User"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-email">Email</Label>
            <Input
              id="profile-email"
              type="email"
              placeholder="your@email.com"
              defaultValue="user@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-phone">Phone Number</Label>
            <Input
              id="profile-phone"
              type="tel"
              placeholder="+91 99999 99999"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-bio">Bio</Label>
            <Textarea
              id="profile-bio"
              placeholder="Tell us about yourself..."
              rows={3}
            />
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={handleUpdate} className="w-full sm:w-auto">Update Profile</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const AnalyseModal = ({ open, onOpenChange }: BaseModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Position Analysis</DialogTitle>
          <DialogDescription>
            Detailed analysis of your trading positions
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Win Rate</p>
              <p className="text-2xl font-bold text-green-600">75%</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Avg. Profit</p>
              <p className="text-2xl font-bold text-green-600">₹2,450</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Avg. Loss</p>
              <p className="text-2xl font-bold text-red-600">₹850</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Risk/Reward</p>
              <p className="text-2xl font-bold">1:2.88</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Most Profitable Stocks</Label>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                <span className="font-medium">RELIANCE</span>
                <span className="text-green-600 font-semibold">+₹12,450</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                <span className="font-medium">TCS</span>
                <span className="text-green-600 font-semibold">+₹8,300</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                <span className="font-medium">INFY</span>
                <span className="text-green-600 font-semibold">+₹5,670</span>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} className="w-full sm:w-auto">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const PnLExitModal = ({ open, onOpenChange }: BaseModalProps) => {
  const { toast } = useToast();

  const handleSet = () => {
    toast({
      title: "P&L Exit Set",
      description: "Your P&L exit conditions have been configured.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Set P&L Exit</DialogTitle>
          <DialogDescription>
            Configure automatic exit based on profit/loss thresholds
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="target-profit">Target Profit (%)</Label>
            <Input
              id="target-profit"
              type="number"
              placeholder="e.g., 5"
              defaultValue="5"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stop-loss">Stop Loss (%)</Label>
            <Input
              id="stop-loss"
              type="number"
              placeholder="e.g., 2"
              defaultValue="2"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apply-to">Apply To</Label>
            <Select defaultValue="all">
              <SelectTrigger id="apply-to">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Open Positions</SelectItem>
                <SelectItem value="selected">Selected Positions Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="trail">Trailing Stop Loss</Label>
            <Switch id="trail" />
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={handleSet} className="w-full sm:w-auto">Set Exit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const TopUpModal = ({ open, onOpenChange }: BaseModalProps) => {
  const { toast } = useToast();

  const handleTopUp = () => {
    toast({
      title: "Top-up Initiated",
      description: "Your account will be credited shortly.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Top Up Account</DialogTitle>
          <DialogDescription>
            Add funds to your trading account
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="account-select">Select Account</Label>
            <Select>
              <SelectTrigger id="account-select">
                <SelectValue placeholder="Choose account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zerodha">Zerodha - ZD1234</SelectItem>
                <SelectItem value="dhan">Dhan - DH5678</SelectItem>
                <SelectItem value="angel">Angel One - AO9012</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (₹)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              defaultValue="10000"
            />
          </div>
          <div className="space-y-2">
            <Label>Quick Select</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm">₹5,000</Button>
              <Button variant="outline" size="sm">₹10,000</Button>
              <Button variant="outline" size="sm">₹25,000</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="payment-method">Payment Method</Label>
            <Select defaultValue="upi">
              <SelectTrigger id="payment-method">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upi">UPI</SelectItem>
                <SelectItem value="netbanking">Net Banking</SelectItem>
                <SelectItem value="card">Card</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={handleTopUp} className="w-full sm:w-auto">Add Funds</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
