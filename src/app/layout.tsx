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
          <nav className="w-full p-4 bg-gray-800 text-center">
            <a href="/" className="mx-4">Home</a>
            <a href="/playlists" className="mx-4">Playlists</a>
            <a href="/chillroom" className="mx-4">Chill Room</a>
            <a href="/products" className="mx-4"> Productos</a>
          </nav>
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

