import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-6 md:px-4 sm:px-2 py-2 bg-dark-1 fixed z-50 right-0 top-0 left-0 font-inter">
      {/* ********** Left Side ********** */}
      <div className="flex flex-row items-center gap-2">
        <Link href="/">
          <Image
            src={"/images/logo1.png"}
            alt="logo"
            width={34}
            height={34}
            className="hidden max-sm:block"
          />
        </Link>
        <Link href="/">
          <Image
            src={"/images/logo2.png"}
            alt="logo"
            width={100}
            height={60}
            className="block max-sm:hidden"
          />
        </Link>
      </div>
      
      {/* ********** Right Side ********** */}
      <div className="flex flex-row items-center gap-2">
        <div className="block font-normal text-white text-sm max-sm:hidden">
          UNLIMITED TV SHOWS & MOVIES
        </div>
        <Button className="bg-red-1 hover:bg-red-2 text-white font-normal px-10 max-sm:px-8 py-[9px] max-sm:py-[6px] text-lg max-sm:text-normal rounded">Join Now</Button>

        <Button variant="outline" className="border-gray-400 text-gray-200 font-normal px-6 max-sm:px-5 py-[9px] max-sm:py-[6px] text-lg max-sm:text-normal rounded">Sign In</Button>
      </div>
    </nav>
  );
}
