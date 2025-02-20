'use client';

import Logo from '@/public/text-with-logo.svg';
import Button from '@/components/Button';
import Link from 'next/link';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

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
        {/* Code section */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6 w-full md:w-1/2 border-none md:border-r border-gray-100 md:pl-12">
          <h1>قم بإدخال الكود الذي استلمته على بريدك الإلكتروني</h1>
          <span className="text-gray-500 text-sm">
            يرجى التحقق من بريدك الإلكتروني hey@example.com، فقد تم إرسال رسالة تحتوي على رمز التحقق
            لربط حسابك. إذا لم تجدها في البريد الوارد، يرجى مراجعة مجلد البريد العشوائي أو المهملات.
          </span>

          <InputOTP maxLength={8}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>
          </InputOTP>

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
