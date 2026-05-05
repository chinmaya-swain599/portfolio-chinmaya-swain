"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function Hero2() {

  return (
    <>
      <section className="relative flex items-center justify-center px-4 md:px-6 py-12 md:py-24 bg-white dark:bg-[#020617] text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden text-center">

        {/* 💡 Adaptive Glow Effects */}
        <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 dark:bg-blue-600/20 blur-[100px] md:blur-[140px] rounded-full -top-10 md:-top-20 -left-10 md:-left-20 pointer-events-none animate-pulse"></div>
        <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[100px] md:blur-[140px] rounded-full bottom-0 md:-bottom-20 -right-10 md:-right-20 pointer-events-none animate-pulse delay-700"></div>
        
        {/* Content Container */}
        <div className="max-w-5xl relative z-10 mx-auto">

          {/* Decorative Badge */}
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-8 md:mb-12 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 backdrop-blur-md transition-all hover:scale-105">
            <span className="text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">⚡ The Story</span>
          </div>

          {/* Main Statement */}
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter max-w-4xl mx-auto">
              I’m a <span className="text-blue-600 dark:text-blue-400 italic">Software Developer</span> who enjoys building simple, efficient, and user-friendly web applications.
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed tracking-tight text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My journey started with curiosity about how systems work, which grew into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 font-bold">passion for development</span>. I continuously learn new technologies and improve my skills through real-world projects.
            </p>
          </div>

          {/* Floating Tags (Desktop Only) */}
          <div className="absolute right-[-10%] top-1/2 hidden xl:flex flex-col gap-6 animate-bounce duration-[3000ms]">
            <span className="px-6 py-3 bg-white dark:bg-gray-900 rounded-2xl text-sm font-bold shadow-xl border border-gray-100 dark:border-gray-800 whitespace-nowrap">
              Full Stack Dev 💻
            </span>
            <span className="px-6 py-3 bg-white dark:bg-gray-900 rounded-2xl text-sm font-bold shadow-xl border border-gray-100 dark:border-gray-800 whitespace-nowrap translate-x-4">
              UI/UX Enthusiast 🎨
            </span>
          </div>

        </div>
      </section>

      {/* 🔥 THE PROJECT SECTION - RESTORED EXACTLY AS IT WAS */}
      <section className="relative py-8 md:py-12 px-4 md:px-6 bg-blue-50/30 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">

        {/* Subtle Section Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full"></div>

        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-10 md:mb-20 tracking-tighter">
          Upcoming Projects 🚀
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

          {/* CARD 1 */}
          <div className="text-center">
            <div className="flex items-center justify-center h-48 md:h-60 w-full mb-6">
              <img src="/project1.png" className="max-h-full max-w-full object-contain hover:scale-110 transition cursor-pointer dark:invert-0 invert" alt="DevTracker" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">DevTracker (Planned)</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-6 max-w-xs mx-auto">
              A productivity web app for tracking tasks.
            </p>
            <div className="inline-block bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 px-4 md:px-6 py-2 rounded-lg text-[10px] md:text-xs font-bold tracking-widest border border-teal-500/20">
              React • Redux • TailwindCSS • Firebase
            </div>
          </div>

          {/* CARD 2 */}
          <div className="text-center">
            <div className="flex items-center justify-center h-48 md:h-60 w-full mb-6">
              <img src="/project2.png" className="max-h-full max-w-full object-contain hover:scale-110 transition cursor-pointer dark:invert-0 invert" alt="CodeShare" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">CodeShare (Learning Phase)</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-6 max-w-xs mx-auto">
              A platform to share code snippets.
            </p>
            <div className="inline-block bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 px-4 md:px-6 py-2 rounded-lg text-[10px] md:text-xs font-bold tracking-widest border border-teal-500/20">
              React • Express • MongoDB • JWT • Netlify
            </div>
          </div>

          {/* CARD 3 */}
          <div className="text-center">
            <div className="flex items-center justify-center h-48 md:h-60 w-full mb-6">
              <img src="/project3.png" className="max-h-full max-w-full object-contain hover:scale-110 transition cursor-pointer dark:invert-0 invert" alt="EcoCart" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">EcoCart (Upcoming)</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-6 max-w-xs mx-auto">
              Eco-friendly shopping platform.
            </p>
            <div className="inline-block bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 px-4 md:px-6 py-2 rounded-lg text-[10px] md:text-xs font-bold tracking-widest border border-teal-500/20">
              React • Redux • TailwindCSS • Firebase
            </div>
          </div>

        </div>
      </section>

      {/* 🛠️ EXPERIENCE & GROWTH SECTION - RESTORED EXACTLY AS IT WAS */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-slate-50 dark:bg-[#0a0a0c] transition-colors duration-500 overflow-hidden relative">

        {/* Subtle Background Pattern (Dot Grid) */}
        <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.3] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight tracking-tighter">
              Where I've built, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">led, and grown</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-xl max-w-2xl mx-auto px-4">
              Professional experience and key contributions to the tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* Experience Card 1 */}
            <div className="group relative bg-white/80 dark:bg-[#111114] p-5 md:p-8 rounded-xl md:rounded-[2.5rem] border border-blue-200 dark:border-gray-800 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/20 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-500 overflow-hidden">
              {/* Background Watermark Symbol */}
              <div className="absolute -right-5 -bottom-5 md:-right-10 md:-bottom-10 text-blue-100/50 dark:text-white/[0.03] group-hover:scale-110 md:group-hover:scale-125 group-hover:text-blue-500/10 transition-all duration-700">
                <svg className="w-44 h-44 md:w-60 md:h-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-900 dark:text-white">Seeree (Java Full Stack Intern)</h3>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
                  Nov 2023 – Mar 2024
                </p>

                <div className="space-y-4 text-left">
                  <p className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Key Contributions:</p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    <li>• Worked on UI/UX design and basic graphic design principles for web applications.</li>
                    <li>• Developed backend logic using Core Java and Advanced Java.</li>
                    <li>• Managed and interacted with MySQL databases for CRUD operations.</li>
                    <li>• Built and understood full-stack application flow and backend integration.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="group relative bg-white/80 dark:bg-[#111114] p-5 md:p-8 rounded-xl md:rounded-[2.5rem] border border-teal-200 dark:border-gray-800 shadow-xl shadow-teal-500/5 hover:shadow-teal-500/20 hover:border-teal-500/50 backdrop-blur-sm transition-all duration-500 overflow-hidden">
              {/* Background Watermark Symbol */}
              <div className="absolute -right-5 -bottom-5 md:-right-10 md:-bottom-10 text-teal-100/50 dark:text-white/[0.03] group-hover:scale-110 md:group-hover:scale-125 group-hover:text-teal-500/10 transition-all duration-700">
                <svg className="w-44 h-44 md:w-60 md:h-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-900 dark:text-white">Trackepay (Associate web developer)</h3>
                <p className="text-teal-600 dark:text-teal-400 font-bold text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
                  Mar 2026 – Jun 2026
                </p>

                <div className="space-y-4 text-left">
                  <p className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Key Contributions:</p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    <li>• Developing web applications using MERN stack and Next.js.</li>
                    <li>• Building responsive and user-friendly interfaces with modern UI practices.</li>
                    <li>• Working with REST APIs and backend integration.</li>
                    <li>• Using Git for version control and collaboration..</li>
                    <li>• Deploying applications on platforms like Vercel and other cloud services.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Card 3 */}
            <div className="group relative bg-white/80 dark:bg-[#111114] p-5 md:p-8 rounded-xl md:rounded-[2.5rem] border border-indigo-200 dark:border-gray-800 shadow-xl shadow-indigo-500/5 hover:shadow-indigo-500/20 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-500 overflow-hidden">
              {/* Background Watermark Symbol */}
              <div className="absolute -right-5 -bottom-5 md:-right-10 md:-bottom-10 text-indigo-100/50 dark:text-white/[0.03] group-hover:scale-110 md:group-hover:scale-125 group-hover:text-indigo-500/10 transition-all duration-700">
                <svg className="w-44 h-44 md:w-60 md:h-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-900 dark:text-white">Freelance Developer (Upcoming)</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
                  Planned
                </p>

                <div className="space-y-4 text-left">
                  <p className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Focus Areas:</p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    <li>• Building real-world client projects using modern web technologies</li>
                    <li>• Creating scalable, efficient, and user-friendly applications</li>
                    <li>• Continuously improving development and problem-solving skills</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 SKILLS & TECHNOLOGIES SECTION - RESTORED EXACTLY AS IT WAS */}
      <section className="py-8 md:py-12 bg-white dark:bg-[#030303] text-gray-900 dark:text-white overflow-hidden relative border-t border-gray-100 dark:border-white/5 transition-colors duration-500">

        {/* 🔦 Precise V-Shaped Beam Effects */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] md:w-[800px] h-24 md:h-32 bg-blue-500/5 dark:bg-blue-600/10 blur-[80px] md:blur-[100px] rotate-[15deg] pointer-events-none origin-left"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] md:w-[800px] h-24 md:h-32 bg-indigo-500/5 dark:bg-indigo-600/10 blur-[80px] md:blur-[100px] rotate-[-15deg] pointer-events-none origin-left"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 tracking-tighter">
              Skills & Technologies
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-xl font-medium px-4">
              Tools I use to build, ship, and scale.
            </p>
          </div>

          <div className="relative overflow-hidden py-6 md:py-4">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#030303] to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#030303] to-transparent z-20"></div>

            <div className="flex animate-marquee group items-center">
              <div className="flex gap-12 md:gap-24 items-center justify-around min-w-full shrink-0 px-5 md:px-10">
                <img src="/next.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110 dark:invert-0 invert" alt="Next.js" />
                <img src="/html.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="HTML5" />
                <img src="/React.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="React" />
                <img src="/tailwindcss.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Tailwind" />
                <img src="/Java.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="java" />
                <img src="/Mysql.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Mysql" />
                <img src="/css.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Css" />
                <img src="/js.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Js" />
                <img src="/node.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Node" />
                <img src="/Mongodb.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Mongo" />
              </div>
              <div className="flex gap-12 md:gap-24 items-center justify-around min-w-full shrink-0 px-5 md:px-10">
                <img src="/next.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110 dark:invert-0 invert" alt="Next.js" />
                <img src="/html.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="HTML5" />
                <img src="/React.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="React" />
                <img src="/tailwindcss.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Tailwind" />
                <img src="/Java.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="java" />
                <img src="/Mysql.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Mysql" />
                <img src="/css.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Css" />
                <img src="/js.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Js" />
                <img src="/node.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Node" />
                <img src="/Mongodb.png" className="h-10 md:h-20 w-auto opacity-80 hover:opacity-100 transition-all hover:scale-110" alt="Mongo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🤝 CALL TO ACTION SECTION - RESTORED EXACTLY AS IT WAS */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-white dark:bg-[#030303] transition-colors duration-500">
        <div className="max-w-7xl mx-auto relative group text-center">
          <div className="relative w-full py-10 md:py-16 px-6 md:px-8 rounded-2xl md:rounded-[3rem] bg-gray-50 dark:bg-[#0a0a0c] border border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute inset-0 opacity-[0.3] dark:opacity-[0.1] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-950 dark:text-white leading-tight px-2 tracking-tighter">
                Let's build <br /> something great <br /> together.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl font-medium leading-relaxed px-4">
                I’m open to internships, freelance projects, and collaboration opportunities. <br className="hidden md:block" />
                Feel free to reach out — I’d love to work with you.
              </p>
              <a href="/contact#contact-form" className="inline-block relative px-8 md:px-10 py-3 md:py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}