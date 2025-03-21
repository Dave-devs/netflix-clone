"use client";

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    redirect("/sign-up");
  }

  return (
    <div>
      <p className="text-white">{user.firstName}</p>
    </div>
  );
}
