import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CountryCodeSelect } from "@/components/CountryCodeSelect";
import { toast } from "sonner";

export default function SignUp() {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("OTP sent to your phone number");
    navigate("/otp-verification", { state: { phone: countryCode + phone, email } });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get started absolutely free
          </h1>
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-muted-foreground">
              email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-muted-foreground">
              mobile
            </Label>
            <div className="flex gap-2">
              <CountryCodeSelect value={countryCode} onValueChange={setCountryCode} />
              <Input
                id="phone"
                type="tel"
                placeholder="XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                maxLength={10}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base" size="lg">
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
}
