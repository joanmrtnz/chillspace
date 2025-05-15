import Link from "next/link";
import {getTranslations} from 'next-intl/server';

export default async function Home() {
   
   const t = await getTranslations('home');
  return (
    <div className="relative z-10 flex flex-col items-start justify-center h-screen px-6 md:px-20">
      <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
        {t('welcome')} <span className="text-[var(--color-text-primary)]/70">chillspace</span>
      </h1>
      <p className="font-mono text-lg md:text-xl text-[var(--color-slate-400)] mb-8 max-w-lg">
        Tu refugio digital para relajarte, descubrir música y desconectar.
      </p>

      <nav className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {[
          { label: "Playlists", href: "/playlists" },
          { label: "Productos", href: "/products" },
          { label: "Chill Room", href: "/chillroom" },
          { label: "Proposito de la web", href: "/about" },
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
