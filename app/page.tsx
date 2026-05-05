import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero2";
import Journey from "@/components/Journey";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Chinmaya Swain's portfolio — a full-stack software developer crafting clean, scalable, and high-impact digital experiences using React, Next.js, Node.js, and TypeScript.",
  alternates: {
    canonical: "https://chinmaya-swain599.dev",
  },
};


export default function Home() {
  return (
    <>
      <section className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 pb-12 md:pt-16 md:pb-0 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
        
        {/* Background Subtle Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 lg:gap-10 items-center relative z-20">
          
          {/* 📝 LEFT CONTENT */}
          <div className="text-left space-y-3 md:space-y-4 order-last md:order-first">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wide">
              Available for New Projects ✨
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-black leading-[1.05] text-gray-900 dark:text-white tracking-tighter">
              Crafting <br />
              Digital <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Experiences.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl font-medium">
              Hi, I'm <span className="font-bold text-gray-900 dark:text-white">Chinmaya</span>.
              A passionate Full Stack Developer turning complex problems into elegant solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a href="/project" className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl font-black transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 overflow-hidden transition-all">
                <span className="relative z-10 flex items-center justify-center gap-3 text-sm md:text-base">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              <a href="/contact#contact-form" className="px-10 py-3 rounded-2xl text-center font-black border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1 text-black dark:text-white text-sm md:text-base">
                Let's Talk
              </a>
            </div>

            {/* Social Links / Stats */}
            <div className="flex items-center justify-start gap-8 pt-4 md:pt-6 border-t border-gray-100 dark:border-gray-900">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">20+</p>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold">Projects</p>
              </div>
              <div className="w-px h-8 md:h-10 bg-gray-200 dark:bg-gray-800"></div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">100%</p>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold">Reliable</p>
              </div>
            </div>
          </div>

          {/* 🖼️ RIGHT IMAGE */}
          <div className="flex justify-center items-center relative z-10 order-first md:order-last">
            <div className="relative w-[300px] h-[300px] sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px]">
              {/* Outer Rings */}
              <div className="absolute inset-0 border-[3px] border-dashed border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-3 border-[3px] border-solid border-teal-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="absolute inset-8 rounded-full overflow-hidden border-[6px] md:border-[8px] border-white dark:border-gray-950 shadow-2xl">
                <img
                  src="/myimg.png"
                  alt="profile"
                  className="w-full h-full object-cover brightness-[1.02] contrast-[1.02] select-none pointer-events-none"
                  style={{ imageRendering: 'auto' }}
                />
              </div>

              {/* Decorative Dot */}
              <div className="absolute top-[20%] right-[10%] w-3 h-3 md:w-4 md:h-4 bg-teal-400 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <Hero />
      <Journey />
      <FAQ />
    </>
  );
}