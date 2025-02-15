import { Metadata } from 'next';
import AuthForm from '@/components/AuthForm';

export const metadata: Metadata = {
  title: 'Veil - تسجيل الدخول',
  description: 'محادثة خاصة، مشفرة، آمنة',
};

export default function SignIn() {
  return (
    <AuthForm
      type="sign-in"
      title="تسجيل الدخول"
      alternateText="ليس لديك حساب بالفعل؟"
      alternateLink="/sign-up"
      alternateLinkText="إنشاء حساب"
      buttonText="تسجيل الدخول"
      showTerms={false}
    />
  );
}
