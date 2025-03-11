import { TimerReset } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-auto flex flex-col gap-4 text-gray-700 bg-gray-50 z-10 border-r border-gray-200 shadow-md shadow-gray-200">
        <Link to={"/"} className="flex items-center justify-center py-2 mb-4 px-4">
          <TimerReset color="#1e2939" size={48} />
          <h1 className="hidden md:inline-block text-3xl font-extrabold">Traculate</h1>
        </Link>
      </div>
      {/* RIGHT */}
      <div className="grow bg-gray-100">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout;
