import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    
    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    toast.success("Login successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Sign in to Quantbot
          </h1>
          <p className="text-muted-foreground">
            New user?{" "}
            <Link to="/sign-up" className="text-primary font-medium hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-muted-foreground">
              mobile
            </Label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">🇺🇸 +1 (US/Canada)</SelectItem>
                  <SelectItem value="+7">🇷🇺 +7 (Russia)</SelectItem>
                  <SelectItem value="+20">🇪🇬 +20 (Egypt)</SelectItem>
                  <SelectItem value="+27">🇿🇦 +27 (South Africa)</SelectItem>
                  <SelectItem value="+30">🇬🇷 +30 (Greece)</SelectItem>
                  <SelectItem value="+31">🇳🇱 +31 (Netherlands)</SelectItem>
                  <SelectItem value="+32">🇧🇪 +32 (Belgium)</SelectItem>
                  <SelectItem value="+33">🇫🇷 +33 (France)</SelectItem>
                  <SelectItem value="+34">🇪🇸 +34 (Spain)</SelectItem>
                  <SelectItem value="+39">🇮🇹 +39 (Italy)</SelectItem>
                  <SelectItem value="+40">🇷🇴 +40 (Romania)</SelectItem>
                  <SelectItem value="+41">🇨🇭 +41 (Switzerland)</SelectItem>
                  <SelectItem value="+43">🇦🇹 +43 (Austria)</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44 (UK)</SelectItem>
                  <SelectItem value="+45">🇩🇰 +45 (Denmark)</SelectItem>
                  <SelectItem value="+46">🇸🇪 +46 (Sweden)</SelectItem>
                  <SelectItem value="+47">🇳🇴 +47 (Norway)</SelectItem>
                  <SelectItem value="+48">🇵🇱 +48 (Poland)</SelectItem>
                  <SelectItem value="+49">🇩🇪 +49 (Germany)</SelectItem>
                  <SelectItem value="+51">🇵🇪 +51 (Peru)</SelectItem>
                  <SelectItem value="+52">🇲🇽 +52 (Mexico)</SelectItem>
                  <SelectItem value="+53">🇨🇺 +53 (Cuba)</SelectItem>
                  <SelectItem value="+54">🇦🇷 +54 (Argentina)</SelectItem>
                  <SelectItem value="+55">🇧🇷 +55 (Brazil)</SelectItem>
                  <SelectItem value="+56">🇨🇱 +56 (Chile)</SelectItem>
                  <SelectItem value="+57">🇨🇴 +57 (Colombia)</SelectItem>
                  <SelectItem value="+58">🇻🇪 +58 (Venezuela)</SelectItem>
                  <SelectItem value="+60">🇲🇾 +60 (Malaysia)</SelectItem>
                  <SelectItem value="+61">🇦🇺 +61 (Australia)</SelectItem>
                  <SelectItem value="+62">🇮🇩 +62 (Indonesia)</SelectItem>
                  <SelectItem value="+63">🇵🇭 +63 (Philippines)</SelectItem>
                  <SelectItem value="+64">🇳🇿 +64 (New Zealand)</SelectItem>
                  <SelectItem value="+65">🇸🇬 +65 (Singapore)</SelectItem>
                  <SelectItem value="+66">🇹🇭 +66 (Thailand)</SelectItem>
                  <SelectItem value="+81">🇯🇵 +81 (Japan)</SelectItem>
                  <SelectItem value="+82">🇰🇷 +82 (South Korea)</SelectItem>
                  <SelectItem value="+84">🇻🇳 +84 (Vietnam)</SelectItem>
                  <SelectItem value="+86">🇨🇳 +86 (China)</SelectItem>
                  <SelectItem value="+90">🇹🇷 +90 (Turkey)</SelectItem>
                  <SelectItem value="+91">🇮🇳 +91 (India)</SelectItem>
                  <SelectItem value="+92">🇵🇰 +92 (Pakistan)</SelectItem>
                  <SelectItem value="+93">🇦🇫 +93 (Afghanistan)</SelectItem>
                  <SelectItem value="+94">🇱🇰 +94 (Sri Lanka)</SelectItem>
                  <SelectItem value="+95">🇲🇲 +95 (Myanmar)</SelectItem>
                  <SelectItem value="+98">🇮🇷 +98 (Iran)</SelectItem>
                  <SelectItem value="+212">🇲🇦 +212 (Morocco)</SelectItem>
                  <SelectItem value="+213">🇩🇿 +213 (Algeria)</SelectItem>
                  <SelectItem value="+216">🇹🇳 +216 (Tunisia)</SelectItem>
                  <SelectItem value="+234">🇳🇬 +234 (Nigeria)</SelectItem>
                  <SelectItem value="+254">🇰🇪 +254 (Kenya)</SelectItem>
                  <SelectItem value="+351">🇵🇹 +351 (Portugal)</SelectItem>
                  <SelectItem value="+352">🇱🇺 +352 (Luxembourg)</SelectItem>
                  <SelectItem value="+353">🇮🇪 +353 (Ireland)</SelectItem>
                  <SelectItem value="+354">🇮🇸 +354 (Iceland)</SelectItem>
                  <SelectItem value="+355">🇦🇱 +355 (Albania)</SelectItem>
                  <SelectItem value="+356">🇲🇹 +356 (Malta)</SelectItem>
                  <SelectItem value="+357">🇨🇾 +357 (Cyprus)</SelectItem>
                  <SelectItem value="+358">🇫🇮 +358 (Finland)</SelectItem>
                  <SelectItem value="+380">🇺🇦 +380 (Ukraine)</SelectItem>
                  <SelectItem value="+381">🇷🇸 +381 (Serbia)</SelectItem>
                  <SelectItem value="+420">🇨🇿 +420 (Czech Republic)</SelectItem>
                  <SelectItem value="+852">🇭🇰 +852 (Hong Kong)</SelectItem>
                  <SelectItem value="+853">🇲🇴 +853 (Macau)</SelectItem>
                  <SelectItem value="+880">🇧🇩 +880 (Bangladesh)</SelectItem>
                  <SelectItem value="+886">🇹🇼 +886 (Taiwan)</SelectItem>
                  <SelectItem value="+960">🇲🇻 +960 (Maldives)</SelectItem>
                  <SelectItem value="+961">🇱🇧 +961 (Lebanon)</SelectItem>
                  <SelectItem value="+962">🇯🇴 +962 (Jordan)</SelectItem>
                  <SelectItem value="+963">🇸🇾 +963 (Syria)</SelectItem>
                  <SelectItem value="+964">🇮🇶 +964 (Iraq)</SelectItem>
                  <SelectItem value="+965">🇰🇼 +965 (Kuwait)</SelectItem>
                  <SelectItem value="+966">🇸🇦 +966 (Saudi Arabia)</SelectItem>
                  <SelectItem value="+967">🇾🇪 +967 (Yemen)</SelectItem>
                  <SelectItem value="+968">🇴🇲 +968 (Oman)</SelectItem>
                  <SelectItem value="+971">🇦🇪 +971 (UAE)</SelectItem>
                  <SelectItem value="+972">🇮🇱 +972 (Israel)</SelectItem>
                  <SelectItem value="+973">🇧🇭 +973 (Bahrain)</SelectItem>
                  <SelectItem value="+974">🇶🇦 +974 (Qatar)</SelectItem>
                  <SelectItem value="+977">🇳🇵 +977 (Nepal)</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                placeholder="XXXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                maxLength={10}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-muted-foreground">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="text-left">
            <Link to="/forgot-password" className="text-primary text-sm hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full h-12 text-base" size="lg">
            Login
          </Button>

          <Link to="/login-with-otp">
            <Button variant="secondary" className="w-full h-12 text-base" size="lg">
              Login with OTP
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
