'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="flex-grow flex flex-col items-center p-5 mt-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">حول veil</h1>
        <div className="max-w-3xl px-4 text-right">
          <p className="text-base md:text-lg mb-4">
            خدمة الدردشة Veil هي مشروع شخصي تم تطويره باستخدام تقنيات حديثة مثل Next.js و Django مع
            Django Rest Framework (DRF). يعتمد النظام على التشفير من النهاية إلى النهاية (E2EE)
            لضمان خصوصية تامة للمحادثات بين المستخدمين.
          </p>
          <p className="text-base md:text-lg mb-4">
            تم تصميم هذه الخدمة لتكون أداة مفيدة وسهلة الاستخدام، توفر وسيلة آمنة للتواصل بين
            الأفراد. تهدف هذه الخدمة إلى أن تكون أداة عملية للأشخاص الذين يبحثون عن تواصل شخصي في
            بيئة محمية.
          </p>
          <p className="text-base md:text-lg mb-4">
            نظرًا لأن هذه الخدمة هي مشروع شخصي يتم تشغيله بتكاليف منخفضة للغاية، فإنها تهدف إلى
            تقديم تجربة أساسية وبسيطة في بيئة آمنة.
          </p>
          <p className="text-base md:text-lg mb-4">
            هذه الخدمة تعتبر فرصة رائعة لتجربة تقنية E2EE والتفاعل مع أدوات مثل Next.js و Django.
            يمكن استخدامها بأمان للعديد من الأغراض اليومية البسيطة.
          </p>
          <p className="text-base md:text-lg">
            أنا فخور جدًا بهذا المشروع وأعتبره خطوة نحو تطوير مهاراتي في بناء التطبيقات الحديثة
            باستخدام microfrontends والأنظمة الموزعة.
          </p>
        </div>
        <div className="flex text-sm text-gray-500 underline mt-10 gap-10 hover:text-gray-700 transition-all duration-200">
          <Link href="https://github.com/v0id-user/veil" target="_blank">
            الكود المصدري
          </Link>
          <Link href="https://x.com/v0id_user" target="_blank">
            حسابي الشخصي عبر منصة X
          </Link>
          <Link href="/">الرئيسية</Link>
        </div>
      </div>
    </div>
  );
}
