import Link from "next/link";
import {getTranslations} from 'next-intl/server';

export default async function Home() {
   
  const tHome = await getTranslations('home');
  const tUi = await getTranslations('ui');

  return (
    <div className="relative z-10 flex flex-col items-start justify-center h-screen px-6 md:px-20">
      <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
        {tHome('welcome')} <span className="text-[var(--color-text-primary)]/70">chillspace</span>
      </h1>
      <p className="font-mono text-lg md:text-xl text-[var(--color-slate-400)] mb-8 max-w-lg">
       {tHome('description')}
      </p>

      <nav className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {[
          { label: `${tUi('playlists')}`, href: "/playlists" },
          { label: `${tUi('products')}`, href: "/products" },
          { label: `${tUi('chillroom')}`, href: "/chillroom" },
          { label: `${tUi('about')}`, href: "/about" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-white/30 hover:bg-white/10 hover:text-[var(--color-slate-700)] text-[var(--color-slate-400)] px-4 py-2 rounded-md transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>

    </div>
  );
}
