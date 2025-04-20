"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Player from "lottie-react";
import animations from "@/lib/chillroom/animations";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ChillAnimation({ params }: { params: Promise<{ animation?: string }> }) {
  const { animation } = use(params);
  if (!animation) return null;

  const anim = animations.find(a => a.id === animation);
  if (!anim) return notFound();

  const animationData = require(`@/../public${anim.file}`);

  return (
    <div>
        <Link href="/chillroom">
        <button className="absolute top-25 left-10 text-[var(--white)] p-3 hover:bg-[var(--dark-navy)] rounded-lg transition">
         <FaArrowLeft />
        </button>
      </Link>
    <div className="w-screen h-screen md:w-full md:h-full flex items-center justify-center overflow-hidden transform origin-center 
              md:rotate-0 rotate-90">
      <Player
        autoplay
        loop
        animationData={animationData}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
    </div>
  );
}
