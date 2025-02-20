'use client';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function E2EE() {
  return (
    <div className="flex flex-col items-center min-h-screen py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          ماهو التشفير من الطرف الى الطرف؟
        </h1>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4">📱 كيف يعمل؟</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              التشفير من الطرف إلى الطرف (E2EE) هو نظام أمان متقدم يضمن أن تكون محادثاتك خاصة
              تماماً. عندما ترسل رسالة، يتم تشفيرها بشكل آمن على جهازك، وتبقى مشفرة حتى تصل إلى
              المستلم المقصود.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">🔐 الخصوصية المطلقة</h3>
              <p className="text-gray-700">
                حتى نحن كمزودي الخدمة لا يمكننا قراءة رسائلك. فقط أنت والشخص الذي تتحدث معه لديكما
                المفاتيح لفك تشفير المحادثة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">🛡️ حماية متكاملة</h3>
              <p className="text-gray-700">
                يحمي التشفير من الطرف إلى الطرف جميع أنواع المحتوى: النصوص، الصور، الملفات،
                والمكالمات الصوتية والمرئية.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-2xl">👤</div>
              <div className="text-3xl">↔️</div>
              <div className="text-2xl">🔒</div>
              <div className="text-3xl">↔️</div>
              <div className="text-2xl">👤</div>
            </div>
            <p className="text-lg font-medium text-gray-800">رسائلك مشفرة من البداية إلى النهاية</p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 underline"
          >
            الرئيسية
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
