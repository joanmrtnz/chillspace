"use client";

import { useEffect } from "react";
import { buildSpotifyAuthUrl } from "@/lib/spotify/auth";

export default function SpotifyLoginPage() {
  useEffect(() => {
    let redirectTo = window.location.pathname;
    window.location.href = buildSpotifyAuthUrl( redirectTo );
  }, []);

  return <p>Redirigiendo a Spotify...</p>;
}
