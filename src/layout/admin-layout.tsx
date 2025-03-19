import { AppSidebar } from "@/components/shared/side-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="container p-24">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
