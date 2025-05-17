"use client";

import { useEffect } from "react";
import { buildSpotifyAuthUrl } from "@/lib/spotify/auth";
import {useTranslations} from 'next-intl';


export default function SpotifyLoginPage() {
  const tUi = useTranslations('ui');

  useEffect(() => {
    let redirectTo = window.location.pathname;
    window.location.href = buildSpotifyAuthUrl( redirectTo );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-7 text-center">
        {tUi('logging-in')}
      </h1>
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-[var(--color-text-primary)]" />
    </div>
  );
}
