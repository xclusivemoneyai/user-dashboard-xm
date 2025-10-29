import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <DashboardHeader 
        isSidebarOpen={isSidebarOpen} 
        onSidebarToggle={toggleSidebar} 
      />
      <DashboardSidebar 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar} 
      />
      {children}
    </>
  );
};
