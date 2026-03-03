import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Born Wild Made Free",
  description:
    "Sermons and Substack posts from Tyler Briggs — born wild in rebellion, made free in Christ.",
  metadataBase: new URL("https://bornwildmadefree.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl px-5 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
