"use client";

import { useState, useEffect } from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    title: "SnehAashram",
    description: "A functional web application built to manage volunteer and user requests. Integrates Web3Forms API for reliable backend communication.",
    tech: ["React", "Tailwind CSS", "Web3Forms API"],
    link: "https://aashram.vercel.app",
    github: "https://github.com/chinmaya-swain599?tab=repositories",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Animal Food Hub",
    description: "An interactive web platform connecting users with animal food resources. Built solidly with foundational web technologies.",
    tech: ["HTML5", "CSS3", "JavaScript", "Web3Forms API"],
    link: "https://fantastic-donut-7c42ca.netlify.app/",
    github: "https://github.com/chinmaya-swain599?tab=repositories",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Khubsurat (Upcoming)", 
    description: "A beautiful, modern web interface focused on premium UI/UX design. Styled completely with Tailwind's utility-first framework.",
    tech: ["React", "Tailwind CSS","Web3Forms API", "Node.js"],
    link: "#",
    github: "https://github.com/chinmaya-swain599?tab=repositories",
    color: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50"
  },
  {
    title: "YOGA_BABA",
    description: "A full-stack yoga platform managing classes and users. Powered by a robust backend and relational database design.",
    tech: ["HTML/CSS", "JavaScript", "Java", "MySQL"],
    link: "#",
    github: "https://github.com/chinmaya-swain599?tab=repositories",
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50"
  },
  {
    title: "My Portfolio",
    description: "My personal software developer portfolio (this exact website!). Featuring high-performance animations, responsive dynamic design, and modern features.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Web3Forms API"],
    link: "portfolio-chinmaya-swain.vercel.app",
    github: "https://github.com/chinmaya-swain599?tab=repositories",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "E-Commerce Platform (Upcoming)",
    description: "A work-in-progress full-stack e-commerce solution complete with real-time inventory and headless CMS integration.",
    tech: ["Next.js", "TypeScript", "Prisma", "Web3Forms API", "Node.js"],
    link: "#",
    github: "https://github.com/chinmaya-swain599?tab=repositories",
    color: "from-gray-500/20 to-slate-500/20",
    border: "group-hover:border-gray-500/50"
  },
  {
    title: "AI Application (Upcoming)",
    description: "A planned intelligent AI-powered application utilizing language models to assist users in automated creative tasks.",
    tech: ["React", "Python", "AI API"],
    link: "#",
    github: "https://github.com/chinmaya-swain599?tab=repositories",
    color: "from-stone-500/20 to-zinc-500/20",
    border: "group-hover:border-stone-500/50"
  }
];

export default function ProjectPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#020202] flex flex-col items-center pt-24 md:pt-32 px-4 sm:px-6 overflow-x-hidden selection:bg-indigo-500/30 transition-colors duration-700">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[130px] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-24">
        
        {/* Header Section */}
        <div id="featured-projects" className="text-center mb-10 md:mb-16 lg:mb-24 px-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md mb-6 md:mb-10 transition-transform hover:scale-105">
            <Folder className="w-4 h-4 md:w-5 md:h-5 text-black dark:text-white" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-black/80 dark:text-white/80">My Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-black dark:text-white mb-6 md:mb-10 tracking-tighter">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Projects</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 dark:text-white/60 font-semibold px-4 leading-relaxed">
            A collection of things I've built. Ranging from web applications and APIs to interactive digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className={cn(
                "group relative rounded-[2rem] p-8 border border-black/5 dark:border-white/10 bg-white dark:bg-[#0a0a0c] shadow-lg hover:shadow-2xl dark:shadow-none transition-all duration-500 overflow-hidden",
                project.border
              )}
            >
              {/* Card Background Glow */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out",
                project.color
              )} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Top Actions */}
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                    <Folder className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white transition-colors" aria-label="Github">
                        <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white transition-colors" aria-label="External Link">
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-2 sm:mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-black/60 dark:text-white/60 mb-6 sm:mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <ul className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tech.map((tech, j) => (
                    <li key={j} className="text-[10px] sm:text-xs font-mono font-medium text-black/50 dark:text-white/50 px-2 py-0.5 sm:py-1 rounded-md bg-black/5 dark:bg-white/5">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Content - GitHub CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-32 p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-500/10 dark:border-indigo-400/10 flex flex-col items-center text-center relative overflow-hidden group">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black dark:text-white mb-3 sm:mb-4 tracking-tight">
              Want to see more of my work?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black/60 dark:text-white/60 mb-6 sm:mb-8 md:mb-10">
              I am constantly building new projects, experimenting with new technologies, and contributing to open-source software. Check out my GitHub for more repositories and latest updates!
            </p>
            <a 
              href="https://github.com/chinmaya-swain599?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all active:scale-95 text-sm sm:text-base"
            >
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Explore My GitHub</span>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
