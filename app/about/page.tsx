"use client";

import { useState, useEffect } from 'react'
import { Zap, Code2, Server, Layout, Database, Terminal, Shield, Cpu, Globe, Rocket, Palette, Search, Settings, Command, Footprints, ArrowRight } from 'lucide-react'
import BlogSection from '@/components/BlogSection'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'
import { cn } from "@/lib/utils";

function SkillTrailStep({ icon: Icon, title, skills, level, side, isLast }: any) {
  return (
    <div className={cn(
      "relative flex flex-col md:flex-row items-center w-full mb-12 md:mb-16",
      side === 'right' ? "md:flex-row-reverse" : ""
    )}>
      {/* The Central Path Segment */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[calc(100%+4rem)] w-1 hidden md:block">
         {!isLast && (
           <div className="w-full h-full border-l-2 border-dashed border-black/10 dark:border-white/10 relative">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 animate-[float_4s_infinite]">
                <Footprints className="w-4 h-4 text-black/20 dark:text-white/20 rotate-180" />
              </div>
              <div className="absolute top-3/4 left-1/2 -translate-x-1/2 animate-[float_4s_infinite_1s]">
                <Footprints className="w-4 h-4 text-black/20 dark:text-white/20 rotate-180" />
              </div>
           </div>
         )}
      </div>

      <div className={cn("w-full md:w-[45%] flex px-4 md:px-0", side === 'left' ? "md:justify-end md:text-right" : "md:justify-start md:text-left")}>
        <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 transition-all duration-700 w-full max-w-lg">
           <div className={cn("absolute -top-3 px-3 py-1 rounded-full bg-black dark:bg-white text-[10px] font-black uppercase text-white dark:text-black tracking-widest", side === 'left' ? "md:right-8" : "md:left-8")}>
             Lvl {level/10}
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-black dark:text-white mb-4 tracking-tighter">{title}</h3>
           <div className={cn("flex flex-wrap gap-2", side === 'left' ? "md:justify-end" : "md:justify-start")}>
             {skills.map((s: string, i: number) => (
               <span key={i} className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 text-[10px] md:text-[11px] font-bold text-black/60 dark:text-white/60 uppercase tracking-wider">{s}</span>
             ))}
           </div>
        </div>
      </div>

      <div className="relative z-10 my-8 md:my-0 mx-auto md:mx-0 w-20 h-20 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-white dark:border-[#0a0a0a] flex items-center justify-center group">
         <Icon className="w-8 h-8 text-black dark:text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}

function TechMarquee() {
  const tech = ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "PRISMA", "TAILWIND", "AWS", "DOCKER", "FIGMA", "PYTHON", "RUST", "GOLANG"];
  return (
    <div className="w-full overflow-hidden py-10 mb-10 group">
      <div className="flex w-max whitespace-nowrap animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {tech.map((t, idx) => (
              <span key={idx} className="text-3xl md:text-6xl font-black text-black/20 dark:text-white/20 mx-10 tracking-[0.5em]">{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#020202] flex flex-col items-center pt-24 px-4 sm:px-6 transition-colors duration-700 overflow-x-hidden">
      
      {/* Page Header */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center px-4 mb-20">
        <h1 className="text-5xl md:text-8xl font-black text-black dark:text-white leading-[1.05] tracking-tighter mb-8">
           Hi, I&apos;m CHINMAYA — a Software Developer who builds clean, scalable, and high-impact solutions.
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <a href="/Resume.pdf" download className="px-8 py-4 rounded-xl border-2 border-black/10 dark:border-white/10 font-bold text-black dark:text-white">Download Resume</a>
           <a href="/project" className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold flex items-center gap-2 group">
             View My Work
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>

      {/* Re-adding the missing description part */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-20 text-left">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-6 w-fit">
          <Zap className="w-3.5 h-3.5 text-black dark:text-white fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white/90">About Me</span>
        </div>
        <p className="text-2xl md:text-4xl font-medium leading-[1.6] tracking-tight text-black/80 dark:text-white/80">
          I&apos;m a Software Developer passionate about creating scalable and user-friendly web applications. <span className="text-black dark:text-white font-bold">With hands-on experience</span> in MERN stack and real-world projects, I continuously strive to learn, build, and improve as a developer.
        </p>
      </div>

      <div id="skills" className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-24">
        <TechMarquee />
        <div className="relative flex flex-col items-center">
          <SkillTrailStep side="left" icon={Code2} title="Foundations" skills={['HTML5', 'CSS3', 'Modern JS', 'Basics']} level={40} />
          <SkillTrailStep side="right" icon={Layout} title="Frontend Development" skills={['React', 'Next.js', 'TailwindCSS', 'JavaScript']} level={95} />
          <SkillTrailStep side="left" icon={Server} title="Backend Development" skills={['Node.js','Express.js' ,'MongoDB','MySQL','PostgreSQL', 'Prisma','Java', 'REST API']} level={90} />
          <SkillTrailStep side="right" icon={Rocket} title="Deployment" skills={['Vercel', 'Netlify', 'Git', 'GitHub','Railway']} level={85} />
          <SkillTrailStep side="left" icon={Palette} title="Visual Design" skills={['Figma', 'UI/UX Design','Photo Editing', 'Graphic Design','Video Editing']} level={80} isLast={true} />
        </div>
      </div>

      <Testimonials />
      <BlogSection />
      <CTASection />

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-25%); } }
      `}</style>
    </div>
  );
}
