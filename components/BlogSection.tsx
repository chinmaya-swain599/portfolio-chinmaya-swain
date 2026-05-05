"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar, User, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Building A Scalable React App From Scratch",
    author: "KIT-ADMIN",
    description: "A step-by-step breakdown of how I structured, optimized, and deployed a modern React application using Vite, Redux Toolkit, and component-based architecture.",
    date: "July 30, 2025",
    image: "/Code1.jpeg",
  },
  {
    id: 2,
    title: "Mastering Modern CSS Layouts with Grid & Flex",
    author: "KIT-ADMIN",
    description: "Explore advanced techniques for creating responsive and complex layouts using CSS Grid and Flexbox, ensuring a seamless user experience across all devices.",
    date: "August 12, 2025",
    image: "/Code2.jpeg",
  },
  {
    id: 3,
    title: "The Future of AI in Modern Web Development",
    author: "KIT-ADMIN",
    description: "How AI tools are changing the way we write code, from GitHub Copilot to automated testing, and what it means for the next generation of software engineers.",
    date: "September 05, 2025",
    image: "/Code3.jpeg",
  },
];

const AUTO_PLAY_DURATION = 5000;

export default function BlogSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  const lastTimeRef = useRef<number>(Date.now());
  const requestRef = useRef<number | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % BLOG_POSTS.length);
    setProgress(0);
    lastTimeRef.current = Date.now();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + BLOG_POSTS.length) % BLOG_POSTS.length);
    setProgress(0);
    lastTimeRef.current = Date.now();
  };

  const animate = () => {
    if (!isPaused) {
      const now = Date.now();
      const elapsed = now - lastTimeRef.current;
      const newProgress = Math.min((elapsed / AUTO_PLAY_DURATION) * 100, 100);

      setProgress(newProgress);

      if (elapsed >= AUTO_PLAY_DURATION) {
        handleNext();
      }
    } else {
      // Keep resetting lastTimeRef while paused so elapsed remains the same
      lastTimeRef.current = Date.now() - (progress / 100) * AUTO_PLAY_DURATION;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    lastTimeRef.current = Date.now() - (progress / 100) * AUTO_PLAY_DURATION;
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPaused, activeIndex]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    lastTimeRef.current = Date.now();
  };

  return (
    <>
    <section
      className="relative pt-6 md:pt-12 pb-0 bg-white dark:bg-[#030303] text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden sm:px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Glow (Adaptive) */}
      <div className="absolute top-0 right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-500/5 dark:bg-red-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col space-y-8 md:space-y-10">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-7xl font-bold tracking-tighter">
              Latest From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400">The Blog</span>
            </h2>
          </div>

          {/* Top Cards (Tabs) - Theme Aware */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <div
                key={post.id}
                onClick={() => handleTabClick(index)}
                className={cn(
                  "relative p-6 md:p-8 rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-500 group overflow-hidden border",
                  activeIndex === index
                    ? "bg-gray-50 dark:bg-gray-900/60 border-blue-500/50 dark:border-gray-700 shadow-2xl"
                    : "bg-white dark:bg-gray-900/30 border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-900/40 hover:border-gray-200 dark:hover:border-gray-700 shadow-sm"
                )}
              >
                {/* Progress Bar Container */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gray-100 dark:bg-gray-800/50">
                  {index === activeIndex && (
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {index === (activeIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length && (
                    <div className="h-full w-full bg-red-500/80 dark:bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
                  )}
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className={cn(
                    "text-lg md:text-xl font-bold leading-[1.3] transition-colors duration-300 line-clamp-2",
                    activeIndex === index ? "text-gray-950 dark:text-white font-black" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"
                  )}>
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <User size={14} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{post.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative group/carousel">
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[480px] overflow-hidden rounded-[1.5rem] md:rounded-[3.5rem] border border-gray-100 dark:border-white/5">
              <div
                className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {BLOG_POSTS.map((post, index) => (
                  <div
                    key={post.id}
                    className="relative w-full h-full flex-shrink-0"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className={cn("w-full h-full object-cover object-center transition-transform duration-[2000ms] ease-out", activeIndex === index ? "scale-100" : "scale-110")}
                      />
                      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/95 md:via-black/40 md:to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 w-full h-full flex flex-col items-start justify-end md:justify-center p-6 md:p-16">
                      
                      {/* Info Card - Glassmorphism */}
                      <div className={cn(
                        "w-full md:max-w-xl lg:max-w-2xl backdrop-blur-xl bg-white/10 dark:bg-black/20 p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-1000 delay-100",
                        activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                      )}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold tracking-widest mb-4 border border-blue-500/30">
                          FEATURED POST
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-white leading-[1.15] drop-shadow-lg">
                          {post.title}
                        </h2>

                        <p className="hidden sm:block text-white/80 text-sm md:text-base lg:text-lg mb-8 leading-relaxed font-medium line-clamp-3">
                          {post.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/5">
                              <Calendar size={20} className="md:w-6 md:h-6" />
                            </div>
                            <div>
                              <p className="text-[10px] text-white/50 font-black uppercase tracking-widest mb-1">DATE POSTED</p>
                              <p className="text-sm md:text-base font-bold text-white">{post.date}</p>
                            </div>
                          </div>

                          <div 
                            onClick={() => setSelectedPost(post)}
                            className="group/btn flex items-center gap-3 cursor-pointer bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 px-6 py-3.5 rounded-full border border-white/20 hover:border-white shadow-lg"
                          >
                            <span className="text-xs font-bold tracking-[0.2em] transition-colors">READ MORE</span>
                            <ExternalLink size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hidden md:flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white hover:text-black z-30 shadow-2xl"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hidden md:flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white hover:text-black z-30 shadow-2xl"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedPost(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-6xl bg-[#0a0a0c] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-auto md:max-h-[90vh] animate-in fade-in zoom-in-95 duration-300 ring-1 ring-white/10">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left/Top side: Huge Beautiful Image */}
            <div className="w-full md:w-[55%] h-[40vh] md:h-auto relative flex-shrink-0">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              {/* Overlays for smooth blend into content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0c]" />
              <div className="absolute bottom-6 left-6 hidden md:block">
                 <div className="px-4 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                    <p className="text-[10px] font-black tracking-widest text-white/70 mb-0.5">AUTHOR</p>
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-blue-400" />
                      <span className="text-sm font-bold uppercase">{selectedPost.author}</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right/Bottom side: Details */}
            <div className="w-full md:w-[45%] p-6 md:p-10 lg:p-12 flex flex-col overflow-y-auto">
              <div className="mt-4 md:mt-0 inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold tracking-widest w-fit mb-6 border border-blue-500/30">
                FEATURED POST
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 leading-[1.2]">
                {selectedPost.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10 md:hidden">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                  <User size={16} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">{selectedPost.author}</p>
                  <p className="text-xs text-gray-300">{selectedPost.date}</p>
                </div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {selectedPost.description}
                </p>
                
                <h3 className="text-xl font-bold text-white mt-8 mb-4">Introduction</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  This detailed walkthrough explores the various methods and architectural patterns leveraged to craft an immersive, interactive experience. From laying out initial wireframes to finalizing complex animations, the journey emphasizes balancing visual fidelity with high performance.
                </p>
                <div className="my-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-blue-200 italic m-0">"The true magic of modern design happens when deep technical foundations perfectly support an emotional user experience."</p>
                </div>
              </div>

              <div className="mt-auto pt-8 flex items-center justify-between">
                 <p className="text-sm text-gray-400 font-medium hidden lg:block">Finished reading the preview?</p>
                 <button 
                  onClick={() => setSelectedPost(null)}
                  className="w-full lg:w-auto px-8 py-4 rounded-xl bg-white text-black hover:bg-gray-200 font-bold transition-colors flex items-center justify-center gap-2"
                 >
                  <X size={18} className="text-black" />
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
