'use client';

import { usePathname } from 'next/navigation';

export default function AuthLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSignUp = pathname === '/sign-up';

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen" dir="rtl" lang="ar">
        <div className="flex flex-col items-center justify-center w-full h-full pt-24 pr-14">
          {children}
        </div>
        {/* Show image only on sign-up page */}
        {isSignUp && (
          <div className="hidden lg:block bg-[url('/show.png')] bg-cover bg-center w-full h-screen rounded-tr-3xl rounded-br-3xl" />
        )}
      </div>
    </>
  );
}
