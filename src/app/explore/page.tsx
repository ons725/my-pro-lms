'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  SlidersHorizontal,
  Star,
  Flame,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  
  const categories = ["All Topics", "Web Development", "Mobile Dev", "AI & Data", "UI/UX Design", "Business"];
  
  const trendingCourses = [
    {
      id: "1",
      title: "The Art of Generative AI",
      instructor: "Dr. Aris",
      rating: 5.0,
      students: "45k",
      price: "$89",
      tag: "Trending",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    },
    {
      id: "2",
      title: "Advanced Motion Design 4",
      instructor: "Vukovic",
      rating: 4.9,
      students: "12k",
      price: "$59",
      tag: "Best Seller",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800"
    },
    {
      id: "3",
      title: "Backend Scalability",
      instructor: "H. Pratt",
      rating: 4.8,
      students: "8k",
      price: "$120",
      tag: "New",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"    },
    {
      id: "4",
      title: "React Native Masterclass",
      instructor: "E. Musk",
      rating: 4.7,
      students: "30k",
      price: "Free",
      tag: "Popular",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      
      {/* 1. ADVANCED SEARCH & FILTER HEADER */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Explore</h1>
            <p className="text-slate-500 font-medium mt-1">Discover your next career-defining skill.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                className="pl-12 bg-white border-slate-100 shadow-sm rounded-2xl h-12 focus-visible:ring-indigo-500" 
                placeholder="Search anything..." 
              />
            </div>
            <Button variant="outline" className="h-12 w-12 rounded-2xl border-slate-100 p-0 shadow-sm">
               <SlidersHorizontal size={20} className="text-slate-600" />
            </Button>
          </div>
        </div>

        {/* 2. PRO CATEGORY BAR */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap
                ${activeCategory === cat 
                  ? "bg-slate-900 text-white shadow-lg" 
                  : "bg-white text-slate-500 border border-slate-100 hover:border-slate-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. TRENDING SECTION */}
      <div className="flex items-center gap-2 mb-8">
         <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
            <Flame size={20} fill="currentColor" />
         </div>
         <h2 className="text-2xl font-black text-slate-900 tracking-tight">Trending Now</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingCourses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id} className="group">
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
              <img src={course.image} alt={course.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
              
              {/* Glass Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg">
                    {course.tag}
                  </Badge>
                </div>
                
                <div className="text-white">
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold">{course.rating}</span>
                    <span className="text-white/40 ml-1">•</span>
                    <span className="text-xs text-white/60 ml-1">{course.students}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-indigo-300 transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                     <span className="text-sm font-black">{course.price}</span>
                     <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-900 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-lg">
                        <ArrowUpRight size={16} />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 4. "FOR YOU" RECOMMENDATION BANNER */}
      <section className="mt-16 bg-indigo-600 rounded-[3rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-indigo-200">
         <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl font-black text-white mb-4 leading-tight">Can't decide what <br/> to learn first?</h2>
            <p className="text-indigo-100 text-lg font-medium mb-8">Take our 2-minute skill assessment to find <br/> your perfect learning path.</p>
            <Button className="bg-white text-indigo-600 hover:bg-slate-100 h-14 px-10 rounded-2xl font-bold text-lg shadow-xl">
               Start Assessment
            </Button>
         </div>
         
         {/* Decorative UI elements */}
         <div className="mt-10 md:mt-0 flex gap-4 rotate-3 opacity-90">
            <div className="w-32 h-44 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" />
            <div className="w-32 h-44 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mt-8" />
            <div className="w-32 h-44 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" />
         </div>

         <div className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[120px] pointer-events-none opacity-50" />
      </section>
    </div>
  );
}