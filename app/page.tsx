import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-10 px-4">
      {/* Navbar */}
      <nav className="w-full max-w-2xl">
        <ul className="flex justify-center gap-12">
          <li>
            <Link href="/about" className="text-gray-500 hover:text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-500 hover:after:w-full after:transition-all after:duration-300 font-light">حول</Link>
          </li>
          <li>
            <Link href="/pricing" className="text-gray-500 hover:text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-500 hover:after:w-full after:transition-all after:duration-300 font-light">الأسعار</Link>
          </li>
          <li>
            <Link href="https://www.github.com/v0id-user" className="text-gray-500 hover:text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-500 hover:after:w-full after:transition-all after:duration-300 font-light">قيت هوب</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center gap-8 flex-grow">
        <Image 
          src="/veil_logo_black.png" 
          alt="veil logo" 
          width={120} 
          height={120}
          className="hover:scale-105 transition-transform duration-300" 
          priority
        />
        <label className="font-bold">محادثة خاصة، مشفرة، آمنة</label>
        <button className="group rounded-full font-bold from-[#F3F3F3] to-[#D4D4D4] bg-gradient-to-b border border-[#E3E3E3] text-black px-12 py-4 relative hover:shadow-lg transition-shadow duration-300 hover:from-[#E3E3E3] hover:to-[#C4C4C4]">
          إنشاء غرفة
          <Lock className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
        </button>
      </section>

      {/* Footer Links */}
      <footer className="w-full max-w-4xl px-4">
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 text-sm">
          <Link href="/terms" className="text-gray-500 hover:text-gray-800 font-light transition-colors duration-300">الشروط والأحكام</Link>
          <span className="text-gray-400">•</span>
          <Link href="/privacy" className="text-gray-500 hover:text-gray-800 font-light transition-colors duration-300">سياسة الخصوصية</Link>
          <span className="text-gray-400">•</span>
          <Link href="/acceptable-use" className="text-gray-500 hover:text-gray-800 font-light transition-colors duration-300">سياسة الاستخدام المقبول</Link>
          <span className="text-gray-400">•</span>
          <Link href="/refund-cancellation" className="text-gray-500 hover:text-gray-800 font-light transition-colors duration-300">سياسة الاسترداد والإلغاء</Link>
          <span className="text-gray-400">•</span>
          <Link href="/eula" className="text-gray-500 hover:text-gray-800 font-light transition-colors duration-300">اتفاقية ترخيص المستخدم النهائي</Link>
          <span className="text-gray-400">•</span>
          <Link href="/security-policy" className="text-gray-500 hover:text-gray-800 font-light transition-colors duration-300">سياسة الأمان</Link>
          <span className="text-gray-400">•</span>
          <Link href="/data-processing-agreement" className="text-gray-500 hover:text-gray-800 font-light transition-colors duration-300">اتفاقية معالجة البيانات</Link>
          <span className="text-gray-400">•</span>
          <Link href="/cookies-policy" className="text-gray-500 hover:text-gray-800 font-light transition-colors duration-300">سياسة الكوكيز</Link>
        </div>
      </footer>
    </main>
  );
}
