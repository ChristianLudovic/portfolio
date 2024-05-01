export default function SpotifyPlaylist() {
  return (
    <iframe 
        style = {{
            borderRadius: "12px"
        }}
        src="https://open.spotify.com/embed/playlist/158XiLMFYMMebf7LqTjS1M?utm_source=generator" 
        width="30%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
    </iframe>
  );
}