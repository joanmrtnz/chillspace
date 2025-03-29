import Link from "next/link";
import  moods from "../../../lib/spotify/moods";
import PlaylistCard from "../PlaylistCard";
import { notFound } from "next/navigation";

export default function Playlists({ params }: { params: { mood?: string } }) {
  if (!params?.mood) return notFound();

  const mood = moods.find((m) => m.id === params.mood);
  if (!mood) return notFound();

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Link href="/playlists">
        <button className="absolute top-4 left-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition">
          🡠
        </button>
      </Link>



      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-10">{mood.emoji} {mood.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        {mood.playlists.map((playlist) => (
          <PlaylistCard 
            key={playlist.id} 
            title={playlist.title} 
            image={playlist.image} 
            spotifyLink={playlist.spotifyLink} 
            youtubeLink={playlist.youtubeLink} 
            uris={playlist.uris}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
