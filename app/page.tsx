'use client';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import HeroText from '@/public/hero-text-lazy.svg';
import ArrowDownToLine from '@/public/icons/arrow-down-to-line.svg';
import PreviewMessages from '@/public/preview-messages.svg';
import PreviewWide from '@/public/preview-wide.svg';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Nav />
      <section
        className="flex mx-4 sm:mx-14 flex-col items-center 
                          min-h-[400px] sm:aspect-[2.2/1] my-5 justify-center 
                          bg-[url('/cozy-1.png')] bg-cover bg-center 
                          rounded-[25px] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 rounded-[25px]"></div>
        <div className="flex flex-col sm:flex-row z-10 gap-8 sm:gap-16 p-6 sm:p-0">
          <div className="flex flex-col gap-4">
            <div className="hidden sm:block">
              <HeroText />
            </div>
            <div className="sm:hidden flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-white">محادثاتك. آمنة.</h1>
              <h1 className="text-4xl font-bold text-white">الخصوصية. ببساطة.</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
              <Button
                className="flex items-center gap-2 w-fit text-lg sm:text-xl py-3"
                onClick={() => (window.location.href = '/download')}
              >
                <ArrowDownToLine />
                تحميل الان
              </Button>
              <Button
                variant="secondary"
                className="flex items-center gap-2 w-fit text-lg sm:text-xl py-3"
                onClick={() => (window.location.href = '/sign-up')}
              >
                تسجيل الدخول
              </Button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-auto"
          >
            <div
              className="hidden sm:block sm:hover:cursor-pointer"
              onClick={() => (window.location.href = '/e2ee')}
            >
              <PreviewMessages />
            </div>
          </motion.div>
        </div>
      </section>
      <span className="text-right mx-4 sm:mx-14 text-sm text-gray-500 mr-3">
        *يخضع استخدام جميع الخدمات{' '}
        <Link href="/terms" className="underline">
          للشروط والأحكام
        </Link>
        .
      </span>

      <div className="mt-10 gap-56 flex flex-col items-center justify-center w-full">
        <div className="w-full h-32 hidden lg:flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <PreviewWide />
          </motion.div>
        </div>
        <span className="text-center text-[32px] sm:text-[48px] w-full max-w-4xl px-4">
          طوّر تواصلك بحرية وأمان، مع رسائل مشفرة ومكالمات خاصة تضمن لك خصوصيتك وتبقيك قريباً من
          أحبائك أينما كانوا.
        </span>
        <Button
          className="text-[24px] sm:text-[32px] py-4 sm:py-5 px-6 sm:px-10"
          onClick={() => (window.location.href = '/sign-up')}
        >
          ابدأ بالتواصل الآن
        </Button>
      </div>
      <div className="w-full mt-24">
        <Footer />
      </div>
    </main>
  );
}
