"use client";

import { useState, useEffect } from "react";

export default function SavePlaylistButton({ playlistName, uris }: { playlistName: string; uris: string[] }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

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
      setShowLoginDialog(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleSaveClick}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Guardar Playlist en Spotify
      </button>

      {showLoginDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-black">
            <p>No estás autenticado en Spotify. ¿Deseas iniciar sesión?</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowLoginDialog(false)}
                className="px-3 py-2 border rounded"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  window.location.href = "/spotify-login";
                }}
                className="px-3 py-2 bg-green-500 text-white rounded"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
