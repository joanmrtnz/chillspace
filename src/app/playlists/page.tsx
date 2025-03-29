"use client";
import { useRouter } from "next/navigation";
import  moods  from "../../lib/spotify/moods";

export default function MoodSelector() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">¿Cómo te sientes hoy?</h1>
      <div className="flex gap-6">
        {moods.map((mood) => (
          <button
            key={mood.id}
            className="text-6xl p-6 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            onClick={() => router.push(`/playlists/${mood.id}`)}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
