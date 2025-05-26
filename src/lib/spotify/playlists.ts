export async function getCurrentUserId(accessToken: string) {
    const res = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    return data.id;
  }

  export async function followPlaylist(
    accessToken: string,
    playlistId: string,
  ) {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public: false,
      }),
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
    return data;

  }
  
  export async function followPlaylistFlow(
    accessToken: string,
    playlistId: string,
    
  ) {
    await followPlaylist(accessToken, playlistId);
    return playlistId;
  }
  