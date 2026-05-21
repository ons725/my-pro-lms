'use client';

import { Map, ChevronRight, Lock, Unlock, Star, Zap, Trophy, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function RoadmapsPage() {
  const paths = [
    {
      title: "Fullstack Wizard",
      level: "Advanced",
      duration: "6 Months",
      color: "from-indigo-600 to-blue-500",
      progress: 65,
      nodes: ["React Foundations", "Node.js Mastery", "Database Design", "System Design"],
      icon: Zap
    },
    {
      title: "AI & Machine Learning",
      level: "Expert",
      duration: "9 Months",
      color: "from-purple-600 to-fuchsia-500",
      progress: 20,
      nodes: ["Python Basics", "Neural Networks", "NLP Masterclass", "Deployment"],
      icon: Star
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* 1. FUTURISTIC HEADER */}
      <header className="mb-12 relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200">
            <Map size={24} />
          </div>
          <Badge className="bg-indigo-50 text-indigo-600 border-indigo-100 font-black uppercase tracking-widest px-4 py-1">Career Paths</Badge>
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">Master Your Craft.</h1>
        <p className="text-slate-500 text-lg max-w-2xl font-medium">Follow curated learning paths designed by industry experts to take you from zero to professional.</p>
      </header>

      {/* 2. ROADMAP CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {paths.map((path) => (
          <div key={path.title} className="group relative">
            {/* Background Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${path.color} rounded-[3rem] blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
            
            <div className="relative bg-white border border-slate-100 rounded-[3rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-10">
                <div>
                   <h2 className="text-3xl font-black text-slate-900 mb-2">{path.title}</h2>
                   <div className="flex gap-4">
                      <span className="text-xs font-bold text-slate-400 uppercase flex items-center gap-1">
                         <Trophy size={14} className="text-amber-400" /> {path.level}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase">⌛ {path.duration}</span>
                   </div>
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-white shadow-lg`}>
                   <path.icon size={28} />
                </div>
              </div>

              {/* 3. THE VISUAL ROADMAP PATH (THE COOL PART) */}
              <div className="relative flex justify-between items-center mb-10">
                {/* Horizontal Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
                <div 
                  className={`absolute top-1/2 left-0 h-1 bg-gradient-to-r ${path.color} -translate-y-1/2 z-0 transition-all duration-1000`} 
                  style={{ width: `${path.progress}%` }}
                />

                {path.nodes.map((node, index) => {
                  const isCompleted = index < (path.nodes.length * path.progress / 100);
                  const isCurrent = index === Math.floor(path.nodes.length * path.progress / 100);
                  
                  return (
                    <div key={node} className="relative z-10 flex flex-col items-center gap-3 group/node">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-4 
                        ${isCompleted ? `bg-white border-indigo-600 shadow-lg` : 
                          isCurrent ? `bg-indigo-600 border-indigo-200 scale-125 shadow-xl shadow-indigo-200` : 
                          `bg-slate-50 border-white`}
                      `}>
                        {isCompleted ? <Unlock className="text-indigo-600" size={14} /> : 
                         isCurrent ? <Play className="text-white fill-white" size={14} /> : 
                         <Lock className="text-slate-300" size={14} />}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-tighter absolute -bottom-8 whitespace-nowrap
                        ${isCurrent ? 'text-indigo-600' : 'text-slate-400'}
                      `}>
                        {node}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* ACTION FOOTER */}
              <div className="mt-16 pt-8 border-t border-slate-50 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-2xl font-black text-slate-900">{path.progress}%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Overall Progress</span>
                 </div>
                 <Button className={`rounded-2xl px-8 h-14 font-bold bg-slate-900 text-white hover:bg-indigo-600 transition-all group-hover:translate-x-2`}>
                    Continue Path <ChevronRight className="ml-2" size={18} />
                 </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}