import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project-Test-Rootcode",
  description: "A test app created for testing the functionality of mongodb.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth selection:bg-primary/40">
      <body className={cn("antialiased", inter.className)}>
        <Navbar />
        <main className="relative flex min-h-[calc(100vh-5rem-2px)] flex-col">
          <div className="flex-1 flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
