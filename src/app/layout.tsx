import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[var(--navy)]">
          <Header />
          <main className="">{children}</main>
          <Footer/> 
        </div>
      </body>
    </html>
  );
}

