import Link from 'next/link';
import Image from 'next/image';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';

interface AuthFormProps {
  type: 'sign-in' | 'sign-up';
  title: string;
  alternateText: string;
  alternateLink: string;
  alternateLinkText: string;
  buttonText: string;
  showTerms?: boolean;
}

export default function AuthForm({
  type,
  title,
  alternateText,
  alternateLink,
  alternateLinkText,
  buttonText,
  showTerms = false,
}: AuthFormProps) {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center w-full h-full px-6 lg:pr-20 pt-16">
          {/* Header */}
          <div
            className={
              type === 'sign-up'
                ? 'flex flex-col items-start gap-5 self-start mb-12 lg:mb-16'
                : 'flex flex-col items-center justify-center w-full gap-5 self-center mb-12 lg:mb-16'
            }
          >
            <h1 className="text-4xl lg:text-7xl font-bold">{title}</h1>
            <span className="text-gray-500 text-sm lg:text-base">
              {alternateText}{' '}
              <Link href={alternateLink} className="underline">
                {alternateLinkText}
              </Link>
            </span>
          </div>

          {/* Oauth 2 google.com / x.com */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-around w-full max-w-md pt-6 lg:pt-10">
            <button className="flex justify-center gap-4 font-medium bg-white border border-black rounded-full py-3 px-8 hover:bg-gray-100">
              <Image src="/google.png" alt="google" width={24} height={24} />
              قوقل
            </button>
            <button className="flex justify-center gap-4 font-medium bg-black border text-white border-[#959595] rounded-full py-3 px-8 hover:bg-gray-800">
              <Image src="/x.png" alt="x" width={24} height={24} />
              إكس
            </button>
          </div>

          {/* OR divider */}
          <div className="flex items-center justify-center w-full max-w-md pt-8 lg:pt-12 pb-6 lg:pb-8">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <span className="text-gray-500 mx-6">أو</span>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>

          {/*Auth form*/}
          <form className="flex flex-col gap-6 w-full max-w-md justify-center items-center px-4 sm:px-0">
            {/* Email input */}
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="border border-black rounded-full p-4 w-full"
            />

            {/* Terms and conditions checkbox */}
            {showTerms && (
              <Checkbox name="terms" required>
                <span className="text-gray-500 text-sm lg:text-base">
                  أنا أوافق على{' '}
                  <Link href="/terms" className="underline">
                    الشروط والأحكام
                  </Link>
                </span>
              </Checkbox>
            )}

            {/* Submit button */}
            <Button className="w-full px-20 py-4 font-bold">{buttonText}</Button>
          </form>

          <div className="flex flex-col gap-4 w-full max-w-md justify-center items-center pt-12 lg:pt-16 pb-8 lg:pb-0">
            <Image
              src="/brands.png"
              alt="Brands"
              width={325}
              height={64}
              className="w-[250px] lg:w-[325px]"
            />
            <span className="text-xs opacity-70">© جميع الحقوق محفوظة 2025</span>
          </div>
        </div>
      </div>
      {/* Show image only on sign-up page */}
      {type === 'sign-up' && (
        <div className="hidden lg:block bg-[url('/show.png')] bg-cover bg-center w-full h-screen rounded-tr-3xl rounded-br-3xl"></div>
      )}
    </main>
  );
}
