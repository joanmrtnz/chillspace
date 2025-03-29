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
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

