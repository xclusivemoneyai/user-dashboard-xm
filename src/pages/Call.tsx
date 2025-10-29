import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Call = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="flex flex-col items-center text-center max-w-2xl px-4">
            <div className="mb-6 sm:mb-8">
              <img 
                src="/placeholder.svg" 
                alt="Contact Us Illustration" 
                className="w-48 h-48 sm:w-64 sm:h-64 mx-auto"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground mb-6 sm:mb-8">
              Call Now 08035 736000
            </h1>

            <Button 
              size="lg" 
              className="mb-6 sm:mb-8 px-6 sm:px-8 w-full sm:w-auto"
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
    </DashboardLayout>
  );
};

export default Call;
