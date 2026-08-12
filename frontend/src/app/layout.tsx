import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urdu Mental Health AI Companion",
  description: "Anonymous CBT Therapy & Crisis Safety AI Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ur">
      <body className="antialiased">{children}</body>
    </html>
  );
}
