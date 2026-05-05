"use client";

import { useState } from 'react';
import { Send, MapPin, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const WEB3FORMS_KEY = "026b37c3-9fdd-4efc-aefd-6b62ecdf2c19";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#020202] pt-24 md:pt-32 pb-24 px-4 sm:px-6 overflow-x-hidden selection:bg-indigo-500/30 transition-colors duration-700">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 dark:bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-400/5 dark:bg-purple-600/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div id="contact-form" className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24 scroll-mt-32">
        
        {/* Left Side: Text and Information */}
        <div className="flex-1 space-y-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-white" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-black/80 dark:text-white/80">CONTACT</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-700 dark:text-emerald-400">AVAILABLE FOR WORK</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black dark:text-white tracking-tight mb-3 sm:mb-4 leading-tight">
              Let&apos;s start a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">project together</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black/60 dark:text-white/60 max-w-md leading-relaxed">
              Have an idea or a project in mind? Reach out to me directly or fill out the form, and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:chinmayaswain207@gmail.com" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all flex-shrink-0">
                <Mail className="w-5 h-5 text-black dark:text-white group-hover:text-indigo-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-black/50 dark:text-white/50 uppercase tracking-widest mb-1">Email</p>
                <p className="text-base sm:text-lg font-semibold text-black dark:text-white">chinmayaswain207@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-5 p-4 rounded-2xl group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 flex-shrink-0">
                <MapPin className="w-5 h-5 text-black dark:text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-black/50 dark:text-white/50 uppercase tracking-widest mb-1">Location</p>
                <p className="text-base sm:text-lg font-semibold text-black dark:text-white">India —BHUBANESWAR</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-black/10 dark:border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-4">I can help you with</h3>
            <div className="flex flex-wrap gap-2">
              {['Frontend Development', 'Backend Architecture', 'UI/UX Design', 'Performance Optimization', 'Project Consultation'].map((skill, i) => (
                <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-default hover:scale-105 active:scale-95 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Developer Identity Terminal */}
          <div className="pt-6 border-t border-black/10 dark:border-white/10">
            <div className="relative group rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] hover:-translate-y-1">
              <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs font-mono text-white/50">developer_status.json</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <pre className="text-gray-300 relative z-10 text-xs sm:text-sm">
                  <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
                  {'\n'}  <span className="text-gray-500">// Currently seeking new opportunities</span>
                  {'\n'}  status: <span className="text-green-400">&quot;Available for work&quot;</span>,
                  {'\n'}  location: <span className="text-green-400">&quot;Remote / Global&quot;</span>,
                  {'\n'}  coffeeConsumed: <span className="text-orange-400">&quot;100%&quot;</span>,
                  {'\n'}  fastResponse: <span className="text-purple-400">true</span>
                  {'\n'}{'}'};
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1">
          <div className="bg-purple-100/90 dark:bg-purple-900/20 backdrop-blur-3xl p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] border-2 border-purple-300 dark:border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.3)] dark:shadow-[0_0_40px_rgba(168,85,247,0.2)] group relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_80px_rgba(168,85,247,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Success State */}
            {status === "success" && (
              <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center animate-[float_3s_ease-in-out_infinite]">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-black dark:text-white">Message Sent!</h3>
                <p className="text-black/60 dark:text-white/60 max-w-xs leading-relaxed">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-bold hover:scale-105 transition-transform"
                >
                  Send Another
                </button>
              </div>
            )}

            {/* Form State */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5 sm:space-y-6">
                
                {/* Error Banner */}
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-bold text-purple-900 dark:text-white/80 pl-1">What&apos;s your name?</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white/80 dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 outline-none focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/30 text-black dark:text-white transition-all duration-300 placeholder:text-purple-300 dark:placeholder:text-white/30 hover:bg-white dark:hover:bg-purple-500/10 shadow-inner text-sm sm:text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-purple-900 dark:text-white/80 pl-1">What&apos;s your email?</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white/80 dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 outline-none focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/30 text-black dark:text-white transition-all duration-300 placeholder:text-purple-300 dark:placeholder:text-white/30 hover:bg-white dark:hover:bg-purple-500/10 shadow-inner text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-purple-900 dark:text-white/80 pl-1">What&apos;s your message?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white/80 dark:bg-black/40 border border-purple-200 dark:border-purple-500/20 outline-none focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/30 text-black dark:text-white transition-all duration-300 placeholder:text-purple-300 dark:placeholder:text-white/30 hover:bg-white dark:hover:bg-purple-500/10 resize-none shadow-inner text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 sm:py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-purple-500/25 relative overflow-hidden group/btn disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
                </button>

                <p className="text-center text-xs text-black/40 dark:text-white/30 pt-1">
                  Powered by Web3Forms · Your data is safe 🔒
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
