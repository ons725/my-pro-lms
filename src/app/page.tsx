'use client';

import { Sidebar } from "@/components/ui/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, PlayCircle } from "lucide-react";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();

  const categories = ["All", "Web Development", "Design", "Business"];
  
  const courses = [
    { id: "1", title: "Mastering Next.js 16", instructor: "Sarah Drasner", level: "Advanced", price: "Free", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" },
    { id: "2", title: "Tailwind 4 Design Systems", instructor: "Adam W.", level: "Intermediate", price: "Free", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="pl-64">
        {/* Top Navbar */}
        <nav className="h-20 border-b bg-white flex items-center px-8 sticky top-0 z-50 justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input className="pl-10 bg-slate-100 border-none rounded-full" placeholder="Search courses..." />
          </div>
          
          <div className="flex items-center gap-4">
            {isLoaded && (
              <>
                {!isSignedIn ? (
                  <SignInButton mode="modal">
                    <Button size="sm">Sign In</Button>
                  </SignInButton>
                ) : (
                  <UserButton />
                )}
              </>
            )}
          </div>
        </nav>

        <main className="p-8">
          {/* Categories */}
          <div className="flex gap-2 mb-8">
            {categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="px-4 py-2 cursor-pointer rounded-full">
                {cat}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-6">Continue Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
                <img src={course.image} alt={course.title} className="aspect-video object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>by {course.instructor}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center text-slate-500 text-xs">
                    <PlayCircle size={14} className="mr-1" />
                    12 Lessons
                  </div>
                  <Badge variant="outline">{course.price}</Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}