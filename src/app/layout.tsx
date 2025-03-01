import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Movies | Netflix Clone Site",
  description: "Stream movies and TV shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${inter.className} leading-8`}
      >
        {children}
      </body>
    </html>
  );
}
