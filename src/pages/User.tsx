import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, KeyRound, Shield, Lock } from "lucide-react";
import { useState, useRef } from "react";
import { Camera } from "lucide-react";

const User = () => {
  const [formData, setFormData] = useState({
    firstName: "amit",
    lastName: "yadav",
    email: "wifibutters@gmail.com",
    phone: "8287502355",
    address1: "sdf",
    address2: "sdf",
    state: "Haryana",
    zipCode: "122101",
    gstn: ""
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [avatarUrl, setAvatarUrl] = useState<string>("/placeholder.svg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => fileInputRef.current?.click();
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdatePassword = () => {
    // Add password update logic here
    console.log("Updating password...");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">User</h1>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>Management</span>
            <span>•</span>
            <span className="text-foreground">User</span>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-4 sm:mb-6 w-full sm:w-auto">
            <TabsTrigger value="general" className="gap-1 sm:gap-2 flex-1 sm:flex-initial">
              <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">General</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-1 sm:gap-2 flex-1 sm:flex-initial">
              <KeyRound className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">Security</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
              <Card className="lg:col-span-1">
                <CardContent className="pt-6 flex flex-col items-center">
                  <button
                    type="button"
                    onClick={handleAvatarClick}
                    className="group relative mb-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Upload profile picture"
                  >
                    <Avatar className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64">
                      <AvatarImage src={avatarUrl} />
                      <AvatarFallback className="text-2xl sm:text-3xl md:text-4xl">AY</AvatarFallback>
                    </Avatar>
                    <span className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                      <Camera className="h-6 w-6 sm:h-8 sm:w-8 mb-1" />
                      <span className="text-xs sm:text-sm font-medium">
                        {avatarUrl && avatarUrl !== "/placeholder.svg" ? "Change photo" : "Upload photo"}
                      </span>
                    </span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                  <p className="text-base sm:text-lg font-medium text-muted-foreground">amityadaviitd</p>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        disabled
                        className="bg-muted/50 cursor-not-allowed"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address1">Address1</Label>
                      <Input
                        id="address1"
                        value={formData.address1}
                        onChange={(e) => handleInputChange("address1", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address2">Address2</Label>
                      <Input
                        id="address2"
                        value={formData.address2}
                        onChange={(e) => handleInputChange("address2", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger id="state">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Haryana">Haryana</SelectItem>
                          <SelectItem value="Delhi">Delhi</SelectItem>
                          <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="Karnataka">Karnataka</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip/Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="gstn">GSTN (Optional)</Label>
                      <Input
                        id="gstn"
                        value={formData.gstn}
                        onChange={(e) => handleInputChange("gstn", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button size="lg">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardContent className="pt-6 space-y-8">
                <div className="max-w-md space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="currentPassword" className="flex items-center gap-2 text-base font-semibold">
                      <Shield className="h-5 w-5 text-primary" />
                      Current Password
                    </Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => handlePasswordChange("currentPassword", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="newPassword" className="flex items-center gap-2 text-base font-semibold">
                      <Lock className="h-5 w-5 text-primary" />
                      New Password
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => handlePasswordChange("newPassword", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="confirmPassword" className="flex items-center gap-2 text-base font-semibold">
                      <Lock className="h-5 w-5 text-primary" />
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => handlePasswordChange("confirmPassword", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Password must be minimum 6+
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button 
                    size="lg" 
                    onClick={handleUpdatePassword}
                    className="px-8"
                  >
                    Update Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      </div>
    </DashboardLayout>
  );
};

export default User;
