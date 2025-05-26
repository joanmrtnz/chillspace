"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PlaylistCard from "./PlaylistCard";

interface Playlist {
  id: number;
  playlistId: string;
  title: string;
  image: string;
  genres: string[];
  spotifyLink: string;
  youtubeLink: string;
}

export default function PlaylistCarousel({ playlists, onRequireLogin, onFollowResult } : { 
    playlists: Playlist[]; 
    onRequireLogin: () => void;
    onFollowResult: (r: "success" | "error") => void; }){
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {playlists.map((pl) => (
        <SwiperSlide key={pl.id}>
          <PlaylistCard {...pl} 
          onRequireLogin={onRequireLogin}
          onFollowResult={onFollowResult} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
