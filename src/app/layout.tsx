import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Davedevs | Netflix Clone",
  description: "Stream movies and TV shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body className={`${inter.className} leading-8 bg-[#181818] text-white font-inter`}>
            {children}
          </body>
        </html>
      </ReactQueryProvider>
    </ClerkProvider>
  );
}
