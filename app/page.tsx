"use client"
import Button from "@/components/Button";
import Nav from "@/components/Nav";
import HeroText from "@/public/hero-text-lazy.svg"
import ArrowDownToLine from "@/public/icons/arrow-down-to-line.svg"
import PreviewMessages from "@/public/preview-messages.svg"
import PreviewWide from "@/public/preview-wide.svg"
import { motion } from "motion/react"

export default function Home() {
  return (
    <main className="min-h-screen mx-4 sm:mx-14 ">
      <Nav />
      <section className="flex flex-col items-center 
                          aspect-[2.2/1] my-5 justify-center 
                          bg-[url('/cozy-1.png')] bg-cover bg-center 
                          rounded-[25px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 rounded-[25px]"></div>
        <div className="flex z-10 gap-16">
          <div 
            className="flex flex-col"
          >
            <HeroText />
            <div className="flex items-center gap-2">
              <Button className="flex items-center gap-2 w-fit text-xl py-3">
                <ArrowDownToLine />
                تحميل الان
              </Button>
              <Button variant="secondary" className="flex items-center gap-2 w-fit text-xl py-3">
                تسجيل الدخول
              </Button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PreviewMessages />
          </motion.div>
        </div>
      </section>
      <span className="text-right text-sm text-gray-500 mr-3">*يخضع استخدام جميع الخدمات للشروط والأحكام.</span>
      <div className="mt-10 w-full h-fit flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <PreviewWide />
        </motion.div>
      </div>
    </main>
  );
}
