"use client";

import Link from "next/link";

export default function Header() {
    return (

        <header className="bg-[var(--color-gray-100)] bg-opacity-30 sm:backdrop-blur-lg sm:bg-[var(--color-gray-100)]/40 fixed top-0 w-full z-50 px-6 md:px-[50px] ">
            <nav className="h-[80px] w-full flex items-center justify-between  font-semibold text-s/7">
                <Link href="/"><img src="/chillspace-logo.png" className="h-[8rem] md:h-[10rem] mt-2 "/></Link>
                <ul className="hidden md:flex items-center space-x-4 ml-auto ">
                    <Link href="/playlists" className="text-[var(--color-slate-400)] hover:text-[var(--color-text-primary)] px-5 py-2.5">Playlists</Link>
                    <Link href="/chillroom" className="text-[var(--color-slate-400)] hover:text-[var(--color-text-primary)] px-5 py-2.5">Chill Room</Link>
                    <Link href="/products" className="text-[var(--color-slate-400)] hover:text-[var(--color-text-primary)] px-5 py-2.5">Productos</Link>
                    <Link href="/spotify-login">
                        <button className="text-[var(--color-text-primary)] hover:text-[var(--color-slate-700)]/80 bg-opacity-40 bg-[var(--color-gray-100)]/30 hover:bg-[var(--color-slate-200)]/20  border hover:border-[var(--color-text-primary_20)] border-[var(--color-text-primary)] focus:ring-[var(--color-green-500)] focus:outline-none  rounded-lg text-sm px-5 py-3.5">
                            Iniciar sesión en Spotify
                        </button>
                    </Link>
                </ul>
            </nav>
        </header>

    );
}