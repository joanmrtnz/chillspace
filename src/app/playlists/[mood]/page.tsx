"use client";

import Link from "next/link";
import moods from "../../../lib/spotify/moods";
import PlaylistCard from "../PlaylistCard";
import { notFound } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";




export default function Playlists({ params }: { params: { mood?: string } }) {
  if (!params?.mood) return notFound();
  const mood = moods.find((m) => m.id === params.mood);
  if (!mood) return notFound();

  const [currentPage, setCurrentPage] = useState(1);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const totalPages = Math.ceil(mood.playlists.length / (window.innerWidth < 640 ? 1 : 3));

  return (
    <div className="relative md:mt-[30px] min-h-screen flex items-center justify-center px-4 sm:px-12 md:px-24 lg:px-32 xl:px-[150px]">
      <Link href="/playlists">
        <button className="absolute top-10 left-4 text-[var(--color-black)] p-3 hover:bg-[var(--color-gray-200)] rounded-lg transition">
          <FaArrowLeft />
        </button>
      </Link>

      
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full max-w-4xl overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
          >
            {mood.playlists.map((playlist) => (
              <div key={playlist.id} className="flex-none w-full sm:w-1/3 px-2">
                
                <PlaylistCard
                  {...playlist}
                  onRequireLogin={() => setShowLoginDialog(true)}
                />
              </div>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--color-green-500)] p-1 rounded-md disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--color-green-500)] p-1 rounded-md disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {showLoginDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
                onClick={() => (window.location.href = "/spotify-login")}
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
