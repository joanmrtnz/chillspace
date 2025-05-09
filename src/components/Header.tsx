"use client";

import Link from "next/link";

export default function Header() {
    return (

        <header className="bg-[var(--navy)] bg-opacity-30 sm:backdrop-blur-lg sm:bg-[var(--navy)]/40 fixed top-0 w-full z-50 px-6 md:px-[50px] ">
            <nav className="h-[80px] w-full flex items-center justify-between  font-semibold text-s/7">
                <Link href="/"><img src="/chillspace-logo.png" className="h-[8rem] md:h-[10rem] mt-2 "/></Link>
                <ul className="hidden md:flex items-center space-x-4 ml-auto ">
                    <Link href="/playlists" className="text-[var(--lightest-slate)] hover:text-[var(--text-color)] px-5 py-2.5">Playlists</Link>
                    <Link href="/chillroom" className="text-[var(--lightest-slate)] hover:text-[var(--text-color)] px-5 py-2.5">Chill Room</Link>
                    <Link href="/products" className="text-[var(--lightest-slate)] hover:text-[var(--text-color)] px-5 py-2.5">Productos</Link>
                    <Link href="/spotify-login">
                        <button className="text-[var(--text-color)] hover:text-[var(--slate)]/80 bg-opacity-40 bg-[var(--navy)]/30 hover:bg-[var(--blue-slate)]/20  border hover:border-[var(--text-color)]/20 border-[var(--text-color)] focus:ring-[var(--green)] focus:outline-none  rounded-lg text-sm px-5 py-3.5">
                            Iniciar sesión en Spotify
                        </button>
                    </Link>
                </ul>
            </nav>
        </header>

    );
}