import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function RootLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-black">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default RootLayout;
