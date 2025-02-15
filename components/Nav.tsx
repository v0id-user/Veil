'use client';

import Link from '@/components/Link';
import Button from '@/components/Button';
import TextWithLogo from '@/public/text-with-logo.svg';
import Logo from '@/public/logo.svg';
import ArrowDownToLine from '@/public/icons/arrow-down-to-line.svg';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between p-5">
      {/* Mobile Menu Button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Logo */}
      <div className="hidden lg:block">
        <TextWithLogo />
      </div>
      <div className="lg:hidden">
        <Logo />
      </div>

      {/* Links - Desktop */}
      <div className="hidden lg:flex items-center gap-10">
        <Link href="/about">حول</Link>
        <Link href="/privacy">الخصوصية</Link>
        <Link href="/faq">مركز المساعدة</Link>
        <Link href="/download">التطبيقات</Link>
      </div>

      {/* CTAs Buttons - Desktop */}
      <div className="hidden lg:flex items-center gap-4">
        <Button href="/download">التحميل الان</Button>
        <Button variant="secondary" href="/sign-in">
          تسجيل الدخول
        </Button>
      </div>

      {/* Mobile Download Button */}
      <div className="lg:hidden">
        <Button href="/download" className="flex items-center gap-2">
          <ArrowDownToLine />
          تحميل
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 lg:hidden z-50"
        >
          <Link href="/about">حول</Link>
          <Link href="/privacy">الخصوصية</Link>
          <Link href="/faq">مركز المساعدة</Link>
          <Link href="/download">التطبيقات</Link>
          <Button variant="secondary" href="/sign-in">
            تسجيل الدخول
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
