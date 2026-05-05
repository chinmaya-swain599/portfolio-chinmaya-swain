
import { cn } from "@/lib/utils";

export default function CTASection() {
  return (
    <div className="relative w-full px-3 sm:px-4 md:px-8 py-8 sm:py-10 z-10">
      <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-50 dark:bg-[#111115] border border-black/5 dark:border-white/10 px-5 sm:px-6 py-10 sm:py-12 md:py-16 flex flex-col items-center text-center shadow-xl dark:shadow-none transition-colors duration-700">
        
        {/* Background Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 2px, transparent 0)`,
            backgroundSize: `48px 48px`,
            color: 'var(--dot-color, rgba(150, 150, 150, 0.4))'
          }}
        />

        {/* Floating Speech Bubbles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { text: 'UI/UX', top: '15%', left: '15%', variant: 'normal', delay: '0s' },
            { text: 'React', top: '45%', left: '10%', variant: 'glowing', delay: '1s' },
            { text: 'Next.js', top: '75%', left: '25%', variant: 'normal', delay: '2s' },
            { text: 'Node.js', top: '20%', left: '80%', variant: 'normal', delay: '0.5s' },
            { text: 'Git', top: '50%', left: '85%', variant: 'normal', delay: '1.5s' },
            { text: 'MERN', top: '75%', left: '70%', variant: 'normal', delay: '2.5s' },
          ].map((bubble, i) => (
            <div
              key={i}
              className={cn(
                "absolute px-4 sm:px-6 py-2 sm:py-3 rounded-[1.5rem] text-xs sm:text-sm font-medium border text-black dark:text-white backdrop-blur-md animate-[float_6s_ease-in-out_infinite] hidden sm:block",
                bubble.variant === 'glowing' 
                  ? "bg-indigo-500/10 border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.3)] dark:shadow-[0_0_30px_rgba(99,102,241,0.2)]" 
                  : "bg-white/50 dark:bg-zinc-800/50 border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md"
              )}
              style={{
                top: bubble.top,
                left: bubble.left,
                animationDelay: bubble.delay
              }}
            >
              <div className="relative z-10">{bubble.text}</div>
              {/* Speech bubble tail */}
              <div className={cn(
                "absolute -bottom-1.5 w-3 h-3 rotate-45 border-r border-b z-0",
                bubble.left.startsWith('1') || bubble.left.startsWith('2') ? "right-6" : "left-6",
                bubble.variant === 'glowing'
                  ? "bg-indigo-500/10 border-indigo-500/20 backdrop-blur-md"
                  : "bg-white dark:bg-zinc-800 border-black/5 dark:border-white/10"
              )} />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white tracking-tight leading-tight">
            Let&apos;s build something<br/>great together.
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/60 dark:text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
            I’m open to internships, freelance projects, and collaboration opportunities. Feel free to reach out — I’d love to work with you.
          </p>
          
          <div className="pt-5">
            <a href="/contact#contact-form" className="inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 group relative overflow-hidden">
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
