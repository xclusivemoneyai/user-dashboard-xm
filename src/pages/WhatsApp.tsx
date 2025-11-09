import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const WhatsApp = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="flex flex-col items-center text-center max-w-2xl px-4">
            <div className="mb-8 bg-green-500 rounded-full p-16 shadow-lg">
              <MessageCircle className="h-32 w-32 text-white" strokeWidth={1.5} />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-6">
              Text on Whatsapp (+91) 8035736000
            </h1>

            <Button 
              size="lg" 
              className="mb-8 px-8 bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://wa.me/918035736000', '_blank')}
            >
              Whatsapp Now
            </Button>

            <div className="flex items-center gap-6 mb-12">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Facebook className="h-8 w-8" fill="currentColor" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <Instagram className="h-8 w-8" fill="currentColor" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                <Youtube className="h-8 w-8" fill="currentColor" />
              </a>
            </div>

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
