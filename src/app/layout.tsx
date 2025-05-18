import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import { NextIntlClientProvider } from 'next-intl';
import {getLocale} from 'next-intl/server';


export default async function RootLayout({
  children,
}: {
   children: React.ReactNode;
}) {
  const locale = await getLocale();     
  
 
  return (
    <html lang={locale}>
      <body>
        <div className="relative min-h-screen bg-black">
          <NextIntlClientProvider>
            <Image
              src="/images/home/home.jpg"
              alt="mountain"
              fill
              className="object-cover z-0"
              priority
            />

            <div className="absolute inset-0 bg-white/20 z-10" />
            <div className="relative z-20">
              <Header />
              <main>
                {children}
              </main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </div>
      </body>
    </html >
  );
}

