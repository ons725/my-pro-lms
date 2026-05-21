'use client';

import { useState } from "react";
import { 
  Home, 
  Compass, 
  GraduationCap, 
  BarChart, 
  Settings, 
  Award,Map, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  Rocket,
  Trophy
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const routes = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Compass, label: "Explore", href: "/explore" },
    { icon: GraduationCap, label: "My Learning", href: "/learning" },
    { icon: BarChart, label: "Analytics", href: "/analytics" },
    { icon: Award, label: "Certificates", href: "/certificates" },
    { icon: Map, label: "Roadmaps", href: "/roadmaps" }, // NEW PAGE
    { icon: Trophy, label: "Leaderboard", href: "/leaderboard" }, // NEW


  ];

  return (
    <div 
      className={`relative h-full border-r border-slate-100 flex flex-col bg-white transition-all duration-500 ease-in-out z-[60] ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* 1. THE FLOATING TOGGLE */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-12 bg-white border border-slate-200 rounded-full p-1.5 hover:bg-indigo-600 hover:text-white transition-all shadow-lg z-50 group"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* 2. LOGO SECTION WITH GLOW */}
      <div className={`p-8 mb-4 flex items-center transition-all ${isCollapsed ? "justify-center px-0" : "gap-3"}`}>
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 animate-pulse" />
          <div className="relative w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="text-white" size={20} />
          </div>
        </div>
        {!isCollapsed && (
          <span className="text-xl font-black text-slate-900 tracking-tighter">
            ProLMS
          </span>
        )}
      </div>
      
      {/* 3. NAVIGATION WITH "LIVE" CHALLENGE */}
      <nav className="flex flex-col w-full px-4 gap-2">
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center rounded-2xl transition-all font-bold text-sm group ${
                isCollapsed ? "justify-center p-3.5" : "gap-x-4 px-4 py-3.5"
              } ${
                isActive 
                ? "bg-indigo-50 text-indigo-600 shadow-sm" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <route.icon 
                size={22} 
                className={`${isActive ? "text-indigo-600" : "text-slate-400"} group-hover:scale-110 transition-transform`} 
              />
              
              {!isCollapsed && <span>{route.label}</span>}

              {/* "LIVE" PULSE FOR ANALYTICS (EXAMPLE) */}
              {!isCollapsed && route.label === "Analytics" && (
                <span className="ml-auto flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* 4. CREATIVE BOTTOM WIDGETS */}
      <div className="mt-auto p-4 space-y-4">
        
        {/* XP LEVEL WIDGET */}
        {!isCollapsed ? (
          <div className="bg-slate-50 rounded-[2rem] p-4 border border-slate-100">
            <div className="flex justify-between items-center mb-2">
               <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-amber-100 rounded-lg text-amber-600">
                    <Trophy size={14} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Level 12</span>
               </div>
               <span className="text-[10px] font-bold text-indigo-600">80%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
               <div className="h-full bg-indigo-600 w-[80%] rounded-full shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
          </div>
        )}

        {/* PRO UPGRADE CARD (HOLOGRAPHIC) */}
        {!isCollapsed && (
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[2rem] blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-slate-900 rounded-[2rem] p-5 overflow-hidden">
               <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2 text-indigo-400">
                    <Rocket size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Go Unlimited</span>
                  </div>
                  <p className="text-white text-xs font-bold leading-snug">Get 50% off <br/> Pro Yearly</p>
               </div>
               {/* Decorative circles */}
               <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-indigo-600/30 rounded-full blur-xl" />
            </div>
          </div>
        )}

        {/* SETTINGS (SIMPLE) */}
        <Link
          href="/settings"
          className={`flex items-center rounded-2xl transition-all font-bold text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 ${
            isCollapsed ? "justify-center p-3.5" : "gap-x-4 px-4 py-3.5"
          }`}
        >
          <Settings size={22} className="text-slate-400" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
}