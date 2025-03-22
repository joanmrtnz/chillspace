export function buildSpotifyAuthUrl(redirectTo: string) {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI!;
  const SCOPES = "playlist-modify-public playlist-modify-private";

  return `https://accounts.spotify.com/authorize?` +
    `client_id=${CLIENT_ID}&` +
    `response_type=code&` +
    `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
    `scope=${encodeURIComponent(SCOPES)}&` +
    `state=${Math.random().toString(36).substring(7)}&` +
    `redirectTo=${encodeURIComponent(redirectTo)}`;
}
