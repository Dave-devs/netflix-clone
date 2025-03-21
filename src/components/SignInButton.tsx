'use client';

import { useRouter } from 'next/navigation';
// import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from './ui/button';

export default function SignInButton() {
    const router = useRouter();


    const handleSignIn = () => {
        router.push('/sign-in');
    };

  return (
      <Button onClick={handleSignIn} variant="outline" className="border-gray-400 text-gray-200 font-normal px-6 max-sm:px-5 py-[9px] max-sm:py-[6px] text-lg max-sm:text-normal rounded">Sign In</Button>
  )
}
