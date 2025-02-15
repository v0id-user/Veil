import type { Metadata } from 'next';
import './globals.css';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'Veil - الصفحة الرئيسية',
  description: 'محادثة خاصة، مشفرة، آمنة',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibmPlexSansArabic.className} antialiased`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
