import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chinmaya-swain599.dev"), // update with your real domain when deployed
  title: {
    default: "Chinmaya Swain | Full Stack Developer Portfolio",
    template: "%s | Chinmaya Swain",
  },
  description:
    "Chinmaya Swain is a full-stack software developer specializing in React, Next.js, Node.js, and modern web technologies. Building clean, scalable, and high-impact digital solutions.",
  keywords: [
    "Chinmaya Swain",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer Portfolio",
    "Web Developer India",
    "Frontend Developer",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio Website",
  ],
  authors: [{ name: "Chinmaya Swain", url: "https://github.com/chinmaya-swain599" }],
  creator: "Chinmaya Swain",
  publisher: "Chinmaya Swain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chinmaya-swain599.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chinmaya-swain599.dev",
    siteName: "Chinmaya Swain Portfolio",
    title: "Chinmaya Swain | Full Stack Developer Portfolio",
    description:
      "Full-stack software developer building clean, scalable, and high-impact web applications with React, Next.js, Node.js and more.",
    images: [
      {
        url: "/myimg.png",
        width: 1200,
        height: 630,
        alt: "Chinmaya Swain - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinmaya Swain | Full Stack Developer Portfolio",
    description:
      "Full-stack developer building clean, scalable, high-impact web products. React • Next.js • Node.js • TypeScript.",
    images: ["/myimg.png"],
    creator: "@chinmaya_swain",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >

          <Navbar />

          <main className=" flex-grow">
            {children}
          </main>

          <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}