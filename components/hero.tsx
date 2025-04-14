"use client";

import { Button } from "@/components/ui/button";
import { Download, Terminal } from "lucide-react";
import Link from "next/link";
import InstallCommand from "@/components/installcommand";

import { cn } from "@/lib/utils";
export function Hero() {
  return (
    <div className="flex flex-col items-center">
      {/* New Feature Banner */}
      <div className="w-full flex justify-center mt-6">
        <div className="bg-secondary/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full mr-2">
            New in v1.0
          </span>
          <span className="text-sm">Real-time collaboration, dark mode, and more!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 flex justify-center items-center relative overflow-hidden">
        {/* Background light effects */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-400/20 rounded-full blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10">
          {/* App Icon */}
          <div className="mb-8">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 p-0.5 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-black flex items-center justify-center">
                <span className="font-bold text-white text-3xl">Ch</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Notes Like{" "}
              <span className="animate-gradient bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Paper
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              A minimalist markdown note-taking app that feels as natural as writing on paper.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-700">
              <Link href="#download" id="download">
                <Download className="mr-2 h-4 w-4" /> Download for macOS
              </Link>
            </Button>
            <InstallCommand />
          </div>
        </div>
      </section>
      </div>
  );
}
export default Hero;