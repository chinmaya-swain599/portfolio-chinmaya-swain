import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Chinmaya Swain — a full-stack developer available for freelance projects, collaborations, and job opportunities. Send a message and I'll get back to you quickly.",
  keywords: [
    "Contact Chinmaya Swain",
    "Hire Full Stack Developer",
    "Freelance Developer India",
    "Web Developer Contact",
    "React Developer for Hire",
    "Next.js Developer",
    "Software Engineer Contact",
    "Collaboration",
  ],
  alternates: {
    canonical: "https://chinmaya-swain599.dev/contact",
  },
  openGraph: {
    type: "website",
    url: "https://chinmaya-swain599.dev/contact",
    title: "Contact | Chinmaya Swain — Let's Build Together",
    description:
      "Have a project idea? Let's collaborate. Reach out to Chinmaya Swain for freelance work, consulting, or a full-time opportunity.",
    images: [
      {
        url: "/myimg.png",
        width: 1200,
        height: 630,
        alt: "Contact Chinmaya Swain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Chinmaya Swain | Let's Build Together",
    description:
      "Available for freelance projects, collaborations, and new opportunities. Drop a message and let's create something great.",
    images: ["/myimg.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
