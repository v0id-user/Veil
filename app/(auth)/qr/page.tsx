'use client';

import Image from 'next/image';
import Logo from '@/public/text-with-logo.svg';
import QRCode from '@/public/qr-code.png';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';
import { Info } from 'lucide-react';
import Link from 'next/link';

export default function QRPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 md:px-6">
      {/* Logo and download button */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl justify-between py-4 md:py-8 gap-4 md:gap-0">
        <Logo className="w-fit h-fit" />
        <Button
          className="py-3 md:py-5 px-6 md:px-11 text-lg md:text-xl font-bold w-full md:w-auto"
          onClick={() => window.open('/download', '_blank')}
        >
          تحميل التطبيق
        </Button>
      </div>

      {/* QR Box */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start w-full max-w-6xl bg-white rounded-xl shadow-sm border border-black p-6 md:p-12 mt-4 md:mt-8">
        {/* Instructions section */}
        <div className="flex-1 pt-10 md:pr-12 h-full mt-8 md:mt-0">
          <h1 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-right">
            يرجى مسح رمز QR الظاهر على الشاشة باستخدام التطبيق لإتمام العملية
          </h1>
          <ol
            className="text-gray-600 text-base md:text-lg space-y-3 md:space-y-4 list-decimal list-inside text-right"
            dir="rtl"
          >
            <li>افتح التطبيق.</li>
            <li>اضغط على &quot;الإعدادات&quot;.</li>
            <li>اختر &quot;إضافة جهاز&quot;.</li>
            <li>امسح رمز QR للتسجيل.</li>
          </ol>
        </div>

        {/* QR section */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6 w-full md:w-1/2 border-none md:border-r border-gray-100 md:pl-12">
          <Image
            src={QRCode}
            alt="QR Code"
            width={240}
            height={240}
            className="mb-2 md:mb-4 w-[200px] md:w-[280px]"
          />
          <div className="flex flex-row-reverse items-center gap-2">
            <Info className="w-4 h-4" />
            <Checkbox name="stay-logged-in">
              <span className="text-xs md:text-sm">الإستمرار في تسجيل الدخول لدى هذا المتصفح</span>
            </Checkbox>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-3 text-xs md:text-sm">
            <Link href="/regenerate-qr" className="text-gray-500 hover:text-gray-700 underline">
              رمز QR لايعمل؟
            </Link>
            {/* Email code page a.k.a /ec */}
            <Link href="/ec" className="text-gray-500 hover:text-gray-700 underline">
              التسجيل برمز التحقق
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
