"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What kind of projects do you work on?",
      answer: "I specialize in building performance-driven web applications, custom SaaS platforms, and interactive user interfaces. I love taking complex problems and turning them into scalable digital solutions."
    },
    {
      question: "Are you available for freelance or contract work?",
      answer: "Yes! I am currently available for new projects. Whether you're looking for a short-term consultation or a long-term development partner, feel free to reach out."
    },
    {
      question: "What's your typical workflow or process?",
      answer: "My process usually involves four main phases: Discovery & Planning, Design & Prototyping, Development & Testing, and finally Deployment & Optimization. I prioritize clear communication at every step."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Timeline varies depending on the complexity and scope. A standard landing page might take 1-2 weeks, while a full-scale web application can take several months. I provide detailed estimates after our initial discovery call."
    }
  ];

  return (
    <section className="relative py-14 md:py-20 bg-white dark:bg-[#0a0a0c] text-gray-950 dark:text-white transition-colors duration-500 overflow-hidden font-sans">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/5 dark:bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* 🕺 Left Dancing Card — Absolutely positioned beside accordion */}
      <div className="absolute left-2 xl:left-8 top-[55%] -translate-y-1/2 hidden xl:block animate-bounce z-10"
        style={{ animationDuration: "2000ms" }}>
        <div className="w-[160px] h-[160px] bg-gray-100 dark:bg-gray-950 rounded-2xl border-2 border-gray-200 dark:border-white/10 overflow-hidden rotate-[-12deg] shadow-2xl p-2">
          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-900">
            <img src="/project1.png" className="w-full h-full object-cover" alt="side-left" />
          </div>
        </div>
      </div>

      {/* 🕺 Right Dancing Card — Absolutely positioned beside accordion */}
      <div className="absolute right-2 xl:right-8 top-[65%] -translate-y-1/2 hidden xl:block animate-bounce z-10"
        style={{ animationDuration: "2200ms", animationDelay: "200ms" }}>
        <div className="w-[160px] h-[160px] bg-gray-100 dark:bg-gray-950 rounded-2xl border-2 border-gray-200 dark:border-white/10 overflow-hidden rotate-[12deg] shadow-2xl p-2">
          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-900">
            <img src="/project2.png" className="w-full h-full object-cover" alt="side-right" />
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4 mb-8 sm:mb-12 relative">
          <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 px-4">
            Answers to common questions about how I work
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[5rem] font-bold text-gray-950 dark:text-white tracking-tight leading-[1.1] sm:leading-[1]">
            Frequently Asked <br className="hidden sm:block" />
            Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="border-t border-gray-100 dark:border-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 dark:border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 sm:py-6 flex items-center justify-between text-left group"
              >
                <span className={cn(
                  "text-base sm:text-lg md:text-2xl font-bold tracking-tight transition-colors pr-3 sm:pr-4",
                  openIndex === index
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-950 dark:text-white/90 group-hover:text-gray-700 dark:group-hover:text-white"
                )}>
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-7 h-7 text-blue-600 dark:text-blue-400" strokeWidth={1} />
                  ) : (
                    <Plus className="w-7 h-7 text-gray-400 dark:text-white/30 group-hover:text-gray-950 dark:group-hover:text-white transition-colors" strokeWidth={1} />
                  )}
                </div>
              </button>

              <div className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                openIndex === index ? "max-h-[300px] pb-6 opacity-100" : "max-h-0 opacity-0"
              )}>
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
