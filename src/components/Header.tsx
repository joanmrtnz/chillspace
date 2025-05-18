"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslations } from 'next-intl';
import LanguageSelect from "@/components/LanguageSelect";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const tUi = useTranslations('ui');

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  return (
    <header className="bg-[var(--color-gray-100)]/90 md:bg-[var(--color-gray-100)]/30 bg-opacity-90 md:bg-opacity-30 sm:backdrop-blur-lg sm:bg-[var(--color-gray-100)]/40 fixed top-0 w-full z-50 px-6 md:px-[50px] ">
      <nav className="h-[80px] w-full flex items-center justify-between text-s/7">

        <Link href="/">
          <img
            src="/chillspace-logo.png"
            alt="chillspace logo"
            className="h-[2.5rem] my-2"
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-1 ml-auto">
          <Link href="/" className="text-[var(--color-slate-400)] hover:text-[var(--color-text-primary)] px-5 py-2.5">
             {tUi('home')}
          </Link>
          <Link href="/playlists" className="text-[var(--color-slate-400)] hover:text-[var(--color-text-primary)] px-5 py-2.5">
             {tUi('playlists')}
          </Link>
          <Link href="/chillroom" className="text-[var(--color-slate-400)] hover:text-[var(--color-text-primary)] px-5 py-2.5">
            {tUi('chillroom')}
          </Link>
          <Link href="/products" className="text-[var(--color-slate-400)] hover:text-[var(--color-text-primary)] px-5 py-2.5">
            {tUi('products')}
          </Link>
          <Link href="/about" className="text-[var(--color-slate-400)] hover:text-[var(--color-text-primary)] px-5 py-2.5">
            {tUi('about')}
          </Link>
        
          <div className="hidden md:flex items-center gap-2 ml-4">
            <LanguageSelect />
          </div>
          <Link href="/spotify-login">
            <button className="text-[var(--color-text-primary)] hover:text-[var(--color-slate-700)]/80 bg-opacity-40 
            bg-[var(--color-gray-100)]/30 hover:bg-[var(--color-slate-200)]/20  border hover:border-[var(--color-text-primary_20)] 
            border-[var(--color-text-primary)] rounded-lg text-sm px-5 py-3.5">{tUi('login-btn')}</button>
          </Link>
        </ul>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-3xl text-[var(--color-text-primary)]"
          aria-label="{tUi('open-menu')}" >
          <FiMenu />
        </button>
      </nav>

      <div
        className={`font-mono fixed inset-0 bg-[var(--color-gray-100)]/60 backdrop-blur-md flex flex-col items-center justify-start gap-1 text-lg transform transition-transform duration-300
                    ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-7 right-6 text-3xl text-[var(--color-text-primary)]"
          aria-label="Cerrar menú">
          <FiX />
        </button>
        <Link href="/">
          <img
            src="/chillspace-logo.png"
            alt="chillspace logo"
            className="absolute top-5 left-4 max-h-[2.5rem]" />
        </Link>
        <Link href="/spotify-login" className="mt-20 bg-black/5 text-[var(--color-slate-400)]
         px-4 py-2 rounded-md w-full transition" onClick={() => setMenuOpen(false)}>
          {tUi('login-btn')}
        </Link>
        <div className="bg-black/5 text-[var(--color-slate-400)] rounded-md w-full transition
          flex justify-start md:hidden">
            <LanguageSelect />
        </div>
        <Link href="/" className="bg-white/30 text-[var(--color-slate-400)]
         px-4 py-2 rounded-md w-full transition" onClick={() => setMenuOpen(false)}>
          {tUi('home')}
        </Link>
        <Link href="/about" className="bg-white/30 text-[var(--color-slate-400)]
         px-4 py-2 rounded-md w-full transition" onClick={() => setMenuOpen(false)}>
          {tUi('about')}
        </Link>
        <Link href="/playlists" className="bg-white/30 text-[var(--color-slate-400)]
         px-4 py-2 rounded-md w-full transition" onClick={() => setMenuOpen(false)}>
          {tUi('playlists')}
        </Link>
        <Link href="/chillroom" className="bg-white/30 text-[var(--color-slate-400)]
         px-4 py-2 rounded-md w-full transition" onClick={() => setMenuOpen(false)}>
           {tUi('chillroom')}
        </Link>
        <Link href="/products" className="bg-white/30 text-[var(--color-slate-400)]
         px-4 py-2 rounded-md w-full transition" onClick={() => setMenuOpen(false)}>
           {tUi('products')}
        </Link>
      </div>
    </header>
  );
}