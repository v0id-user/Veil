'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/Button';

const faqItems = [
  {
    question: 'لا يمكنني تسجيل الدخول، ماذا أفعل؟',
    answer:
      'يرجى التأكد من صحة بريدك الإلكتروني وكلمة المرور. إذا كنت قد نسيت كلمة المرور، يمكنك استخدام خيار "نسيت كلمة المرور" لإعادة تعيينها. إذا استمرت المشكلة، يرجى الاتصال بفريق الدعم.',
  },
  {
    question: 'لم أتلق رسالة البريد الإلكتروني للتحقق، ماذا أفعل؟',
    answer:
      'يرجى التحقق من مجلد البريد غير المرغوب فيه أولاً. إذا لم تجد الرسالة، يمكنك طلب إعادة إرسال رسالة التحقق من صفحة تسجيل الدخول. عادةً ما تصل الرسالة في غضون دقائق قليلة.',
  },
  {
    question: 'هل هذا المشروع مفتوح المصدر؟',
    answer:
      'نعم، هذا مشروع مفتوح المصدر! يمكنك الاطلاع على الكود المصدري والمساهمة في التطوير عبر [مستودع GitHub](https://github.com/v0id-user/veil)',
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col items-center gap-8 w-full p-8 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-12">الاسئلة الشائعة و مركز المساعدة</h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-200 rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="flex items-center justify-between w-full text-lg font-semibold p-6 hover:bg-gray-50">
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: 180 }}
                initial={{ rotate: 0 }}
                exit={{ rotate: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                className="ml-4"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </AccordionTrigger>
            <AccordionContent>
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                  }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: {
                      duration: 0.3,
                      ease: 'easeInOut',
                    },
                    opacity: {
                      duration: 0.2,
                      delay: 0.1,
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-6 text-base bg-gray-50">
                    <ReactMarkdown
                      components={{
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {item.answer}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              </AnimatePresence>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* Horizontal line */}
      <div className="w-full h-[1px] bg-gray-300 my-12"></div>
      {/* Contact Us */}
      <div className="flex flex-col items-center gap-6 w-full p-8">
        <h2 className="text-3xl font-bold text-center">تواصل معنا</h2>
        <p className="text-center text-gray-600 max-w-2xl">
          لديك سؤال آخر؟ يرجى الاتصال بنا عبر البريد الإلكتروني أو الاتصال بنا من خلال الوسائط
          الاجتماعية.
        </p>
        {/* Contact Us Form */}
        <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="email"
            placeholder="البريد الإلكتروني"
          />
          <Textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="الرسالة"
          />
          <Button className="px-28 font-bold py-2">إرسال</Button>
        </div>
      </div>
      <div className="flex text-sm text-gray-500 underline mt-10 gap-10 hover:text-gray-700 transition-all duration-200 ">
        <Link href="/">الرئيسية</Link>
      </div>
    </div>
  );
}
