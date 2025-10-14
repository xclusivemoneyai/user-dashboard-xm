import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const tutorials = [
  {
    title: "How to add Zerodha accounts",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "How to add Fyers accounts",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "How to add Alice Blue accounts",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "How to add Finvasia accounts",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "How to add DHAN accounts",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "How to add Flattrade accounts",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "How to add Motilal Oswal accounts",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "How to add Kotak NEO accounts",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "Configure Master and Child accounts",
    thumbnail: "/placeholder.svg"
  }
];

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Tutorials</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Support</span>
            <span>•</span>
            <span className="text-foreground">Tutorials</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group">
              <div className="relative aspect-video bg-gradient-to-br from-cyan-400 via-teal-300 to-yellow-300">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/80 rounded-full p-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-3 bg-white rounded animate-pulse" />
                      <div className="w-1 h-3 bg-white rounded animate-pulse delay-75" />
                      <div className="w-1 h-3 bg-white rounded animate-pulse delay-150" />
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-medium text-sm">{tutorial.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tutorials;
