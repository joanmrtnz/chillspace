"use client";

import Image from "next/image";
import Link from "next/link";
import SavePlaylistButton from "./SavePlaylistButton";
import { FaSpotify, FaYoutube } from "react-icons/fa";

export default function PlaylistCard({
  title,
  image,
  description,
  genres,
  spotifyLink,
  youtubeLink,
  uris,
 onRequireLogin,
 onSaveResult,
  
}: {
  title: string
  image: string
  description: string
  genres: string[]
  spotifyLink: string
  youtubeLink: string
  uris: string[]
  onRequireLogin: () => void
  onSaveResult: (r: "success" | "error") => void;
}) {

  return (
    <div className="w-full backdrop-blur-lg bg-[var(--color-black)]/5 rounded-xl p-4 sm:p-10
                    shadow-lg group">
      <div className="overflow-hidden rounded-md mb-3"> 
        <img
          src={image}
          alt={title}
          className="opacity-90 w-full h-[200px] object-cover transform transition-transform duration-300 group-hover:scale-105 rounded-md mx-auto"
        />
      </div>

      <h2 className="text-lg text-[var(--color-slate-700)] font-bold mt-4">{title}</h2>   
      <p className="mt-2 text-sm text-[var(--color-slate-400)]">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {genres.map((g) => (
          <span
            key={g}
            className="text-xs bg-teal-600/10 text-[var(--color-text-primary)]
                       px-2 py-0.5 rounded-full"
          >
            {g}
          </span>
        ))}
      </div>

      <div className="flex flex-col justify-center gap-3 mt-8">
        <Link href={youtubeLink} target="_blank" className="flex-1 flex items-center gap-2">
          <button className="flex items-center rounded-lg bg-[var(--color-slate-400)]/10 hover:bg-[var(--color-slate-400)]/5
                             px-3 py-1 text-xl font-medium
                             leading-5 text-[var(--color-text-primary_60)]">
            <FaYoutube className="m-1" />
            <span className="text-xs text-[var(--color-slate-400)]">Ver en YouTube</span>
          </button>
        </Link>

        <Link href={spotifyLink} target="_blank" className="flex-1 flex items-center gap-2">
          <button className="flex items-center rounded-lg bg-[var(--color-slate-400)]/10 hover:bg-[var(--color-slate-400)]/5
                             px-3 py-1 text-xl font-medium
                             leading-5 text-[var(--color-text-primary_60)]">
            <FaSpotify className="m-1" />
            <span className="text-xs text-[var(--color-slate-400)]">Escuchar en Spotify</span>
          </button>
        </Link>

        <div className="flex-1 flex items-center">
          <SavePlaylistButton playlistName={title} uris={uris}  onRequireLogin={onRequireLogin} onSaveResult={onSaveResult}/>
        </div>
      </div>
    </div>
  );
}
