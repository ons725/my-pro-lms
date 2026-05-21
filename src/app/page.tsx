'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Star, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: "✨" },
    { name: "Development", icon: "💻" },
    { name: "Design", icon: "🎨" },
    { name: "AI Tools", icon: "🤖" },
    { name: "Business", icon: "📈" },
  ];

  const courses = [
    { 
      id: "1", 
      title: "Next.js 16 & React 19: The Complete Guide", 
      instructor: "Sarah Drasner", 
      students: "12.4k", 
      rating: 4.9,
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" 
    },
    { 
      id: "2", 
      title: "Tailwind 4 Design Systems for Pros", 
      instructor: "Adam Wathan", 
      students: "8.2k", 
      rating: 4.8,
      category: "Design",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800" 
    },
    { 
      id: "3", 
      title: "AI Engineering with Python", 
      instructor: "Andrej Karpathy", 
      students: "25k", 
      rating: 5.0,
      category: "AI Tools",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" 
    },
    { 
      id: "4", 
      title: "Modern UI/UX Principles", 
      instructor: "Gary Simon", 
      students: "15k", 
      rating: 4.7,
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800" 
    },
  ];

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 mb-12 text-white shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-6 px-4 py-1">
            <Sparkles size={14} className="mr-2" /> 2025 Professional Roadmap
          </Badge>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Learn from the <span className="text-indigo-400">Best in the Industry.</span>
          </h1>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 rounded-2xl px-8 h-14 font-bold">
            Start Learning
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-600/10 to-transparent pointer-events-none" />
      </section>

      {/* CATEGORY SELECTOR */}
      <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button 
            key={cat.name} 
            onClick={() => setActiveCategory(cat.name)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl border transition-all duration-300 whitespace-nowrap group font-bold
            ${activeCategory === cat.name 
              ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200" 
              : "bg-white border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50"
            }`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span>{cat.name}</span>
            {activeCategory === cat.name && <CheckCircle2 size={16} className="ml-1 animate-in zoom-in" />}
          </button>
        ))}
      </div>

      {/* DYNAMIC COURSE GRID */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          {activeCategory} Courses <span className="text-slate-300 ml-2 font-normal">({filteredCourses.length})</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCourses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id} className="group animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-5 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
              <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-indigo-600 border border-white/50">
                {course.category}
              </div>
            </div>
            
            <div className="px-2">
              <div className="flex items-center gap-3 mb-3 text-sm font-medium">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" /> {course.rating}
                </div>
                <span className="text-slate-300">•</span>
                <div className="text-slate-500 flex items-center gap-1">
                  <Users size={14} /> {course.students}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors mb-2">
                {course.title}
              </h3>
              <p className="text-slate-500 font-medium">{course.instructor}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
          <p className="text-slate-500 font-medium text-lg">No courses found in this category yet.</p>
        </div>
      )}
    </div>
  );
}