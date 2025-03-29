"use client";

import Link from "next/link";

export default function Header() {
    return (

        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1 className="text-xl">Chill Space</h1>
            <nav className="w-full p-4 bg-gray-800 text-center">
                <a href="/" className="mx-4">Home</a>
                <a href="/playlists" className="mx-4">Playlists</a>
                <a href="/chillroom" className="mx-4">Chill Room</a>
                <a href="/products" className="mx-4"> Productos</a>
            </nav>
            <Link href="/spotify-login">
                <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
                    Iniciar sesión en Spotify
                </button>
            </Link>
        </header>

    );
}