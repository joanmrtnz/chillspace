// app/about/page.tsx
"use client";

import BackButton from "@/components/BackButton";
import Link from "next/link";

export default function AboutPage() {
    return (
        <section className="bg-black/1 md:min-h-screen min-h-[180vh] flex flex-col items-center justify-center text-[var(--color-text-primary)] px-6 py-16">
            <BackButton href="/" positionClass="absolute top-21 left-4" />  
            <div className="max-w-4xl w-full grid gap-12 md:grid-cols-2 items-center">
                <div className="space-y-8">
                    <h1 className="text-center md:text-left text-4xl font-bold">Sobre <span className="text-[var(--color-text-primary_70)]">chillspace</span></h1>
                    <div className="text-base leading-relaxed">
                        🍵 chillspace es un proyecto personal para demostrar mis habilidades como
                        desarrollador web:
                    
                        <ol className="font-mono list-disc text-md text-[var(--color-slate-400)] grid grid-cols-2 gap-x-6 gap-y-3 pl-6 mt-5 transition-opacity duration-700 delay-300">
                            <li>Next.js</li>
                            <li>APIs (Spotify)</li>
                            <li>TypeScript</li>
                            <li>Animaciones</li>
                        </ol>

                        <br />
                        Todo diseñado para ofrecer una experiencia <span className="font-bold text-[var(--color-text-primary)]/50">relajante</span>.
                    </div>

                    <div className="bg-white/40 md:bg-white/20 text-[var(--color-slate-400)] px-4 py-6 rounded-md transition space-y-6">
                        <p className="text-base leading-relaxed">
                            Soy Joan Martínez, <strong>Web developer</strong>. Este portfolio muestra
                            mis proyectos, código limpio y compromiso con buenas prácticas.
                        </p>
                        <Link
                            href="https://jnmrtnz.com"
                            target="_blank"
                            className="font-semibold text-[var(--color-slate-400)] hover:text-[var(--color-slate-700)]/80 bg-opacity-40 bg-[var(--color-gray-100)]/30 hover:bg-[var(--color-slate-200)]/20  border hover:border-[var(--color-text-primary_20)] border-[var(--color-text-primary_80)] focus:outline-none  rounded-lg text-sm px-5 py-3">
                            Ver mi portfolio
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="https://github.com/joanmrtnz"
                        target="_blank">
                        <img
                            src="/images/about.jpg"
                            alt="Joan Martínez"
                            className="w-80 h-80 rounded-full object-cover shadow-lg opacity-85"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
