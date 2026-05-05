"use client";

import React from "react";
import { FaXTwitter, FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About Me", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Skills", href: "/about#skills" },
        { name: "Portfolio", href: "/project" },
      ],
    },
    {
      title: "Education",
      links: [
        { name: "NJSC", href: "#" },
        { name: "TRIDENT", href: "#" },
        { name: "USBM", href: "#" },
        { name: "SEEREE", href: "#" },
        { name: "TRACKEPAY", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "UI/UX Design", href: "#" },
        { name: "Full-Stack Dev", href: "#" },
        { name: "App Optimization", href: "#" },
        { name: "Consulting", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/chinmaya-swain599/" },
        { name: "GitHub", href: "https://github.com/chinmaya-swain599?tab=repositories" },
        { name: "Twitter / X", href: "https://x.com/chinmaya_swain" },
        { name: "Facebook", href: "https://www.facebook.com/share/1CdCpUwRWV/" },
        { name: "Instagram", href: "https://www.instagram.com/sky_arc09?igsh=Mzl1bGxuMDZjOGV6" },
      ],
    },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#030303] text-gray-900 dark:text-white pt-8 pb-6 overflow-hidden transition-all duration-500 border-t border-gray-100 dark:border-white/5">

      {/* 🔮 ENHANCED ADAPTIVE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">

        {/* Layer 1: Massive "CODER" Blue Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] dark:opacity-[0.08] overflow-hidden">
          <h1 className="text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[28rem] font-black tracking-tighter text-blue-500 uppercase leading-none select-none whitespace-nowrap">
            CODER
          </h1>
        </div>

        {/* Layer 2: Adaptive Mesh Glows (For Visibility in Dark Mode) */}
        <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full animate-pulse duration-[8000ms]"></div>
        <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/5 blur-[120px] rounded-full animate-pulse duration-[10000ms] delay-1000"></div>

        {/* Layer 3: Subtle Coding Overlay */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] font-mono text-[11px] text-blue-600 dark:text-blue-400">
          <div className="absolute top-10 left-10 rotate-[-10deg]">{"const view = 'enhanced';"}</div>
          <div className="absolute bottom-20 right-10 rotate-[15deg]">{"function code() { return 'visuals'; }"}</div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">

        {/* Top Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-lg sm:text-xl md:text-2xl shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-all duration-500">
                C
              </div>
              <div>
                <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase italic block leading-none">
                  Coder
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-blue-500 tracking-[0.2rem] sm:tracking-[0.3rem] uppercase mt-1 block">Portfolio</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium max-w-xs sm:max-w-sm leading-relaxed">
              Building user-friendly web applications while continuously learning and improving through real-world development.
            </p>
          </div>

          {/* Expanded Social Icons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com/chinmaya-swain599?tab=repositories" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/chinmaya-swain599/" },
              { icon: <FaXTwitter />, link: "https://x.com/chinmaya_swain" },
              { icon: <FaFacebookF />, link: "https://www.facebook.com/share/1CdCpUwRWV/" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/sky_arc09?igsh=Mzl1bGxuMDZjOGV6" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 hover:bg-blue-600 hover:text-white rounded-xl sm:rounded-2xl transition-all duration-500 text-lg sm:text-xl shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-6 text-left">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {(section.title === "Navigation" || section.title === "Social") ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-all text-base font-medium"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400 cursor-default hover:text-gray-950 dark:hover:text-white transition-all text-base font-medium">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ultra-Modern Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 order-2 md:order-1">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-500 mb-1">
                Design & Developed By
              </span>
              <span className="text-xl sm:text-2xl font-black italic tracking-tighter text-gray-900 dark:text-white">
                CHINMAYA<span className="text-blue-600">.</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end order-1 md:order-2">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
              <span>Made with</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span>in Odisha, India</span>
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-2">
              © 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
