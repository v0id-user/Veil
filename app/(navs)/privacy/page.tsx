'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="flex-grow flex flex-col items-center p-5 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">سياسة الخصوصية لـ veil</h1>
        <div className="max-w-3xl px-4 text-right">
          <p className="text-base md:text-lg mb-4">
            نحن في Veil نلتزم بحماية خصوصيتك وأمان بياناتك. يوضح بيان الخصوصية هذا كيفية جمع
            واستخدام وحماية معلوماتك الشخصية.
          </p>
          <p className="text-base md:text-lg mb-4">
            نقوم بجمع بعض البيانات التشخيصية ومقاييس الأداء لتحسين خدماتنا وضمان تجربة مستخدم سلسة.
            تشمل هذه البيانات معلومات تقنية مثل عنوان IP الخاص بك ومعرّفات الجهاز، والتي نستخدمها
            حصرياً لأغراض الأمان وحماية منصتنا من الاستخدام غير المصرح به.
          </p>
          <p className="text-base md:text-lg mb-4">
            جميع الرسائل المتبادلة عبر منصتنا محمية بتشفير النهاية إلى النهاية (E2EE)، مما يعني أنه
            لا يمكن لأحد، بما في ذلك فريقنا، الوصول إلى محتوى محادثاتك. ومع ذلك، تظل البيانات
            الوصفية مثل أسماء المجموعات وأوقات الإرسال مرئية لأغراض تشغيلية.
          </p>
          <p className="text-base md:text-lg mb-4">
            نحتفظ بالبيانات المخزنة في قواعد بياناتنا، بما في ذلك الرسائل المشفرة، لمدة 7 أيام فقط
            لأغراض الاسترجاع. بعد هذه الفترة، يتم حذف جميع البيانات تلقائياً بشكل نهائي ولا يمكن
            استعادتها.
          </p>
          <p className="text-base md:text-lg">
            نستخدم عنوان بريدك الإلكتروني فقط للأغراض الأمنية الضرورية، مثل التحقق من الهوية وإرسال
            إشعارات الأمان الهامة. نحن نلتزم بعدم مشاركة أو بيع معلوماتك الشخصية لأي طرف ثالث.
          </p>
        </div>
        <div className="flex text-sm text-gray-500 underline mt-10 gap-10 hover:text-gray-700 transition-all duration-200">
          <Link href="/">الرئيسية</Link>
        </div>
      </div>
    </div>
  );
}
