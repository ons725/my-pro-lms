'use client';

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  CheckCircle2, 
  Lock, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  FileText,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CourseWatchPage() {
  // Mock data for the design
  const lessons = [
    { id: 1, title: "Course Introduction", duration: "05:20", status: "completed" },
    { id: 2, title: "Setting up the Environment", duration: "12:45", status: "active" },
    { id: 3, title: "Understanding the Architecture", duration: "18:10", status: "locked" },
    { id: 4, title: "Advanced State Management", duration: "22:05", status: "locked" },
    { id: 5, title: "Deploying to Production", duration: "08:30", status: "locked" },
  ];

  const [activeLesson, setActiveLesson] = useState(2);

  return (
    <div className="flex h-screen bg-white overflow-hidden font-sans">
      
      {/* 1. LEFT SIDE: VIDEO & CONTENT (Scrollable) */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-[#FDFDFF]">
        
        {/* Top Header - Super Minimal */}
        <header className="h-16 px-8 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-10">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-bold text-sm">
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
          <div className="flex gap-2">
             <Button variant="ghost" size="sm" className="text-slate-500"><ChevronLeft size={18} /></Button>
             <Button variant="ghost" size="sm" className="text-slate-500"><ChevronRight size={18} /></Button>
          </div>
        </header>

        {/* THE PLAYER CONTAINER */}
        <div className="w-full bg-black aspect-video relative group shadow-2xl">
          {/* Placeholder for Video - Designed to look like a high-end player */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
             <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-3xl shadow-indigo-500/50 cursor-pointer hover:scale-110 transition-transform">
               <Play size={32} className="text-white fill-white ml-1" />
             </div>
          </div>
        </div>

        {/* LESSON DETAILS AREA */}
        <div className="max-w-4xl mx-auto w-full p-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-indigo-50 text-indigo-600 border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Module 1
            </Badge>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1 text-slate-500 text-sm font-medium">
              <Clock size={14} /> 12:45 mins
            </div>
          </div>

          <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Setting up the Environment for Pro Development
          </h1>

          <div className="flex gap-4 mb-10">
            <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-2xl h-12 px-6 font-bold shadow-lg shadow-indigo-200">
              Mark as Lesson Complete
            </Button>
            <Button variant="outline" className="rounded-2xl h-12 px-6 border-slate-200 text-slate-600 font-bold hover:bg-slate-50">
               <FileText size={18} className="mr-2" /> Download Resources
            </Button>
          </div>

          <hr className="border-slate-100 mb-10" />

          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mb-4">About this lesson</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              In this module, we deep dive into configuring your workspace for maximum productivity. 
              We will cover essential extensions, terminal optimizations, and the secret "Pro" workflow 
              used by top-tier engineers at companies like Vercel and Stripe.
            </p>
          </div>
        </div>
      </main>

      {/* 2. RIGHT SIDE: THE PLAYLIST SIDEBAR */}
      <aside className="w-[400px] border-l border-slate-100 flex flex-col bg-white">
        <div className="p-8 border-b border-slate-50">
          <h2 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Course Content</h2>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-4">
            <div className="bg-green-500 h-full w-[40%] transition-all" />
          </div>
          <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">40% COMPLETED</p>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id}
              className={`group flex items-start gap-4 p-6 cursor-pointer transition-all border-b border-slate-50
                ${lesson.status === 'active' ? 'bg-indigo-50/50' : 'hover:bg-slate-50'}
              `}
              onClick={() => setActiveLesson(lesson.id)}
            >
              {/* STATUS ICON */}
              <div className="mt-1">
                {lesson.status === 'completed' && <CheckCircle2 size={20} className="text-green-500" />}
                {lesson.status === 'active' && <div className="w-5 h-5 rounded-full border-2 border-indigo-600 flex items-center justify-center animate-pulse"><div className="w-2 h-2 bg-indigo-600 rounded-full" /></div>}
                {lesson.status === 'locked' && <Lock size={20} className="text-slate-300" />}
              </div>

              <div className="flex-1">
                <p className={`text-sm font-bold leading-tight mb-1 transition-colors
                  ${lesson.status === 'active' ? 'text-indigo-600' : 'text-slate-700 group-hover:text-slate-900'}
                  ${lesson.status === 'locked' ? 'text-slate-400' : ''}
                `}>
                  {lesson.id}. {lesson.title}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                   <Play size={10} /> {lesson.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Center Box */}
        <div className="p-6 bg-slate-50 m-6 rounded-[2rem] border border-slate-100">
           <p className="text-xs font-bold text-slate-900 mb-1">Stuck on a lesson?</p>
           <p className="text-[11px] text-slate-500 mb-3">Get help from our community mentors.</p>
           <Button variant="link" className="p-0 h-auto text-indigo-600 font-bold text-xs">Join Discord →</Button>
        </div>
      </aside>
    </div>
  );
}