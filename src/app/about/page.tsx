"use client";

import BackButton from "@/components/BackButton";
import Link from "next/link";
import {useTranslations, useLocale} from 'next-intl';


export default function AboutPage() {
    const tAb = useTranslations('about');
    const locale = useLocale();              


    return (
        <section className="bg-black/1 md:min-h-screen min-h-[180vh] flex flex-col items-center justify-center text-[var(--color-text-primary)] px-6 py-16">
            <BackButton href="/" positionClass="absolute top-21 left-4" />  
            <div className="max-w-4xl w-full grid gap-12 md:grid-cols-2 items-center">
                <div className="space-y-8">
                    <h1 className="text-center md:text-left text-4xl font-bold">{tAb('about')} <span className="text-[var(--color-text-primary_70)]">chillspace</span></h1>
                    <div className="text-base leading-relaxed">
                        🍵 {tAb('description1')}
                    
                        <ol className="font-mono list-disc text-md text-[var(--color-slate-400)] grid grid-cols-2 gap-x-6 gap-y-3 pl-6 mt-5 transition-opacity duration-700 delay-300">
                            <li>Next.js</li>
                            <li>APIs (Spotify)</li>
                            <li>TypeScript</li>
                            <li>{tAb('animations')}</li>
                        </ol>

                        <br />
                        {tAb('description2')} <span className="font-bold text-[var(--color-text-primary)]/50">{tAb('relaxing')}</span>
                        {locale === "en" && (
                            <> {tAb("experience")}</>)}.
                    </div>

                    <div className="bg-white/40 md:bg-white/20 text-[var(--color-slate-400)] px-4 py-6 rounded-md transition space-y-6">
                        <p className="text-base leading-relaxed">
                            {tAb('my-name')}, <strong>Web developer</strong>. {tAb('portfolio-description')}
                        </p>
                        <Link
                            href="https://jnmrtnz.com"
                            target="_blank"
                            className="font-semibold text-[var(--color-slate-400)] hover:text-[var(--color-slate-700)]/80 bg-opacity-40 bg-[var(--color-gray-100)]/30 hover:bg-[var(--color-slate-200)]/20  border hover:border-[var(--color-text-primary_20)] border-[var(--color-text-primary_80)] focus:outline-none  rounded-lg text-sm px-5 py-3">
                            {tAb('portfolio-btn')}
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="https://github.com/joanmrtnz"
                        target="_blank">
                        <img
                            src="/images/about/about.jpg"
                            alt="Joan Martínez"
                            className="w-80 h-80 rounded-full object-cover shadow-lg opacity-85"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
