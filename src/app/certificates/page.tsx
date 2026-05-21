'use client';

import { Award, Share2, Download, ShieldCheck, Star, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CertificatesPage() {
  const earnedCertificates = [
    {
      id: "CERT-001",
      title: "Next.js 16 Pro Developer",
      issuer: "ProLMS Academy",
      date: "Oct 24, 2024",
      color: "from-blue-600 via-indigo-500 to-purple-600",
      glow: "shadow-blue-500/20",
    },
    {
      id: "CERT-002",
      title: "UI/UX Masterclass",
      issuer: "Design Studio",
      date: "Sep 12, 2024",
      color: "from-rose-500 via-fuchsia-500 to-orange-500",
      glow: "shadow-rose-500/20",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* 1. VIBRANT HERO SECTION */}
      <section className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-12 mb-12 text-white shadow-2xl">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-slate-900 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
              <TrophyIcon size={24} />
            </div>
            <Badge className="bg-white/10 text-amber-400 border-amber-400/30 px-4 py-1">Hall of Fame</Badge>
          </div>
          <h1 className="text-5xl font-black mb-4 tracking-tight">Your Achievements</h1>
          <p className="text-slate-400 text-lg max-w-xl">
            You have earned <span className="text-white font-bold">2 Professional Certificates</span>. 
            Share your success with the world.
          </p>
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
      </section>

      {/* 2. CERTIFICATES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {earnedCertificates.map((cert) => (
          <div key={cert.id} className="group relative">
            {/* Holographic Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-[2.6rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
            
            <div className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                
                {/* Visual "Certificate Preview" */}
                <div className={`shrink-0 w-full md:w-48 aspect-[3/4] bg-gradient-to-br ${cert.color} rounded-3xl relative overflow-hidden flex flex-col items-center justify-center p-6 text-white text-center shadow-inner`}>
                   <Award size={48} className="mb-4 drop-shadow-lg" />
                   <div className="w-full h-[2px] bg-white/30 mb-4" />
                   <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Official Member</p>
                   <p className="text-xs font-bold leading-tight mt-2">{cert.title}</p>
                   {/* Decorative lines */}
                   <div className="absolute top-0 left-0 w-full h-full border-[10px] border-white/10" />
                   <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                </div>

                {/* Certificate Content */}
                <div className="flex-1 flex flex-col h-full py-2">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                       <Badge variant="outline" className="text-indigo-600 border-indigo-100 bg-indigo-50/50 mb-2">Verified</Badge>
                       <h3 className="text-2xl font-black text-slate-900 leading-tight">{cert.title}</h3>
                       <p className="text-slate-500 font-bold text-sm mt-1">Issued by {cert.issuer}</p>
                    </div>
                    <ShieldCheck className="text-emerald-500" size={28} />
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                       <Star size={14} className="text-amber-400 fill-amber-400" />
                       Earned on {cert.date}
                    </div>
                    <p className="text-slate-400 text-xs font-mono">ID: {cert.id}</p>
                  </div>

                  <div className="mt-auto pt-8 flex gap-3">
                    <Button className="flex-1 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl h-12 font-bold transition-all shadow-lg group-hover:translate-y-[-2px]">
                      <Download size={18} className="mr-2" /> Download
                    </Button>
                    <Button variant="outline" className="aspect-square p-0 rounded-2xl border-slate-100 hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                      <Share2 size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 3. "UP NEXT" CARD (ALIVE & MOTIVATIONAL) */}
        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white hover:border-indigo-300 transition-all">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 group-hover:text-indigo-600 group-hover:scale-110 transition-all mb-6">
              <Sparkles size={32} />
           </div>
           <h3 className="text-xl font-bold text-slate-900">Your Next Milestone</h3>
           <p className="text-slate-500 mt-2 max-w-[240px]">Finish the <strong>AI Engineering</strong> course to unlock your next gold badge.</p>
           <Button variant="link" className="mt-4 text-indigo-600 font-black flex items-center gap-2">
             Go to Course <ExternalLink size={14} />
           </Button>
        </div>
      </div>
    </div>
  );
}

function TrophyIcon({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 22V18" />
      <path d="M14 22V18" />
      <path d="M18 4H6v7a6 6 0 0 0 12 0V4Z" />
    </svg>
  );
}