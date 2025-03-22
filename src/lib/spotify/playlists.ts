export async function getCurrentUserId(accessToken: string) {
    const res = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    return data.id;
  }
  
  export async function createPlaylist(
    accessToken: string,
    userId: string,
    name: string,
    description = "Playlist creada desde Chill Space"
  ) {
    const res = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        public: false,
      }),
    });
    const data = await res.json();
    return data.id;
  }
  
  export async function addTracksToPlaylist(
    accessToken: string,
    playlistId: string,
    trackUris: string[]
  ) {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: trackUris,
      }),
    });
    return await res.json();
  }
  
  export async function savePlaylistFlow(
    accessToken: string,
    playlistName: string,
    trackUris: string[]
  ) {
    const userId = await getCurrentUserId(accessToken);
    const playlistId = await createPlaylist(accessToken, userId, playlistName);
    await addTracksToPlaylist(accessToken, playlistId, trackUris);
    return playlistId;
  }
  