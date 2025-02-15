import AuthForm from '@/components/AuthForm';

export default function SignUp() {
  return (
    <AuthForm
      type="sign-up"
      title="إنشاء حساب"
      alternateText="لديك حساب بالفعل؟"
      alternateLink="/sign-in"
      alternateLinkText="سجل دخولك"
      buttonText="إنشاء حساب"
      showTerms={true}
    />
  );
}
