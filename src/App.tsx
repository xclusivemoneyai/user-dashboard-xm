import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AccountConfig from "./pages/AccountConfig";
import CreateAlerts from "./pages/CreateAlerts";
import AlertToTrade from "./pages/AlertToTrade";
import User from "./pages/User";
import Invoices from "./pages/Invoices";
import Pricing from "./pages/Pricing";
import Call from "./pages/Call";
import WhatsApp from "./pages/WhatsApp";
import Tutorials from "./pages/Tutorials";
import Groups from "./pages/Groups";
import CopyTrading from "./pages/CopyTrading";
import Marketplace from "./pages/Marketplace";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/account-config" element={<AccountConfig />} />
          <Route path="/copy-trading" element={<CopyTrading />} />
          <Route path="/alert-to-trade" element={<AlertToTrade />} />
          <Route path="/create-alerts" element={<CreateAlerts />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/user" element={<User />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/call" element={<Call />} />
          <Route path="/whatsapp" element={<WhatsApp />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/subscription" element={<Subscription />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
