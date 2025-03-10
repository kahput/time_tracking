import { ChartColumn, Clock, List } from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {

  const activeStyle = {
    color: "#f1f1f1",
    backgroundColor: "#314138"
  }

  return (
    <header className="w-auto bg-white border-r border-gray-200 flex flex-col items-center lg:items-start py-4 md:px-4">
      <NavLink
        to={"/"}
        style={({ isActive }) => { return isActive ? activeStyle : undefined }}
        className="flex w-[100%] items-center gap-4 text-slate-700 p-4 hover:bg-gray-100 rounded-md">
        <Clock size={32} />
        <span className="hidden lg:inline font-bold">Stopwatch</span>
      </NavLink>
      <NavLink
        to={"/entries"}
        style={({ isActive }) => { return isActive ? activeStyle : undefined }}
        className="flex w-[100%] items-center gap-4 text-slate-700 p-4 hover:bg-gray-100 rounded-md">
        <List size={32} />
        <span className="hidden lg:inline font-bold">Tracked list</span>
      </NavLink>
      <NavLink
        to={"/projects"}
        style={({ isActive }) => { return isActive ? activeStyle : undefined }}
        className="flex w-[100%] items-center gap-4 text-slate-700 p-4 hover:bg-gray-100 rounded-md">
        <ChartColumn size={32} />
        <span className="hidden lg:inline font-bold">Projects</span>
      </NavLink>
    </header>
  );
}

export default Sidebar;
