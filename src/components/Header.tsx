"use client";

import Link from "next/link";

export default function Header() {
    return (

        <header className="bg-[var(--navy)] bg-opacity-90 sm:backdrop-blur-lg sm:bg-[var(--navy)]/70 fixed top-0 w-full z-50 px-6 md:px-[50px] shadow-sm">
            <nav className="h-[80px] w-full flex items-center justify-between  font-semibold text-s/7">
                <Link href="/"><h1 className="text-md">Chill Space</h1></Link>
                <ul className="hidden md:flex items-center space-x-4 ml-auto">
                    <Link href="/playlists" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">Playlists</Link>
                    <Link href="/chillroom" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">Chill Room</Link>
                    <Link href="/products" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5"> Productos</Link>
                    <Link href="/spotify-login">
                        <button className="text-[var(--green)] hover:bg-teal-700/10 bg-[var(--navy)]  border border-[var(--green)] focus:ring-[var(--green)] focus:outline-none  rounded-lg text-sm px-5 py-3.5">
                            Iniciar sesión en Spotify
                        </button>
                    </Link>
                </ul>
            </nav>
        </header>

    );
}