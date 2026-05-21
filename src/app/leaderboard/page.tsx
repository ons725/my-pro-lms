'use client';

import { Trophy, Crown, Medal, ArrowUp, Zap, Star, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function LeaderboardPage() {
  const topThree = [
    { name: "Alex Rivers", xp: "15,420", rank: 2, color: "from-slate-300 to-slate-400", avatar: "AR" },
    { name: "Sarah Drasner", xp: "18,900", rank: 1, color: "from-yellow-400 to-orange-500", avatar: "SD" },
    { name: "Jordan Lee", xp: "12,100", rank: 3, color: "from-orange-600 to-amber-700", avatar: "JL" },
  ];

  const players = [
    { rank: 4, name: "Maria Garcia", xp: "10,200", trend: "up", country: "🇪🇸" },
    { rank: 5, name: "Kenji Sato", xp: "9,850", trend: "down", country: "🇯🇵" },
    { rank: 6, name: "Emma Wilson", xp: "9,400", trend: "up", country: "🇬🇧" },
    { rank: 7, name: "You (Pro Student)", xp: "8,900", trend: "up", country: "🇺🇸", isMe: true },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* 1. HEADER */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-2xl border border-amber-100 mb-6 font-black uppercase text-xs tracking-widest shadow-sm">
          <Crown size={16} className="fill-amber-500" /> Global Hall of Fame
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">World Rankings</h1>
        <p className="text-slate-500 font-medium max-w-lg mx-auto">Top performers this month. Study more to climb the ranks and earn exclusive badges.</p>
      </header>

      {/* 2. THE PODIUM (Top 3) */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-20 px-4">
        {/* Rank 2 */}
        <div className="order-2 md:order-1 flex-1 w-full max-w-[240px] flex flex-col items-center">
           <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center font-black text-slate-400 mb-4 border-2 border-white shadow-lg text-xl">2</div>
           <div className="bg-white w-full rounded-t-[2.5rem] p-6 border border-slate-100 shadow-sm text-center h-48 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-slate-500 border-4 border-white shadow-md relative z-10">{topThree[0].avatar}</div>
              <p className="font-bold text-slate-900 relative z-10">{topThree[0].name}</p>
              <p className="text-xs font-black text-slate-400 mt-1 relative z-10">{topThree[0].xp} XP</p>
           </div>
        </div>

        {/* Rank 1 (The Winner) */}
        <div className="order-1 md:order-2 flex-1 w-full max-w-[280px] flex flex-col items-center">
           <div className="relative mb-4">
              <Crown className="text-yellow-400 fill-yellow-400 absolute -top-8 left-1/2 -translate-x-1/2 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]" size={40} />
              <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-white shadow-xl shadow-orange-200 text-3xl">1</div>
           </div>
           <div className="bg-slate-900 w-full rounded-t-[3rem] p-8 shadow-2xl text-center h-64 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-slate-900 border-4 border-yellow-400 shadow-xl relative z-10">{topThree[1].avatar}</div>
              <p className="font-black text-white text-xl relative z-10 tracking-tight">{topThree[1].name}</p>
              <p className="text-sm font-black text-yellow-400 mt-1 relative z-10 flex items-center justify-center gap-1">
                <Zap size={14} fill="currentColor" /> {topThree[1].xp} XP
              </p>
           </div>
        </div>

        {/* Rank 3 */}
        <div className="order-3 flex-1 w-full max-w-[240px] flex flex-col items-center">
           <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center font-black text-orange-400 mb-4 border-2 border-white shadow-lg text-xl">3</div>
           <div className="bg-white w-full rounded-t-[2.5rem] p-6 border border-slate-100 shadow-sm text-center h-40 flex flex-col justify-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-orange-600 border-4 border-white shadow-md relative z-10">{topThree[2].avatar}</div>
              <p className="font-bold text-slate-900 relative z-10">{topThree[2].name}</p>
              <p className="text-xs font-black text-slate-400 mt-1 relative z-10">{topThree[2].xp} XP</p>
           </div>
        </div>
      </div>

      {/* 3. LIST OF OTHER PLAYERS */}
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden p-4">
        <div className="flex items-center justify-between p-6 mb-4">
           <h3 className="text-xl font-black text-slate-900">Rankings</h3>
           <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input className="pl-10 bg-slate-50 border-none rounded-xl text-sm" placeholder="Search students..." />
           </div>
        </div>
        
        <div className="space-y-2">
          {players.map((player) => (
            <div 
              key={player.rank} 
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${player.isMe ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 scale-[1.02]' : 'hover:bg-slate-50'}`}
            >
              <div className={`w-10 font-black text-center ${player.isMe ? 'text-white' : 'text-slate-300'}`}>#{player.rank}</div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm ${player.isMe ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                {player.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-bold flex items-center gap-2">
                  {player.name} {player.country}
                </p>
              </div>
              <div className="flex items-center gap-6">
                 <div className="text-right">
                    <p className={`font-black ${player.isMe ? 'text-white' : 'text-slate-900'}`}>{player.xp} XP</p>
                    <div className={`flex items-center gap-1 text-[10px] font-bold ${player.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                       {player.trend === 'up' ? <ArrowUp size={10} /> : <ArrowUp className="rotate-180" size={10} />}
                       {player.trend === 'up' ? '+12' : '-2'} positions
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}