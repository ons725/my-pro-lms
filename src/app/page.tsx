import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const courses = [
    { id: "1", title: "Mastering Next.js 16", instructor: "Sarah Drasner", level: "Advanced", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60" },
    { id: "2", title: "Tailwind 4 Design Systems", instructor: "Adam W.", level: "Intermediate", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60" },
    { id: "3", title: "Fullstack Architecture", instructor: "Lee Robinson", level: "Pro", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="border-b bg-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ProLMS
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost">My Learning</Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Welcome back, Expert.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pick up exactly where you left off. 85% of your current module is complete.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all">
              <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>Instructor: {course.instructor}</CardDescription>
              </CardHeader>
              <CardFooter className="bg-slate-50/50 p-4 border-t">
                <Button className="w-full" asChild>
                  <a href={`/courses/${course.id}`}>Continue Learning</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}