import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Tauqeer Nasir | Engineering Lead",
  description: "Seasoned Engineering Lead with 7+ years of experience in distributed systems, microservices, and fullstack development. Specialized in NodeJS, Go, Python, and React.",
  keywords: ["Muhammad Tauqeer Nasir", "Engineering Lead", "Fullstack Architect", "Software Engineer Dubai", "NodeJS Developer", "React Expert", "Distributed Systems"],
  authors: [{ name: "Muhammad Tauqeer Nasir" }],
  creator: "Muhammad Tauqeer Nasir",
  publisher: "Muhammad Tauqeer Nasir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tauqeernasir.com",
    siteName: "Muhammad Tauqeer Nasir Portfolio",
    title: "Muhammad Tauqeer Nasir | Engineering Lead",
    description: "Seasoned Engineering Lead with 7+ years of experience in distributed systems, microservices, and fullstack development.",
    images: [
      {
        url: "https://tauqeernasir.com/og-image.png", // TODO: add a real OG image later
        width: 1200,
        height: 630,
        alt: "Muhammad Tauqeer Nasir Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Tauqeer Nasir | Engineering Lead",
    description: "Seasoned Engineering Lead with 7+ years of experience in distributed systems.",
    creator: "@0xmalick",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
