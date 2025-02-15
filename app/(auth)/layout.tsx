import type { Metadata } from 'next';
import AuthLayoutClient from './AuthLayoutClient';

export const metadata: Metadata = {
  title: 'Veil',
  description: 'محادثة خاصة، مشفرة، آمنة',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayoutClient>{children}</AuthLayoutClient>;
}
