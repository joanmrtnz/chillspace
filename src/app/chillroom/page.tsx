"use client";
import { useRouter } from "next/navigation";
import animations from "@/lib/chillroom/animations";

  export default function ChillRoomPage() {
    const router = useRouter();
  return (
    <div className="md:min-h-screen min-h-[80vh] flex flex-col items-start justify-center text-left px-6  m-auto bg-[var(--navy)] p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Escoje tu fondo Chill</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {animations.map((animation) => (
        <button
          key={animation.id}
          className="text-6xl hover:opacity-30 rounded-xl bg-white transition"
          onClick={() => router.push(`/chillroom/${animation.id}`)}
        >
          <img src={animation.thumb} className="w-[200px] rounded-xl"/>
        </button>
      ))}
    </div>
  </div>
);
}

