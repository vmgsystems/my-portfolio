import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Gilberto Pina",
  description: "Get in touch for architectural audits, canary launches, and interim engineering leadership.",
  openGraph: {
    title: "Contact | Gilberto Pina",
    description: "Get in touch for architectural audits, canary launches, and interim engineering leadership.",
    url: "https://gilbertopina.com/contact",
    images: [
      {
        url: "/contact-bg.png",
        width: 1200,
        height: 630,
        alt: "Contact - Gilberto Pina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Gilberto Pina",
    description: "Get in touch for architectural audits, canary launches, and interim engineering leadership.",
    images: ["/contact-bg.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
