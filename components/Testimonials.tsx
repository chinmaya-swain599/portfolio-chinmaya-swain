"use client";

import React from "react";
import { cn } from "@/lib/utils";

const testimonials =[
  {
    quote:
      "Chinmaya showed strong dedication during his internship and quickly adapted to modern development practices. He is eager to learn and improves consistently.",
    name: "Srutiranjan N.",
    role: "Senior Developer",
    company: "Seeree",
    avatar: "/Srutiranjan.jpeg",
    rating: 4,
  },
  {
    quote:
      "He worked well with the team and contributed to building responsive UI components. His learning attitude makes him a promising developer.",
    name: "Subham sidhartha",
    role: "Webdevloper",
    company: "Trackepay",
    avatar: "/Subham.jpeg",
    rating: 4,
  },
  {
    quote:
      "Chinmaya helped me with a small web project and delivered a clean and responsive design. Communication was smooth and work was on time.",
    name: "Bishnu P.",
    role: "Client",
    company: "Freelance",
    avatar: "/Bishnu.png",
    rating: 5,
  },
  {
    quote:
      "He has a good sense of UI/UX and understands requirements well. The project he worked on for me was simple but effective.",
    name: "Jyatirmoy D.",
    role: "Client",
    company: "Personal Project",
    avatar: "/Jyatirmoy.jpeg",
    rating: 4,
  },
  {
    quote:
      "I’ve seen Chinmaya grow as a developer. He is focused, hardworking, and always ready to learn new technologies.",
    name: "Mihir M.",
    role: "Client",
    company: "SnehAashram",
    avatar: "/Mihir.png.jpeg",
    rating: 4,
  },
  {
    quote:
      "He is good at both design and development. His UI ideas and project work are really impressive for a growing developer.",
    name: "Ashish",
    role: "Friend",
    company: "College",
    avatar: "/Ashish.jpeg",
    rating: 5,
  }
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg 
          key={i} 
          className={cn(
            "w-3.5 h-3.5",
            i < count ? "text-amber-400 fill-current" : "text-gray-200 dark:text-white/10 fill-current"
          )} 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="
      flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px]
      mx-3 sm:mx-4 p-6 sm:p-8 rounded-[2rem]
      bg-white dark:bg-[#111118]
      border border-gray-100 dark:border-white/[0.05]
      shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]
      dark:shadow-none
      cursor-default select-none
      transition-all duration-500
      hover:scale-[1.02]
      hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.15)]
      dark:hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.1)]
      hover:border-indigo-500/20 dark:hover:border-indigo-500/30
      hover:-translate-y-2
      group/card
    ">
      <div className="flex justify-between items-start mb-6">
        <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <StarRating count={t.rating} />
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 italic">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/20 group-hover/card:border-indigo-500 transition-colors">
            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900 dark:text-white group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors">{t.name}</p>
          <p className="text-[11px] font-medium text-gray-500 dark:text-gray-500 uppercase tracking-widest">
            {t.role} {t.company ? `· ${t.company}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}


export default function Testimonials() {
  const [isPaused, setIsPaused] = React.useState(false);
  const looped = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative z-10 w-full py-16 md:py-24 bg-white dark:bg-[#0a0d1a] transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/5 dark:bg-indigo-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-5">
          <span className="text-xs font-semibold tracking-wider uppercase text-black/60 dark:text-white/60">
            Testimonials
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
          What People Say{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            About Me
          </span>
        </h2>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Feedback from clients and collaborators who have seen my{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">code</span>,{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">communication</span>, and{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">consistency</span> in action.
        </p>
      </div>

      <div 
        className="relative w-full overflow-hidden group/track touch-pan-y cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 md:w-64 bg-gradient-to-r from-white dark:from-[#0a0d1a] via-white/80 dark:via-[#0a0d1a]/80 to-transparent z-[11] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 md:w-64 bg-gradient-to-l from-white dark:from-[#0a0d1a] via-white/80 dark:via-[#0a0d1a]/80 to-transparent z-[11] pointer-events-none" />

        <div
          className="flex py-10"
          style={{ 
            animation: "testimonialScroll 50s linear infinite",
            width: 'fit-content',
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {looped.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

    </section>
  );
}
