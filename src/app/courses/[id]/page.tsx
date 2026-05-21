import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Sidebar - Lesson List */}
      <aside className="w-full lg:w-80 border-r bg-slate-50 overflow-y-auto">
        <div className="p-6 border-b bg-white sticky top-0">
          <h3 className="font-bold text-lg">Course Curriculum</h3>
          <p className="text-sm text-slate-500">Course ID: {id}</p>
        </div>
        <div className="p-2 space-y-1">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className={`p-4 rounded-lg cursor-pointer transition-colors ${num === 1 ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-slate-200'}`}>
              Lesson {num}: The Fundamentals
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content - Video Player */}
      <main className="flex-1 overflow-y-auto">
        <div className="aspect-video w-full bg-black relative">
           <div className="absolute inset-0 flex items-center justify-center text-white">
             <p className="text-xl">🎬 [Your Video Content Here]</p>
           </div>
        </div>
        
        <div className="p-8 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Deep Dive into Architecture</h1>
            <Button size="lg">Mark as Finished</Button>
          </div>
          <Separator className="my-6" />
          <div className="space-y-4 text-slate-700">
            <h2 className="text-xl font-semibold">Description</h2>
            <p>This module covers the advanced implementation of full-stack patterns...</p>
          </div>
        </div>
      </main>
    </div>
  );
}