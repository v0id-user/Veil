import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
});


export const metadata: Metadata = {
  title: "Veil - انشاء غرفة",
  description: "محادثة خاصة، مشفرة، آمنة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSansArabic.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
