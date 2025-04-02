import Link from "next/link";
import  moods from "../../../lib/spotify/moods";
import PlaylistCard from "../PlaylistCard";
import { notFound } from "next/navigation";

export default function Playlists({ params }: { params: { mood?: string } }) {
  if (!params?.mood) return notFound();

  const mood = moods.find((m) => m.id === params.mood);
  if (!mood) return notFound();

  return (
    <div className="md:mt-[30px] bg-[var(--navy)] min-h-screen flex items-center justify-center px-4" >
      <Link href="/playlists">
        <button className="absolute top-25 left-10 text-[var(--white)] p-3 hover:bg-[var(--dark-navy)] rounded-lg  transition">
          🡠
        </button>
      </Link>



      <div className="flex flex-col items-center">
        {/* <h1 className="text-3xl font-bold mt-8 mb-5">{mood.name}</h1> */}
        {/* <img src={mood.emoji} className="w-[2.5rem]"/> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 w-full max-w-4xl">
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
