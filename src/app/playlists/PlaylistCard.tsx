import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaYoutube} from "react-icons/fa";

export default function PlaylistCard({ title, image, spotifyLink, youtubeLink }: { title: string; image: string; spotifyLink: string; youtubeLink: string }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <Image src={image} alt={title} width={200} height={200} className="rounded-lg mx-auto" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <div className="flex justify-center gap-4 mt-3">
        <Link href={spotifyLink} target="_blank" className="text-green-400 hover:text-green-300 text-2xl">
          <FaSpotify />
        </Link>
        <Link href={youtubeLink} target="_blank" className="text-red-500 hover:text-red-400 text-2xl">
          <FaYoutube />
        </Link>
      </div>
    </div>
  );
}
