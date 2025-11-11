import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Gift } from "lucide-react";

export default function ReferralCode() {
  const navigate = useNavigate();
  const [referralCode, setReferralCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (referralCode.trim()) {
      toast.success("Referral code applied successfully!");
    }
    
    navigate("/");
  };

  const handleSkip = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <Gift className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Have a Referral Code?
          </h1>
          <p className="text-muted-foreground">
            Enter your referral code to get exclusive benefits
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="referral" className="text-muted-foreground">
              Referral Code (Optional)
            </Label>
            <Input
              id="referral"
              type="text"
              placeholder="Enter referral code"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
              className="uppercase"
            />
          </div>

          <Button type="submit" className="w-full h-12 text-base" size="lg">
            Apply & Continue
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={handleSkip}
            className="w-full h-12 text-base"
            size="lg"
          >
            Skip for now
          </Button>
        </form>
      </div>
    </div>
  );
}
