// app/about/page.tsx
"use client";

import Link from "next/link";

export default function AboutPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-[var(--text-color)] px-6 py-16">
            <div className="max-w-4xl w-full grid gap-12 md:grid-cols-2 items-center">
                <div className="space-y-8">
                    <h1 className="text-4xl font-bold">Sobre <span className="text-[var(--text-color)]/70">chillspace</span></h1>
                    <div className="text-base leading-relaxed">
                        🍵 chillspace es un proyecto personal para demostrar mis habilidades como
                        desarrollador web:
                    
                        <ol className="font-mono list-disc text-md text-[var(--lightest-slate)] grid grid-cols-2 gap-x-6 gap-y-3 pl-6 mt-5 transition-opacity duration-700 delay-300">
                            <li>Next.js</li>
                            <li>APIs (Spotify)</li>
                            <li>TypeScript</li>
                            <li>Animaciones</li>
                        </ol>

                        <br />
                        Todo diseñado para ofrecer una experiencia <span className="font-bold text-[var(--text-color)]/50">relajante</span>.
                    </div>

                    <div className="bg-white/20 text-[var(--lightest-slate)] px-4 py-6 rounded-md transition space-y-6">
                        <p className="text-base leading-relaxed">
                            Soy Joan Martínez, <strong>Web developer</strong>. Este portfolio muestra
                            mis proyectos, código limpio y compromiso con buenas prácticas.
                        </p>
                        <Link
                            href="https://jnmrtnz.com"
                            target="_blank"
                            className="font-semibold text-[var(--lightest-slate)] hover:text-[var(--slate)]/80 bg-opacity-40 bg-[var(--navy)]/30 hover:bg-[var(--blue-slate)]/20  border hover:border-[var(--text-color)]/20 border-[var(--text-color)]/80 focus:outline-none  rounded-lg text-sm px-5 py-3">
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
