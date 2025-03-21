"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/nextjs";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";
import {redirect} from "next/navigation"

export default function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    redirect("/sign-up")
  }

  return (
    <nav className="flex justify-between items-center w-full px-6 md:px-4 sm:px-2 py-2 bg-[#141414] fixed z-50 right-0 top-0 left-0 font-inter">
      {/* ********** Left Side ********** */}
      <div className="flex flex-row items-center gap-2">
        <Link href="/">
          <Image
            src={"/images/logo1.png"}
            alt="logo"
            width={34}
            height={34}
            className="hidden max-sm:block cursor-pointer shrink-0"
          />
        </Link>
        <Link href="/">
          <Image
            src={"/images/logo2.png"}
            alt="logo"
            width={100}
            height={60}
            className="block max-sm:hidden cursor-pointer shrink-0"
          />
        </Link>
      </div>

      {/* ********** Right Side ********** */}
      <div className="flex flex-row items-center gap-2">
        <div className="block font-normal text-white text-sm max-sm:hidden">
          UNLIMITED TV SHOWS & MOVIES
        </div>
        {user ? (
          <div>
            <p className="text-white">{user.firstName}</p>
          </div>
        ) : (
          <div>
            <SignUpButton />
            <SignInButton />
          </div>
        )}
      </div>
    </nav>
  );
}
