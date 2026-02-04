import React from "react";

export default function TrackList({ tracks, currentIndex }) {
  return (
    <ul>
      {tracks.map((track, idx) => (
        <li key={track.id} style={{ fontWeight: idx === currentIndex ? "bold" : "normal" }}>
          {track.title} - {track.artist}
        </li>
      ))}
    </ul>
  );
}
