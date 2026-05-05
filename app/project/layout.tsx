import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Chinmaya Swain's portfolio of software projects — including SnehAashram, Animal Food Hub, Khubsurat, YOGA_BABA, and his personal developer portfolio built with Next.js and TypeScript.",
  keywords: [
    "Chinmaya Swain Projects",
    "Software Developer Portfolio",
    "SnehAashram",
    "Animal Food Hub",
    "Khubsurat",
    "YOGA_BABA",
    "Next.js Portfolio",
    "React Projects",
    "Full Stack Projects",
    "Web Development Projects",
    "GitHub Projects",
  ],
  alternates: {
    canonical: "https://chinmaya-swain599.dev/project",
  },
  openGraph: {
    type: "website",
    url: "https://chinmaya-swain599.dev/project",
    title: "Projects | Chinmaya Swain — Full Stack Developer",
    description:
      "A curated collection of real-world web applications and projects built by Chinmaya Swain using React, Next.js, Node.js, MySQL, and more.",
    images: [
      {
        url: "/myimg.png",
        width: 1200,
        height: 630,
        alt: "Chinmaya Swain Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Chinmaya Swain — Full Stack Developer",
    description:
      "Browse real-world projects including web apps, API integrations, and full-stack solutions built by Chinmaya Swain.",
    images: ["/myimg.png"],
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
