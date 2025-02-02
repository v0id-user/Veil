import Link from 'next/link';

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen w-full max-w-4xl mx-auto px-4 py-8" dir="rtl">
      <Link href="/" className="text-gray-500 hover:text-gray-700 mb-8 inline-block">
        العودة ←
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>

      <div className="prose prose-lg max-w-none rtl">{children}</div>
    </div>
  );
}
