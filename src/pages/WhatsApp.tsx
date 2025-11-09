import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsApp = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="flex flex-col items-center text-center max-w-2xl px-4">
            {/* Community Invitation Card */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg max-w-md w-full">
              <p className="text-foreground text-base leading-relaxed mb-6">
                Join our exclusive WhatsApp community to get early access to beta features, share feedback, request new features, and be part of the inner circle of Multibagg AI 🚀
              </p>
              <Button 
                size="lg" 
                className="w-full bg-green-500 hover:bg-green-600 text-white gap-2"
                onClick={() => window.open('https://wa.me/918035736000', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                Join WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>
      </div>
    </DashboardLayout>
  );
};

export default WhatsApp;
