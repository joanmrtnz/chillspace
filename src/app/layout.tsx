import Header from "@/components/Header";
import "./globals.css";

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
          <main className="px-6 sm:px-12 md:px-24 lg:px-32 xl:px-[150px]">{children}</main>
        </div>
      </body>
    </html>
  );
}

