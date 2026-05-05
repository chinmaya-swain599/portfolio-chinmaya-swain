"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setMounted(true);
    setActiveHash(window.location.hash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
    { name: "Skills", href: "/about#skills" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4 border-b border-gray-200/30 dark:border-gray-800/30 shadow-sm backdrop-blur-md",
      "bg-white/80 dark:bg-gray-950/80 text-gray-900 dark:text-white"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter">
          MY<span className="text-blue-500">PORTFOLIO</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
          {navLinks.map((link) => {
            const linkPath = link.href.split('#')[0];
            const linkHash = link.href.split('#')[1] ? `#${link.href.split('#')[1]}` : "";
            
            // Logic: Is Active if pathname matches AND hash matches (if link has one)
            // If link HAS NO hash, it's only active if pathname matches AND current activeHash is empty
            const isActive = pathname === linkPath && (linkHash ? activeHash === linkHash : activeHash === "");

            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setActiveHash(linkHash)}
                className={cn(
                  "relative transition-all duration-300 group",
                  isActive ? "text-blue-500" : "hover:text-blue-500 dark:hover:text-blue-400"
                )}
              >
                {link.name}
                {/* Active Indicator Underline */}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}

          
          {/* Light and dark mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 transition-all hover:scale-110 active:scale-90"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="text-yellow-400" size={18} />
              ) : (
                <Moon className="text-gray-700" size={18} />
              )
            ) : (
                <div className="w-[18px] h-[18px]" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center lg:hidden space-x-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="text-yellow-400" size={20} />
              ) : (
                <Moon className="text-gray-700" size={20} />
              )
            ) : (
                <div className="w-[20px] h-[20px]" />
            )}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-xl",
        isOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 py-0"
      )}>
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.includes('#') && pathname === link.href.split('#')[0]);
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className={cn(
                  "text-lg font-bold uppercase tracking-widest transition-all px-4 py-3.5 rounded-2xl",
                  isActive ? "text-blue-500 bg-blue-500/5 translate-x-1" : "hover:text-blue-500 hover:translate-x-1"
                )}
              >
                <div className="flex items-center gap-3">
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                  {link.name}
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}