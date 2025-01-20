import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-screen">

      {/* Navbar */}
      <nav className="flex flex-row justify-center space-x-7 w-full mt-14">
          <Link href="/about" className="text-gray-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-500 hover:after:w-full after:transition-all after:duration-300 font-light">حول</Link>
          <Link href="/pricing" className="text-gray-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-500 hover:after:w-full after:transition-all after:duration-300 font-light">الأسعار</Link>
          <Link href="https://www.github.com/v0id-user" className="text-gray-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-500 hover:after:w-full after:transition-all after:duration-300 font-light">قيت هوب</Link>
      </nav>

      {/* Main action */}
      <div className="flex flex-col items-center justify-center h-full w-full space-y-5">
        <Image src="/veil_logo_white.png" alt="veil logo" width={100} height={100} />
        <div className="rounded-full font-bold from-[#F3F3F3] to-[#D4D4D4] bg-gradient-to-b border border-[#E3E3E3] text-black px-10 py-3">
          إنشاء غرفة
        </div>
      </div>

      {/* Terms of service */}
      <div className="flex flex-row flex-wrap mb-5 space-x-5 justify-center font-light">
        <Link href="/terms" className="text-gray-500 font-light">الشروط والأحكام</Link>
        <span className="text-gray-500 font-light">•</span>
        <Link href="/privacy" className="text-gray-500 font-light">سياسة الخصوصية</Link>
        <span className="text-gray-500 font-light">•</span>
        <Link href="/acceptable-use" className="text-gray-500 font-light">سياسة الاستخدام المقبول</Link>
        <span className="text-gray-500 font-light">•</span>
        <Link href="/refund-cancellation" className="text-gray-500 font-light">سياسة الاسترداد والإلغاء</Link>
        <span className="text-gray-500 font-light">•</span>
        <Link href="/eula" className="text-gray-500 font-light">اتفاقية ترخيص المستخدم النهائي</Link>
        <span className="text-gray-500 font-light">•</span>
        <Link href="/security-policy" className="text-gray-500 font-light">سياسة الأمان</Link>
        <span className="text-gray-500 font-light">•</span>
        <Link href="/data-processing-agreement" className="text-gray-500 font-light">اتفاقية معالجة البيانات</Link>
        <span className="text-gray-500 font-light">•</span>
        <Link href="/cookies-policy" className="text-gray-500 font-light">سياسة الكوكيز</Link>
      </div>
      
    </div>
  );
}
