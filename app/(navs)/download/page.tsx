'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Download() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('يرجى إدخال البريد الإلكتروني.');
      return;
    }
    setErrorMessage(null);
    // Handle email submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" dir="rtl" lang="ar">
      <h1 className="text-4xl font-bold mb-6">انضم إلى قائمة الانتظار</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
        نحن نعمل بجد على تطوير تطبيقات تدعم جميع المنصات الرئيسية، سواء على الحاسوب أو الهاتف
        المحمول. سجل بريدك الإلكتروني لتكون من أوائل المختبرين وتجربة تطبيقاتنا قبل إطلاقها للجمهور.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">ويندوز</span>
          <span className="text-gray-400">قريباً</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">ماك</span>
          <span className="text-gray-400">قريباً</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">لينكس</span>
          <span className="text-gray-400">قريباً</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">آيفون</span>
          <span className="text-gray-400">قريباً</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">أندرويد</span>
          <span className="text-gray-400">قريباً</span>
        </div>
      </div>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="البريد الإلكتروني"
          className="border border-black rounded-full p-4 w-full"
        />
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
        <Button className="w-full px-20 py-4 font-bold min-h-[56px]" type="submit">
          انضم الآن
        </Button>
      </form>
      <div className="flex text-sm text-gray-500 underline mt-10 gap-10 hover:text-gray-700 transition-all duration-200">
        <Link href="/">الرئيسية</Link>
      </div>
    </div>
  );
}
