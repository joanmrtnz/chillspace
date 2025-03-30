"use client";

import Link from "next/link";

export default function Header() {
    return (

        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
           <Link href="/"><h1 className="text-xl">Chill Space</h1></Link> 
            <nav className="w-full p-4 bg-gray-800 text-center">
                <Link href="/playlists" className="mx-4">Playlists</Link>
                <Link href="/chillroom" className="mx-4">Chill Room</Link>
                <Link href="/products" className="mx-4"> Productos</Link>
            </nav>
            <Link href="/spotify-login">
                <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
                    Iniciar sesión en Spotify
                </button>
            </Link>
        </header>

    );
}