import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function AccountSuccess() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center">
            <CheckCircle2 className="w-16 h-16 text-success" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Account Created!
          </h1>
          <p className="text-muted-foreground text-lg">
            Your account has been successfully created.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <Link to="/referral">
            <Button className="w-full h-12 text-base" size="lg">
              Continue to Referral
            </Button>
          </Link>
          
          <Link to="/sign-in">
            <Button variant="outline" className="w-full h-12 text-base" size="lg">
              Go to Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
