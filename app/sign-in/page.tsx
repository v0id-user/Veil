import AuthForm from '@/components/AuthForm';

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
