"use client";

import { useState, useEffect } from 'react';
import { Terminal, Lightbulb, Workflow, Zap, Code, Shield } from 'lucide-react';
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Code,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    prompt: "I build interfaces that are not just beautiful, but lightning-fast and accessible. My focus is on the perfect marriage of React logic and CSS aesthetics.",
    skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend Development",
    icon: Terminal,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    prompt: "Data integrity and API performance are my religion. I architect scalable systems that can handle thousands of concurrent connections without breaking a sweat.",
    skills: ["Node.js", "Express", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    icon: Workflow,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    prompt: "Automating the path from local code to global production. I specialize in CI/CD pipelines and containerized infrastructure that self-heals.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"]
  },
  {
    title: "Core Architecture",
    icon: Lightbulb,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    prompt: "Beyond coding, I design the blueprint. I think in terms of microservices, design patterns, and systemic scalability for long-term project health.",
    skills: ["System Design", "Microservices", "REST APIs", "GraphQL", "Agile", "Testing"]
  },
  {
    title: "Performance Mastery",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    prompt: "Every millisecond counts. I optimize assets, implement advanced caching strategies, and ensure your Core Web Vitals are always in the green.",
    skills: ["Web Vitals", "Edge Caching", "Lazy Loading", "Asset Bundling", "SSR/SSG"]
  },
  {
    title: "Security & Trust",
    icon: Shield,
    color: "text-red-500",
    bg: "bg-red-500/10",
    prompt: "Protecting user data is paramount. I implement robust authentication flows, encryption standards, and follow OWASP best practices to keep systems airtight.",
    skills: ["OAuth 2.0", "JWT", "Encryption", "CORS policy", "XSS Prevention"]
  }
];

function SkillTrailItem({ category, index }: { category: any, index: number }) {
  const Icon = category.icon;
  const isRight = index % 2 !== 0;

  return (
    <div className={cn(
      "relative flex flex-col md:flex-row items-center w-full mb-16 md:mb-32",
      isRight ? "md:flex-row-reverse" : ""
    )}>
      {/* Central Line Path - Desktop Only */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[calc(100%+8rem)] w-0.5 hidden md:block">
         <div className="w-full h-full border-l-2 border-dashed border-black/10 dark:border-white/10" />
      </div>

      {/* Content Block */}
      <div className={cn(
        "w-full md:w-[45%] flex flex-col px-4",
        isRight ? "md:items-start text-left" : "md:items-end md:text-right"
      )}>
        <div className="group relative p-8 md:p-10 bg-zinc-50 dark:bg-white/[0.02] backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
           <div className={cn(
             "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500",
             category.bg,
             isRight ? "mr-auto" : "md:ml-auto"
           )}>
             <Icon className={cn("w-6 h-6", category.color)} />
           </div>

           <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white mb-4 tracking-tighter">
             {category.title}
           </h3>

           <p className="text-sm md:text-base text-black/60 dark:text-white/60 font-medium mb-6 leading-relaxed">
             {category.prompt}
           </p>

           <div className={cn(
             "flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/5",
             isRight ? "justify-start" : "md:justify-end"
           )}>
             {category.skills.map((skill: string, j: number) => (
               <span 
                 key={j} 
                 className="px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-xl bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 border border-transparent hover:border-black/10 dark:hover:border-white/10 transition-all duration-300"
               >
                 {skill}
               </span>
             ))}
           </div>
        </div>
      </div>

      {/* Center Marker */}
      <div className="relative z-10 my-8 md:my-0 mx-auto md:mx-0 w-16 h-16 rounded-full bg-white dark:bg-[#020202] border border-black/5 dark:border-white/10 shadow-xl flex items-center justify-center group overflow-hidden">
         <div className={cn("absolute inset-2 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500", category.bg)} />
         <div className={cn("w-2 h-2 rounded-full animate-pulse", category.color.replace('text-', 'bg-'))} />
      </div>

      {/* Spacer side */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}


export default function SkillPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#020202] pt-24 md:pt-32 pb-24 px-4 sm:px-6 overflow-x-hidden selection:bg-indigo-500/30 transition-colors duration-700">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
        <div className="absolute top-[10%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[150px] animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md mb-6 transition-transform hover:scale-105">
            <Zap className="w-4 h-4 text-black dark:text-white" />
            <span className="text-sm font-semibold tracking-wider uppercase text-black/80 dark:text-white/80">Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white mb-6 tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-emerald-500">Technologies</span>
          </h1>
          <p className="max-w-2xl mx-auto text-black/60 dark:text-white/60 text-lg md:text-xl font-medium">
            A comprehensive overview of my technical stack and professional capabilities built over years of engineering experience.
          </p>
        </div>

        {/* Skills Timeline Layout */}
        <div className="relative flex flex-col items-center">
          {skillCategories.map((category, i) => (
            <SkillTrailItem key={i} category={category} index={i} />
          ))}
        </div>


      </div>
    </div>
  );
}
