"use client";

import Image from "next/image";
import Link from "next/link";
import SavePlaylistButton from "../../components/SavePlaylistButton";
import { FaSpotify, FaYoutube } from "react-icons/fa";

export default function PlaylistCard({ title, image, spotifyLink, youtubeLink, uris }: { title: string; image: string; spotifyLink: string; youtubeLink: string, uris: string[] }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <img src={image} alt={title} width={200} height={200} className="rounded-lg mx-auto" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-3">
        <div className="flex-1">
          <Link href={youtubeLink} target="_blank" className="text-red-500 hover:text-red-400">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center">
              <FaYoutube className="m-1" />
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <Link href={spotifyLink} target="_blank" className="text-green-400 hover:text-green-300">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center">
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
