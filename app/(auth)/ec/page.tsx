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
import Checkbox from '@/components/Checkbox';
import { Info } from 'lucide-react';

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
          <h1 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
            قم بإدخال الكود الذي استلمته على بريدك الإلكتروني
          </h1>
          <span className="text-gray-500 text-sm block mb-8">
            يرجى التحقق من بريدك الإلكتروني hey@example.com، فقد تم إرسال رسالة تحتوي على رمز التحقق
            لربط حسابك. إذا لم تجدها في البريد الوارد، يرجى مراجعة مجلد البريد العشوائي أو المهملات.
          </span>

          <div className="flex flex-col w-full items-center space-y-6">
            <div dir="ltr">
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
            </div>

            <div className="flex flex-row-reverse items-center gap-2">
              <Info className="w-4 h-4" />
              <Checkbox name="stay-logged-in">
                <span className="text-xs md:text-sm">
                  الإستمرار في تسجيل الدخول لدى هذا المتصفح
                </span>
              </Checkbox>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3 text-xs md:text-sm">
              <Link href="/regenerate-ec" className="text-gray-500 hover:text-gray-700 underline">
                لم يصلني رمز التحقق
              </Link>
              <Link href="/qr" className="text-gray-500 hover:text-gray-700 underline">
                التسجيل برمز QR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
