"use client";

import {Listbox, ListboxButton, ListboxOptions, ListboxOption} from "@headlessui/react";
import {HiOutlineGlobeAlt, HiOutlineCheck} from "react-icons/hi2";
import {useTransition, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {setLocale} from "@/actions/set-locale";

type Locale = "es" | "en" | "ca";

const locales: Record<Locale, string> = {
  es: "Español",
  en: "English",
  ca: "Català"
};

export default function LanguageSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState<Locale>("es");

  useEffect(() => {
    const c = document.cookie.match(/(?:^|; )locale=([^;]+)/)?.[1];
    if (c === "en" || c === "ca") setSelected(c as Locale);
  }, []);

  const changeLocale = (lng: Locale) => {
  startTransition(async () => {
    await setLocale(lng);          
    setSelected(lng);              
    router.refresh();              
  });
};

  return (
    <Listbox value={selected} onChange={changeLocale}>
      <div className="relative">
        <ListboxButton
          disabled={isPending}
          className="inline-flex items-center gap-2  hover:text-[var(--color-slate-700)]/80 bg-opacity-40 
             md:bg-[var(--color-gray-100)]/30 md:rounded-lg md:px-5 md:py-3.5 rounded-md px-4 py-2
             focus:outline-none focus:ring-0 border-none transition"
        >
          <HiOutlineGlobeAlt className="size-4 fill-white/60" />
          {locales[selected]}
        </ListboxButton>

        <ListboxOptions
          anchor="bottom end"
          transition
          className="absolute z-50 top-full left-0 mt-1 w-full md:w-40  rounded-xl bg-white/90 
          md:bg-white/30  p-1 text-md text-[var(--color-text-primary)] duration-100 
          ease-out focus:outline-none focus:ring-0 border-none"
        >
          {(Object.keys(locales) as Locale[]).map((lng) => (
            <ListboxOption
              key={lng}
              value={lng}
              className="group flex w-full items-center justify-between gap-2 rounded-lg px-3 py-1.5"
            >
              {({selected: isSel}) => (
                <>
                  <span className={isSel ? "font-semibold" : "font-normal"}>
                    {locales[lng]}
                  </span>
                  {isSel && (
                    <HiOutlineCheck className="size-4" />
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
