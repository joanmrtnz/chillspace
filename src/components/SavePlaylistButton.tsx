"use client";

import { useState, useEffect } from "react";
import { IoAddCircle } from "react-icons/io5";


export default function SavePlaylistButton({ playlistName, uris, onRequireLogin, onSaveResult }:
   { playlistName: string; uris: string[], onRequireLogin: () => void, onSaveResult: (r: "success" | "error") => void; }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/has-token");
      const { hasToken } = await res.json();
      setIsAuthenticated(hasToken);
    }
    checkAuth();
  }, []);

  const handleSaveClick = async () => {
    
    if (!isAuthenticated) return onRequireLogin(); 
     const res = await fetch("/api/save-playlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playlistName, uris }),
      });

      const { success } = await res.json();
      onSaveResult(success ? "success" : "error");
  };

  return (
    <div>
      <button 
      onClick={handleSaveClick}
      className="flex items-center rounded-lg bg-[var(--color-slate-400)]/10 px-3 py-1 hover:bg-[var(--color-slate-400)]/5 text-xl font-medium leading-5 text-[var(--color-text-primary_60)]">
        <IoAddCircle className="m-1"/>
        <p className="text-xs text-[var(--color-slate-400)]">Guardar en Spotify</p>
      </button>
    </div>
  );
}
