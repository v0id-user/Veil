import Link from "@/components/Link";
import Button from "@/components/Button";
import TextWithLogo from "@/public/text-with-logo.svg"
export default function Nav() {
    return (
        <nav className="flex items-center justify-between p-5">
            {/* Logo */}
            <TextWithLogo />

            {/* Links */}
            <div className="flex items-center gap-10">
                <Link href="/about">حول</Link>
                <Link href="/privacy">الخصوصية</Link>
                <Link href="/faq">مركز المساعدة</Link>
                <Link href="/download">التطبيقات</Link>
            </div>

            {/* CTAs Buttons */}
            <div className="flex items-center gap-4">
                <Button>التحميل الان</Button>
                <Button variant="secondary">تسجيل الدخول</Button>
            </div>
        </nav>
    )
}
