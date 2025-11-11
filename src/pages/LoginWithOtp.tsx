import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CountryCodeSelect } from "@/components/CountryCodeSelect";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";
import { Phone } from "lucide-react";

export default function LoginWithOtp() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    toast.success("OTP sent to your phone number");
    setStep("otp");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      toast.error("Please enter the 6-digit OTP");
      return;
    }

    toast.success("Login successful!");
    navigate("/");
  };

  if (step === "phone") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Please enter your mobile number!
            </h1>
            <p className="text-muted-foreground">
              We will send a 6-digit OTP to your number to verify your number.
            </p>
          </div>

          <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-muted-foreground">
                  mobile
                </Label>
                <div className="flex gap-2">
                  <CountryCodeSelect value={countryCode} onValueChange={setCountryCode} />
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

            <Button type="submit" className="w-full h-12 text-base" size="lg">
              Send OTP
            </Button>

            <button
              type="button"
              onClick={() => navigate("/sign-in")}
              className="w-full text-center text-foreground hover:text-primary transition-colors"
            >
              ‹ Return to sign in
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center">
              <Phone className="w-10 h-10 text-success" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Verify OTP
          </h1>
          <p className="text-muted-foreground">
            Enter the 6-digit code sent to {countryCode}{phone}
          </p>
        </div>

        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground">6-digit OTP</Label>
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base" size="lg">
            Verify & Login
          </Button>

          <div className="flex justify-between text-sm">
            <button
              type="button"
              onClick={() => setStep("phone")}
              className="text-foreground hover:text-primary transition-colors"
            >
              ‹ Change number
            </button>
            <button
              type="button"
              onClick={handleSendOtp}
              className="text-primary hover:underline"
            >
              Resend OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
