'use client';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="flex-grow flex flex-col items-center p-5 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">الشروط والأحكام لـ veil</h1>
        <div className="max-w-3xl px-4 text-right">
          <p className="text-base md:text-lg mb-4">
            مرحباً بك في Veil. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.
          </p>

          <h2 className="text-xl font-bold mb-2 mt-6">1. شروط الاستخدام</h2>
          <p className="text-base md:text-lg mb-4">
            يجب أن تكون عمرك 13 عاماً على الأقل لاستخدام خدماتنا. أنت مسؤول عن الحفاظ على سرية حسابك
            وكلمة المرور الخاصة بك.
          </p>

          <h2 className="text-xl font-bold mb-2 mt-6">2. المحتوى المحظور</h2>
          <p className="text-base md:text-lg mb-4">
            يُحظر استخدام خدماتنا لنشر أي محتوى غير قانوني، مسيء، تهديدي، أو ينتهك حقوق الآخرين.
            نحتفظ بحق إنهاء الحسابات المخالفة.
          </p>

          <h2 className="text-xl font-bold mb-2 mt-6">3. الخصوصية والأمان</h2>
          <p className="text-base md:text-lg mb-4">
            نستخدم تشفير النهاية إلى النهاية لحماية محادثاتك. مع ذلك، أنت مسؤول عن أمان جهازك وكيفية
            مشاركة معلوماتك.
          </p>

          <h2 className="text-xl font-bold mb-2 mt-6">4. حدود المسؤولية</h2>
          <p className="text-base md:text-lg mb-4">
            نقدم خدماتنا &quot;كما هي&quot; دون أي ضمانات. لن نكون مسؤولين عن أي أضرار مباشرة أو غير
            مباشرة تنتج عن استخدام خدماتنا.
          </p>

          <h2 className="text-xl font-bold mb-2 mt-6">5. التعديلات</h2>
          <p className="text-base md:text-lg mb-4">
            نحتفظ بحق تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بالتغييرات الجوهرية.
          </p>
        </div>
        <div className="flex text-sm text-gray-500 underline mt-10 gap-10 hover:text-gray-700 transition-all duration-200">
          <Link href="/">الرئيسية</Link>
        </div>
      </div>
    </div>
  );
}
