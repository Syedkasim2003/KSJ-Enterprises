import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = { variable: "font-sans" };
const jakarta = { variable: "font-sans" };

export const metadata: Metadata = {
  title: "KSJ Enterprises | Professional Business & Industrial Solutions",
  description: "A leading provider of high-quality industrial and business solutions. We deliver excellence and trust.",
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, jakarta.variable, "font-sans antialiased bg-background text-foreground")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
