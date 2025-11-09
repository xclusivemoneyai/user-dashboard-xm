import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const Discord = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="flex flex-col items-center text-center max-w-2xl">
            <div className="mb-8 bg-[#5865F2] rounded-full p-16 shadow-lg">
              <SiDiscord className="h-32 w-32 text-white" />
            </div>

            <h1 className="text-4xl font-bold text-muted-foreground mb-8">
              Join Our Discord Community
            </h1>

            <Button 
              size="lg" 
              className="mb-8 px-8"
              onClick={() => window.open('https://discord.gg/AqsE6M7P', '_blank')}
            >
              Join Discord
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

export default Discord;
