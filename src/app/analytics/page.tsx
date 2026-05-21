'use client';

import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Trophy, 
  Target,
  ArrowUpRight,
  Clock,
  Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  const mainStats = [
    { label: "Learning Points", value: "24,500", color: "from-violet-500 to-fuchsia-500", icon: Zap },
    { label: "Completed Lessons", value: "128", color: "from-emerald-400 to-cyan-500", icon: Trophy },
    { label: "Global Rank", value: "#42", color: "from-orange-400 to-rose-500", icon: TrendingUp },
    { label: "Study Streak", value: "14 Days", color: "from-blue-500 to-indigo-600", icon: Flame },
  ];

  const weeklyData = [
    { day: "Mon", value: "40%" },
    { day: "Tue", value: "75%" },
    { day: "Wed", value: "90%" },
    { day: "Thu", value: "65%" },
    { day: "Fri", value: "85%" },
    { day: "Sat", value: "30%" },
    { day: "Sun", value: "55%" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* 1. HEADER */}
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Your Progress</h1>
        <p className="text-slate-500 font-medium">You've learned 15% more this week than last week. Keep it up!</p>
      </header>

      {/* 2. GLOWING STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {mainStats.map((stat) => (
          <div key={stat.label} className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-[2.5rem]`} />
            <div className="relative bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                <stat.icon size={24} />
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. CENTER SECTION: CHART & GOALS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* VIBRANT BAR CHART */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <BarChart3 className="text-indigo-600" size={22} />
              Weekly Activity
            </h2>
            <Button variant="outline" className="rounded-xl font-bold text-xs border-slate-100">Last 7 Days</Button>
          </div>

          <div className="flex items-end justify-between h-64 gap-2">
            {weeklyData.map((data) => (
              <div key={data.day} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="w-full relative flex items-end justify-center h-full">
                   {/* THE BAR */}
                   <div 
                    className="w-full max-w-[40px] bg-slate-50 group-hover:bg-indigo-50 rounded-2xl transition-all relative overflow-hidden"
                    style={{ height: '100%' }}
                   >
                     <div 
                       className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-600 to-blue-400 rounded-2xl transition-all duration-1000"
                       style={{ height: data.value }}
                     />
                   </div>
                </div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GOAL TRACKER CARD */}
        <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
           <div className="relative z-10 h-full flex flex-col">
              <div className="p-3 bg-white/10 rounded-2xl w-fit mb-6 backdrop-blur-md">
                <Target className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Monthly Goal</h3>
              <p className="text-slate-400 text-sm mb-8">Finish "Advanced React" course to hit your target.</p>
              
              <div className="mt-auto space-y-6">
                <div className="flex justify-between items-end">
                   <span className="text-4xl font-black">82%</span>
                   <span className="text-indigo-400 font-bold"> hampir selesai!</span>
                </div>
                {/* CUSTOM PROGRESS RING EFFECT */}
                <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[82%] rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
                </div>
                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-black h-14 rounded-2xl transition-all shadow-xl">
                   Set New Goal
                </Button>
              </div>
           </div>
           {/* Background Glow */}
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/30 rounded-full blur-[100px]" />
        </div>

      </div>

      {/* 4. RECENT MILESTONES */}
      <div className="mt-12">
        <h2 className="text-xl font-black text-slate-900 mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-white p-6 rounded-3xl border border-slate-50 shadow-sm flex items-center gap-6 hover:translate-x-2 transition-transform cursor-pointer">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
                 <Trophy size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Next.js Wizard</h4>
                <p className="text-xs text-slate-500">Earned for finishing 5 lessons in one day.</p>
              </div>
              <ArrowUpRight className="ml-auto text-slate-300" size={20} />
           </div>
           <div className="bg-white p-6 rounded-3xl border border-slate-50 shadow-sm flex items-center gap-6 hover:translate-x-2 transition-transform cursor-pointer">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                 <Clock size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Night Owl</h4>
                <p className="text-xs text-slate-500">Earned for studying past midnight.</p>
              </div>
              <ArrowUpRight className="ml-auto text-slate-300" size={20} />
           </div>
        </div>
      </div>
    </div>
  );
}