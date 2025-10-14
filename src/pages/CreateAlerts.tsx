import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Plus } from "lucide-react";

const CreateAlerts = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-8">
          {/* Page Header */}
          <div className="bg-card rounded-xl p-8 mb-8 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Bell className="h-7 w-7" />
                  <h1 className="text-3xl font-bold">Create Alerts</h1>
                </div>
                <p className="text-muted-foreground">
                  Set up automated trading alerts based on market conditions and technical indicators.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Alert Configuration Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border border-border">
                <h2 className="text-xl font-semibold mb-6">Alert Configuration</h2>
                
                <div className="space-y-6">
                  {/* Alert Name */}
                  <div className="space-y-2">
                    <Label htmlFor="alertName">Alert Name</Label>
                    <Input 
                      id="alertName" 
                      placeholder="e.g., NIFTY 50 Breakout Alert"
                      className="w-full"
                    />
                  </div>

                  {/* Symbol */}
                  <div className="space-y-2">
                    <Label htmlFor="symbol">Symbol / Instrument</Label>
                    <Input 
                      id="symbol" 
                      placeholder="e.g., NIFTY, BANKNIFTY, RELIANCE"
                      className="w-full"
                    />
                  </div>

                  {/* Alert Type */}
                  <div className="space-y-2">
                    <Label htmlFor="alertType">Alert Type</Label>
                    <Select>
                      <SelectTrigger id="alertType">
                        <SelectValue placeholder="Select alert type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="price">Price Alert</SelectItem>
                        <SelectItem value="technical">Technical Indicator</SelectItem>
                        <SelectItem value="volume">Volume Alert</SelectItem>
                        <SelectItem value="pattern">Pattern Recognition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Condition */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="condition">Condition</Label>
                      <Select>
                        <SelectTrigger id="condition">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="above">Above</SelectItem>
                          <SelectItem value="below">Below</SelectItem>
                          <SelectItem value="crosses">Crosses</SelectItem>
                          <SelectItem value="equals">Equals</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="value">Value</Label>
                      <Input 
                        id="value" 
                        type="number"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeframe">Timeframe</Label>
                      <Select>
                        <SelectTrigger id="timeframe">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1m">1 Minute</SelectItem>
                          <SelectItem value="5m">5 Minutes</SelectItem>
                          <SelectItem value="15m">15 Minutes</SelectItem>
                          <SelectItem value="1h">1 Hour</SelectItem>
                          <SelectItem value="1d">1 Day</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Accounts */}
                  <div className="space-y-2">
                    <Label htmlFor="accounts">Link to Accounts</Label>
                    <Select>
                      <SelectTrigger id="accounts">
                        <SelectValue placeholder="Select trading account" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1106901510">1106901510 - Ankit_Dhan</SelectItem>
                        <SelectItem value="1100880151">1100880151 - akku_dhan</SelectItem>
                        <SelectItem value="FA96623">FA96623 - amit-finavsia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Action */}
                  <div className="space-y-2">
                    <Label htmlFor="action">Action on Trigger</Label>
                    <Select>
                      <SelectTrigger id="action">
                        <SelectValue placeholder="Select action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buy">Place Buy Order</SelectItem>
                        <SelectItem value="sell">Place Sell Order</SelectItem>
                        <SelectItem value="notify">Notification Only</SelectItem>
                        <SelectItem value="webhook">Trigger Webhook</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea 
                      id="description"
                      placeholder="Add notes about this alert..."
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Alert
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Save as Draft
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Active Alerts Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 border border-border sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Active Alerts</h3>
                
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">NIFTY Above 19500</h4>
                      <span className="text-xs text-success">Active</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Price Alert • 5m</p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">BANKNIFTY RSI</h4>
                      <span className="text-xs text-success">Active</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Technical • 15m</p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">RELIANCE Volume Spike</h4>
                      <span className="text-xs text-warning">Paused</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Volume Alert • 1h</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View All Alerts
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateAlerts;
