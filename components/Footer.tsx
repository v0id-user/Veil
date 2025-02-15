'use client';

import Image from 'next/image';
import Button from './Button';

interface LinksColumnProps {
  title: string;
  links: { name: string; url: string }[];
}

const LinksColumn = ({ title, links }: LinksColumnProps) => {
  return (
    <div className="flex flex-col gap-3 w-fit">
      <span className="font-medium text-sm">{title}</span>
      <ul className="flex flex-col gap-2">
        {links.map(({ name, url }) => (
          <li
            key={name}
            className="hover:underline text-sm cursor-pointer transition-all duration-200 opacity-80 hover:opacity-100"
          >
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-black py-8 w-full text-[#B9B9B9] rounded-t-[25px]">
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-center md:items-start">
          <div className="flex flex-col justify-center items-center gap-5">
            <Image src="/brands.png" alt="Brands" width={325} height={64} />
            <span className="text-xs opacity-70">© جميع الحقوق محفوظة 2025</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="h-fit w-fit py-3 px-6"
              onClick={() => (window.location.href = '/download')}
            >
              التحميل الان
            </Button>
            <Button
              variant="secondary"
              className="h-fit w-fit py-3 px-6"
              onClick={() => (window.location.href = '/sign-in')}
            >
              تسجيل الدخول
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-between items-center sm:items-start">
            <LinksColumn
              title="من نحن"
              links={[
                { name: 'نبذة عنا', url: '/about' },
                { name: 'الخصوصية', url: '/privacy' },
                { name: 'الشروط والأحكام', url: '/terms' },
              ]}
            />
            <LinksColumn
              title="تطبيقات"
              links={[
                { name: 'الويب', url: '/web' },
                { name: 'أجهزة الأندرويد', url: '/android' },
                { name: 'أجهزة الأي أو إس', url: '/ios' },
                { name: 'سطح المكتب', url: '/desktop' },
              ]}
            />
            <LinksColumn
              title="المساعدة"
              links={[
                { name: 'فتح تذكرة', url: '/support/ticket' },
                { name: 'الاستفسارات', url: '/support/inquiries' },
                { name: 'المساعدة', url: '/support' },
              ]}
            />
            <LinksColumn
              title="من التواصل"
              links={[
                { name: 'البريد الإلكتروني', url: '/contact/email' },
                { name: 'إكس', url: '/contact/x' },
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
