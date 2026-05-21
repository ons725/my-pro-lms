import { Home, Compass, PlayCircle, Settings, BarChart } from "lucide-react";

export function Sidebar() {
  const routes = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Compass, label: "Browse", href: "/browse" },
    { icon: PlayCircle, label: "My Courses", href: "/my-courses" },
    { icon: BarChart, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm w-64 fixed left-0 top-0 pt-20">
      <div className="flex flex-col w-full">
        {routes.map((route) => (
          <button
            key={route.href}
            className="flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 py-4"
          >
            <route.icon size={22} className="text-slate-500" />
            {route.label}
          </button>
        ))}
      </div>
    </div>
  );
}