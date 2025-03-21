'use client';

import { useRouter } from 'next/navigation';
// import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from './ui/button';

export default function SignUpButton() {
    const router = useRouter();


    const handleSignUp = () => {
        router.push('/sign-up');
    };

  return (
      <Button onClick={handleSignUp} className="bg-[#e50914] hover:bg-[#db0518] text-white font-normal px-10 max-sm:px-8 py-[9px] max-sm:py-[6px] text-lg max-sm:text-normal rounded">Join Now</Button>
  )
}
