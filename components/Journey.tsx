"use client";

import React, { useState } from "react";


export default function Journey() {
  type JourneyItem = {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    details: string;
    skills: string[];
    achievements: string[];
  };
  const [selectedJourney, setSelectedJourney] = useState<JourneyItem | null>(null);

  const journeys = [
  {
    id: 1,
    title: "Java Full Stack Intern",
    company: "Seeree",
    period: "Nov 2023 – Mar 2024",
    description: "Worked on UI/UX design and backend development using Java and MySQL.",
    details: "Gained hands-on experience in full-stack development by working on UI/UX design, backend logic using Core and Advanced Java, and database operations with MySQL. Built basic applications and understood API integration and real-world workflows.",
    skills: ["Java", "Advanced Java", "MySQL", "UI/UX Design", "Graphics Design"],
    achievements: ["Built Full Stack Mini Projects", "Learned Database Design", "Worked on UI/UX Improvements"],
  },
  {
    id: 2,
    title: "Associate web developer",
    company: "Trackepay",
    period: "Mar 2026 – Jun 2026 (Ongoing)",
    description: "Working on modern web applications using MERN stack and Next.js.",
    details: "Developing responsive and user-friendly applications using MERN stack and Next.js. Working with REST APIs, Git for version control, and deploying applications on platforms like Vercel. Gaining real-world development experience through team collaboration.",
    skills: ["React", "Next.js", "MongoDB", "Express.js", "Node.js", "TailwindCSS", "Git", "Vercel"],
    achievements: ["Working on Live Projects", "Improving UI/UX", "Hands-on with Deployment", "Team Collaboration Experience"],
  },
  {
    id: 3,
    title: "Freelance Developer",
    company: "Independent",
    period: "Upcoming",
    description: "Planning to build real-world client projects using modern web technologies.",
    details: "Focused on developing scalable, efficient, and user-friendly applications for clients. Aiming to gain real-world experience and improve problem-solving skills through freelance projects.",
    skills: ["MERN Stack", "Next.js", "API Integration", "UI/UX"],
    achievements: ["Upcoming Projects", "Client-Based Work (Planned)"],
  }
];

  return (
    <section className="py-8 md:py-12 bg-white dark:bg-[#030303] transition-colors duration-500 relative overflow-hidden text-center">
      
      {/* 🔦 Signature V-Beam Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] md:w-[1000px] h-32 md:h-40 bg-blue-500/20 dark:bg-blue-600/15 blur-[100px] md:blur-[120px] rotate-[20deg] pointer-events-none origin-left animate-pulse"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] md:w-[1000px] h-32 md:h-40 bg-indigo-500/20 dark:bg-indigo-600/15 blur-[100px] md:blur-[120px] rotate-[-20deg] pointer-events-none origin-left animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header with Badge */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-gray-950 dark:text-white leading-tight">
            My Professional
          </h2>
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 bg-gray-900 border border-gray-800 rounded-lg shadow-xl md:translate-y-1">
            <span className="text-sm">📁</span>
            <span className="text-xs md:text-sm font-bold text-white tracking-wide uppercase">Journey</span>
          </div>
        </div>

        {/* Subheader */}
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-base md:text-xl font-medium leading-relaxed mb-10 md:mb-12 px-2">
          Here&apos;s a timeline of my journey through development roles, freelance work, and internships — 
          each step sharpening my technical and problem-solving skills.
        </p>

        {/* Floating Perspective Badges (Hidden on small mobile) */}
        <div className="hidden xs:flex justify-center gap-4 md:gap-6 mb-16 md:mb-24">
          <div className="relative bg-gray-50/80 dark:bg-gray-900/40 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold border border-gray-200 dark:border-white/5 text-gray-400 backdrop-blur-sm animate-bounce duration-[4000ms]">
            Engineer
          </div>
          <div className="relative bg-gray-50/80 dark:bg-gray-900/40 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold border border-gray-200 dark:border-white/5 text-gray-400 backdrop-blur-sm animate-bounce duration-[4500ms]">
            Developer
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 mb-16 md:mb-24 max-w-5xl mx-auto flex flex-col w-full text-left px-2">
          {journeys.map((item, index) => {
            let yearStr = "2020";
            if (item.period.includes("Present")) yearStr = new Date().getFullYear().toString();
            else {
              const parts = item.period.split(" ");
              yearStr = parts[parts.length - 1];
            }
            return (
              <div key={index} className="relative group w-full bg-indigo-50/50 dark:bg-[#0c0c12]/50 backdrop-blur-xl rounded-[1rem] p-6 md:p-10 border border-indigo-200 dark:border-indigo-500/20 shadow-[0_8px_30px_rgba(79,70,229,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:shadow-indigo-500/20">
                {/* Dotted Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]" 
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1.5px, transparent 0)', backgroundSize: '24px 24px', color: 'gray' }}
                ></div>

                {/* Huge faded year */}
                <div className="absolute right-0 bottom-0 pointer-events-none overflow-hidden h-full w-1/2 flex justify-end items-end">
                  <span className="text-[100px] sm:text-[120px] md:text-[200px] leading-[0.75] md:leading-[0.75] font-black opacity-[0.02] dark:opacity-[0.04] bg-clip-text text-transparent bg-gradient-to-t from-gray-900 to-gray-400 dark:from-white dark:to-gray-500 tracking-tighter mr-[-5px] md:mr-[-20px] mb-[-10px] md:mb-[-20px] mix-blend-overlay">
                    {yearStr}
                  </span>
                </div>

                <div className="relative z-10 flex flex-col">
                  <h3 className="text-xl md:text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>{item.title}</span> 
                    <span className="text-gray-400 dark:text-gray-500 hidden sm:inline">—</span> 
                    <span>{item.company}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-lg md:text-2xl font-normal ml-1">({item.period})</span>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-normal max-w-3xl mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <button 
                    onClick={() => setSelectedJourney(item)}
                    className="mt-auto w-fit text-xs md:text-sm font-semibold text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2 group/btn"
                  >
                    Learn More 
                    <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">↗</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 🔮 PREMIUM MODAL POPUP */}
      {selectedJourney && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setSelectedJourney(null)}>
            <div 
              className="bg-white dark:bg-[#0c0c0e] w-full max-w-4xl max-h-[92vh] md:max-h-[90vh] overflow-y-auto rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl relative animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-white/90 dark:bg-[#0c0c0e]/90 backdrop-blur-xl px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6 border-b border-gray-100 dark:border-white/5">
              <div className="flex justify-between items-start gap-4">
                <div className="text-left">
                  <h4 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 hideen xs:block">{selectedJourney.company}</h4>
                  <h3 className="text-xl md:text-5xl font-bold text-gray-950 dark:text-white mb-1 leading-tight">{selectedJourney.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium italic text-xs md:text-base">{selectedJourney.period}</p>
                </div>
                <button 
                  onClick={() => setSelectedJourney(null)}
                  className="p-2 md:p-3 bg-gray-100 dark:bg-white/5 dark:text-white rounded-full transition-colors flex-shrink-0"
                >
                  <span className="text-lg md:text-2xl font-bold">✕</span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 md:p-12 space-y-7 md:space-y-12 text-left">
              
              {/* Journey Details */}
              <div className="space-y-3">
                <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-blue-500/10 text-blue-500 rounded-lg text-sm md:text-base">✨</span>
                  The Story
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed pt-1">
                  {selectedJourney.details}
                </p>
              </div>

              {/* Coding Skills Grid */}
              <div className="space-y-5">
                <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-teal-500/10 text-teal-500 rounded-lg text-sm md:text-base">💻</span>
                  Coding Skills & Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedJourney.skills.map((skill: string, i: number) => (
                    <span key={i} className="px-3 md:px-5 py-1.5 md:py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features & Achievements */}
              <div className="pb-4 md:pb-8">
                <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-4 md:mb-6">
                  <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-indigo-500/10 text-indigo-500 rounded-lg text-sm md:text-base">🏆</span>
                  Key Achievements
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {selectedJourney.achievements.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-indigo-50/50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/20">
                      <span className="text-indigo-500 text-sm md:text-xl font-bold flex-shrink-0">✔</span>
                      <span className="font-bold text-gray-800 dark:text-gray-200 text-xs md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 md:px-8 py-4 md:py-6 bg-gray-50 dark:bg-white/5 border-t border-gray-200 dark:border-white/10 flex justify-end">
              <button 
                onClick={() => setSelectedJourney(null)}
                className="w-full md:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl text-xs md:text-base"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
