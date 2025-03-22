"use client";

import { buildSpotifyAuthUrl } from "@/lib/spotify/auth";
import { useState } from "react";

export default function SavePlaylistButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const res = await fetch("/api/has-token");
    const { hasToken } = await res.json();

    if (hasToken) {
      const response = await fetch("/api/save-playlist");
      const data = await response.json();
      if (data.success) {
        alert("Playlist guardada");
      } else {
        alert("Error al guardar");
      }
    } else {
      const redirectTo = window.location.pathname;
      const authUrl = buildSpotifyAuthUrl(redirectTo);
      window.location.href = authUrl;
    }

    setLoading(false);
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? "Guardando..." : "Guardar playlist en Spotify"}
    </button>
  );
}
