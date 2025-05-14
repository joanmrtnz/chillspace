"use client";
import { useRouter } from "next/navigation";
import { allMoods }  from "../../lib/spotify/moods";
import BackButton from "@/components/BackButton";

export default function MoodSelector() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen min-h-[140vh]">
      <BackButton href="/" positionClass="absolute top-21 left-4" />  

       <div className="bg-white/30 text-center text-[var(--color-slate-400)] px-10 py-6 rounded-md transition space-y-6">
          <h1 className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-bold mb-4">¿Cómo te sientes hoy?</h1>
          <p className="text-base text-sm leading-relaxed">
              Indicanos tu mood para recomendarte playlists.
          </p>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center ">
          {allMoods.map((mood) => (
            <button
              key={mood.id}
              className="flex flex-col items-center justify-center w-36 h-36 bg-white/40 hover:bg-white/10 hover:text-[var(--color-slate-700)] 
              text-[var(--color-slate-400)] px-6 py-4 rounded-md w-full md:w-36 h-20 md:h-36 transition"

              onClick={() => router.push(`/playlists/${mood.id}`)}
            >
              
              <img src={mood.emoji} className="w-[1.75rem] my-4"/>
              {mood.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
