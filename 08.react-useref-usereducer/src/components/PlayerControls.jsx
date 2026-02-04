import React from "react";

export default function PlayerControls({ isPlaying, dispatch }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => dispatch({ type: "PREV" })}>Prev</button>
      <button onClick={() => dispatch({ type: isPlaying ? "PAUSE" : "PLAY" })}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
    </div>
  );
}
