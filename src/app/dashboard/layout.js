import { menuItems } from "@/lib/sidebar-links";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <div className="p-4">{children}</div>
        </div>
        <Sidebar items={menuItems} />
      </div>
    </>
  );
}
