import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Call = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="flex flex-col items-center text-center max-w-2xl">
            <div className="mb-8">
              <img 
                src="/placeholder.svg" 
                alt="Contact Us Illustration" 
                className="w-64 h-64 mx-auto"
              />
            </div>

            <h1 className="text-4xl font-bold text-muted-foreground mb-8">
              Call Now 08035 736000
            </h1>

            <Button 
              size="lg" 
              className="mb-8 px-8"
              onClick={() => window.location.href = 'tel:08035736000'}
            >
              Call Now
            </Button>

            <div className="flex items-center gap-6">
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Call;
