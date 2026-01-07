"use client";

export default function SpotifyEmbed() {
  const playlistId = "3uOtybFD6g0VEjVFncGhGH";

  return (
    <iframe
      title="Spotify Playlist"
      src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
      width="100%"
      style={{ minHeight: "160px", borderRadius: "12px" }}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}
