import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Chinmaya Swain — a passionate full-stack software engineer with experience in React, Next.js, Node.js, TypeScript, and more. Discover his skills, journey, and professional evolution.",
  keywords: [
    "About Chinmaya Swain",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Developer Journey",
    "Skill Trail",
    "Portfolio About Page",
  ],
  alternates: {
    canonical: "https://chinmaya-swain599.dev/about",
  },
  openGraph: {
    type: "website",
    url: "https://chinmaya-swain599.dev/about",
    title: "About Chinmaya Swain | Full Stack Developer",
    description:
      "Chinmaya Swain is a passionate full-stack engineer who builds clean, scalable digital solutions. Explore his skills, journey, and experience.",
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
    title: "About Chinmaya Swain | Full Stack Developer",
    description:
      "Full-stack engineer specializing in React, Next.js, Node.js, and TypeScript. Discover the skill trail and professional journey.",
    images: ["/myimg.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
