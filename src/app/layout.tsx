import { ClerkProvider, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Sidebar } from "@/components/ui/Sidebar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import "./globals.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-[#FDFDFF]">
          {/* Use 'flex' to put Sidebar and Content side-by-side */}
          <div className="flex h-screen overflow-hidden">
            
            {/* 1. Sidebar is here (It handles its own width) */}
            <Sidebar />

            {/* 2. Main Content Area (Stretches to fill space) */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
              <nav className="h-20 border-b bg-white/80 backdrop-blur-md flex items-center px-8 justify-between z-50">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <Input className="pl-10 bg-slate-100 border-none rounded-xl" placeholder="Search courses..." />
                </div>
                <div className="flex items-center gap-4">
                  {!userId ? (
                    <SignInButton mode="modal">
                      <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl font-bold">Sign In</button>
                    </SignInButton>
                  ) : (
                    <UserButton />
                  )}
                </div>
              </nav>

              <main className="flex-1 overflow-y-auto p-8">
                <div className="max-w-7xl mx-auto">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}