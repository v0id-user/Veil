import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-start w-full h-full mr-28 mt-80">
                    <div className="flex flex-col items-start gap-5">
                        <h1 className="text-5xl font-bold">إنشاء حساب</h1>
                        <span className="text-gray-500">لديك حساب بالفعل؟ <Link href="/sign-in" className="underline">سجل دخولك</Link></span>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/show.png')] bg-cover bg-center w-full h-screen rounded-tr-3xl rounded-br-3xl "></div>
        </div>
    );
}
