import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { savePlaylistFlow } from "../../../lib/spotify/playlists";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("spotify_access_token")?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "No hay token de Spotify" }, { status: 401 });
  }

  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: "Error al leer el cuerpo de la solicitud" }, { status: 400 });
  }

  const { playlistId } = body;
  if (!playlistId) {
    return NextResponse.json({ error: "Faltan parámetros: playlistId debe estar definido" }, { status: 400 });
  }

  try {
    const result = await savePlaylistFlow(accessToken, playlistId);
    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error("Error al guardar la playlist:", err);
    return NextResponse.json({ error: "Algo falló al crear la playlist" }, { status: 500 });
  }
}
