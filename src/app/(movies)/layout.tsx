import { Metadata } from "next";
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Movies | Netflix Clone Site",
  description: "Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.",
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
    
  );
}
