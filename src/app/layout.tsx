import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen bg-black">
          <Image
            src="/images/home.jpg"
            alt="mountain"
            fill
            className="object-cover z-0"
            priority
          />

          <div className="absolute inset-0 bg-white/20 z-10" />
          <div className="relative z-20">
            <Header />
            <main className="">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html >
  );
}

