"use client";

import { useState, useEffect } from "react";
import { IoAddCircle } from "react-icons/io5";
import {useTranslations} from 'next-intl';


export default function FollowPlaylistButton({ playlistId, onRequireLogin, onFollowResult }:
   { playlistId: string; onRequireLogin: () => void, onFollowResult: (r: "success" | "error") => void; }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const t = useTranslations('ui');

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/has-token");
      const { hasToken } = await res.json();
      setIsAuthenticated(hasToken);
    }
    checkAuth();
  }, []);

  const handleFollowClick = async () => {
    
    if (!isAuthenticated) return onRequireLogin(); 
     const res = await fetch("/api/follow-playlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playlistId }),
      });

      const { success } = await res.json();
      onFollowResult(success ? "success" : "error");
  };

  return (
    <div>
      <button 
      onClick={handleFollowClick}
      className="flex items-center rounded-lg bg-[var(--color-slate-400)]/10 px-3 py-1 hover:bg-[var(--color-slate-400)]/5 text-xl font-medium leading-5 text-[var(--color-text-primary_60)]">
        <IoAddCircle className="m-1"/>
        <p className="text-xs text-[var(--color-slate-400)]">{t('follow-btn')}</p>
      </button>
    </div>
  );
}
