
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers"; 
import { savePlaylistFlow } from "../../../lib/spotify/playlists"; 

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("spotify_access_token")?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "No hay token de Spotify" }, { status: 401 });
  }

  try {
    const playlistId = await savePlaylistFlow(accessToken, "Chill Space Mood", [
      "spotify:track:4cOdK2wGLETKBW3PvgPWqT",
      "spotify:track:7GhIk7Il098yCjg4BQjzvb",
    ]);

    return NextResponse.json({ success: true, playlistId });
  } catch (err) {
    console.error("Error al guardar la playlist:", err);
    return NextResponse.json({ error: "Algo falló al crear la playlist" }, { status: 500 });
  }
}
