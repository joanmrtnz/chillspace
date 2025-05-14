import { notFound } from "next/navigation";
import { allMoods } from "@/lib/spotify/moods";
import PlaylistsClient from "./PlaylistsClient";

export default async function PlaylistsPage({
  params,
}: {
  params: Promise<{ mood?: string }>;
}) {
  const { mood } = await params;          
  if (!mood) notFound();

  const moodData = allMoods.find((m) => m.id === mood) ?? notFound();

  return <PlaylistsClient mood={moodData} />; 
}