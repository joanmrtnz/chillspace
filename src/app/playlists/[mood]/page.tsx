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

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const itemsPerPage = isMobile ? 1 : 3;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mood.playlists.length / itemsPerPage);

  return (
    <div className="md:mt-[30px] bg-[var(--navy)] min-h-screen flex items-center justify-center px-4">
      <Link href="/playlists">
        <button className="absolute top-25 left-10 text-[var(--white)] p-3 hover:bg-[var(--dark-navy)] rounded-lg transition">
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
                  title={playlist.title}
                  image={playlist.image}
                  spotifyLink={playlist.spotifyLink}
                  youtubeLink={playlist.youtubeLink}
                  uris={playlist.uris}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 text-[var(--green)] p-1  rounded-md disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="absolute right-[-4px] top-1/2 transform -translate-y-1/2 text-[var(--green)] p-1  rounded-md disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
