"use client";

import { useState, useEffect } from "react";
import { IoAddCircle } from "react-icons/io5";


export default function SavePlaylistButton({ playlistName, uris, onRequireLogin }: { playlistName: string; uris: string[], onRequireLogin: () => void; }) {
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
    console.log(isAuthenticated);
    if (isAuthenticated) {
      const res = await fetch("/api/save-playlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playlistName, uris }),
      });
      console.log(res);
      const data = await res.json();
      if (data.success) {
        alert("Playlist guardada exitosamente");
      } else {
        alert("Error al guardar la playlist");
      }
    } else {
      onRequireLogin(); 
    }
  };

  return (
    <div>
      <button 
      onClick={handleSaveClick}
      className="flex items-center rounded-lg bg-teal-400/10 px-3 py-1 hover:bg-teal-700/10 hover:text-[var(--color-green-500)] text-xl font-medium leading-5 text-[var(--color-green-300)]">
        <IoAddCircle className="m-1"/>
        <p className="text-xs text-[var(--color-slate-400)]">Guardar en Spotify</p>
      </button>
    </div>
  );
}
