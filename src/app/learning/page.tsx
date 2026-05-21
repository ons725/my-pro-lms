'use client';

import { Button } from "@/components/ui/button";
import { 
  Play, 
  Trophy, 
  Clock, 
  BookOpen, 
  MoreVertical,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function MyLearningPage() {
  const myCourses = [
    { 
      id: "1", 
      title: "Mastering Next.js 16", 
      instructor: "Sarah Drasner", 
      progress: 75, 
      lastAccessed: "2 hours ago",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" 
    },
    { 
      id: "2", 
      title: "Tailwind 4 Design Systems", 
      instructor: "Adam W.", 
      progress: 12, 
      lastAccessed: "Yesterday",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800" 
    }
  ];

  return (
    <main className="max-w-6xl mx-auto">
      {/* 1. HEADER SECTION */}
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">My Learning</h1>
          <p className="text-slate-500 font-medium">Continue where you left off and reach your goals.</p>
        </div>
        <div className="flex gap-3">
           <div className="bg-indigo-50 px-4 py-2 rounded-2xl flex items-center gap-2 border border-indigo-100">
              <Trophy className="text-indigo-600" size={18} />
              <span className="text-indigo-700 font-bold text-sm">1,240 XP</span>
           </div>
        </div>
      </header>

      {/* 2. STATS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
         <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
               <BookOpen size={24} />
            </div>
            <div>
               <p className="text-2xl font-black text-slate-900">2</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Courses</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
               <CheckCircle2 size={24} />
            </div>
            <div>
               <p className="text-2xl font-black text-slate-900">12</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lessons Finished</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
               <Clock size={24} />
            </div>
            <div>
               <p className="text-2xl font-black text-slate-900">4.5h</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Learning Time</p>
            </div>
         </div>
      </div>

      {/* 3. ENROLLED COURSES LIST */}
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Continue Watching</h2>
      <div className="space-y-6">
        {myCourses.map((course) => (
          <div key={course.id} className="group bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
            
            {/* Course Image */}
            <div className="relative w-full md:w-64 aspect-video rounded-[2rem] overflow-hidden">
              <img src={course.image} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Play size={20} className="text-indigo-600 fill-indigo-600 ml-1" />
                 </div>
              </div>
            </div>

            {/* Course Info */}
            <div className="flex-1 w-full">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">with {course.instructor}</p>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical size={20} /></Button>
              </div>

              {/* Progress Bar Section */}
              <div className="mt-6">
                <div className="flex justify-between items-end mb-2">
                   <span className="text-sm font-bold text-slate-900">{course.progress}% Complete</span>
                   <span className="text-xs font-medium text-slate-400 italic">Last seen {course.lastAccessed}</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full transition-all duration-1000" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="px-4">
              <Link href={`/courses/${course.id}`}>
                <Button className="bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl h-14 px-8 font-bold transition-all shadow-lg shadow-slate-200">
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}