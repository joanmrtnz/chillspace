"use client";

import Image from "next/image";
import Link from "next/link";
import SavePlaylistButton from "../../components/SavePlaylistButton";
import { FaSpotify, FaYoutube } from "react-icons/fa";

export default function PlaylistCard({ title, image, spotifyLink, youtubeLink, uris }: { title: string; image: string; spotifyLink: string; youtubeLink: string, uris: string[] }) {
  return (
    <div className="w-full backdrop-blur-lg bg-[var(--white)]/5 rounded-xl p-4 sm:p-4 shadow-lg">
        <div className="mx-auto grid gap-[15px] md:gap-[50px] mt-3 grid-cols-1 md:grid-cols-[3fr_2fr]"></div>
      <img src={image} alt={title} width={200} height={200} className="rounded-lg mx-auto" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-3">
        <div className="flex-1">
          <Link href={youtubeLink} target="_blank" className="text-red-500 hover:text-red-400">
          <button className="flex items-center rounded-lg bg-teal-400/10 px-3 hover:bg-teal-700/10 px-3 hover:text-[var(--green)] py-1 text-xl font-medium leading-5 text-[var(--light-green)]">
              <FaYoutube className="m-1" />
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <Link href={spotifyLink} target="_blank" className="text-green-400 hover:text-green-300">
            <button className="flex items-center rounded-lg bg-teal-400/10 px-3 hover:bg-teal-700/10 px-3 hover:text-[var(--green)] py-1 text-xl font-medium leading-5 text-[var(--light-green)]">
              <FaSpotify className="m-1" />
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <SavePlaylistButton playlistName={title} uris={uris} />
        </div>
      </div>
    </div>
  );
}
