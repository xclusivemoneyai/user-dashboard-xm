import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Plus, List, UserPlus, UserMinus, Edit2, Trash2, Send, Loader2 } from "lucide-react";
import { useState } from "react";

const Groups = () => {
  const [newGroupName, setNewGroupName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with real data
  const groups = [
    { id: "1", name: "Day Trading Group", members: 5 },
    { id: "2", name: "Long Term Holdings", members: 3 }
  ];

  const handleCreateGroup = () => {
    if (!newGroupName.trim()) return;
    console.log("Creating group:", newGroupName);
    setNewGroupName("");
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 mt-16 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Groups Management</h1>
            <p className="text-muted-foreground">
              Organize and manage your account groups for efficient trading operations.
            </p>
          </div>

          {/* Create New Group */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create New Group
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter a unique name for the new group"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => e.key === "Enter" && handleCreateGroup()}
                />
                <Button onClick={handleCreateGroup} className="sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Create
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current Account Groups */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <List className="h-5 w-5" />
                Current Account Groups
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : groups.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No groups created yet. Create your first group above.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Group Name</TableHead>
                        <TableHead className="text-center">Members</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {groups.map((group) => (
                        <TableRow key={group.id}>
                          <TableCell className="font-medium">{group.name}</TableCell>
                          <TableCell className="text-center">{group.members}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Add/Remove Account - Mobile Stacked, Desktop Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Add Account to Group */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <UserPlus className="h-5 w-5" />
                  Add Account to Group
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Group</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a group" />
                    </SelectTrigger>
                    <SelectContent>
                      {groups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Select Account</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acc1">Account 1</SelectItem>
                      <SelectItem value="acc2">Account 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add to Group
                </Button>
              </CardContent>
            </Card>

            {/* Remove Account from Group */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <UserMinus className="h-5 w-5" />
                  Remove Account from Group
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Group</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a group" />
                    </SelectTrigger>
                    <SelectContent>
                      {groups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Select Member to Remove</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a member" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mem1">Member 1</SelectItem>
                      <SelectItem value="mem2">Member 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-warning hover:bg-warning/90 text-warning-foreground">
                  <UserMinus className="h-4 w-4 mr-2" />
                  Remove from Group
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Rename/Delete Group - Mobile Stacked, Desktop Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Rename Group */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Edit2 className="h-5 w-5" />
                  Rename Group
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Group</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a group" />
                    </SelectTrigger>
                    <SelectContent>
                      {groups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">New Name</label>
                  <Input placeholder="Enter the new name" />
                </div>

                <Button className="w-full" variant="secondary">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Rename
                </Button>
              </CardContent>
            </Card>

            {/* Delete Group */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trash2 className="h-5 w-5" />
                  Delete Group
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Group</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a group" />
                    </SelectTrigger>
                    <SelectContent>
                      {groups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Alert variant="destructive">
                  <AlertDescription>
                    This action is permanent and cannot be undone.
                  </AlertDescription>
                </Alert>

                <Button variant="destructive" className="w-full">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Group
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Place Group Order */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Place Group Order
              </CardTitle>
              <CardDescription>
                Execute orders for an entire group at once
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Group</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {groups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Symbol</label>
                  <Input placeholder="e.g., NIFTY" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Action</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="BUY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">BUY</SelectItem>
                      <SelectItem value="sell">SELL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Quantity</label>
                  <Input placeholder="Qty" type="number" />
                </div>

                <div className="flex items-end">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Order
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Groups;
