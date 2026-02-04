import React, { useEffect, useReducer, useRef } from "react";
import YouTube from "react-youtube";
import TrackList from "./TrackList";
import PlayerControls from "./PlayerControls";

const initialState = {
  tracks: [],
  currentIndex: 0,
  isPlaying: false
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TRACKS":
      return { ...state, tracks: action.payload };
    case "PLAY":
      return { ...state, isPlaying: true };
    case "PAUSE":
      return { ...state, isPlaying: false };
    case "NEXT":
      return { ...state, currentIndex: (state.currentIndex + 1) % state.tracks.length, isPlaying: true };
    case "PREV":
      return { ...state, currentIndex: (state.currentIndex - 1 + state.tracks.length) % state.tracks.length, isPlaying: true };
    default:
      return state;
  }
}

export default function MusicPlayer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const playerRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3001/tracks")
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_TRACKS", payload: data }))
      .catch(err => console.error("Failed to fetch tracks:", err));
  }, []);

  useEffect(() => {
    if (playerRef.current && typeof playerRef.current.playVideo === "function") {
      state.isPlaying ? playerRef.current.playVideo() : playerRef.current.pauseVideo();
    }
  }, [state.isPlaying, state.currentIndex]);

  const onReady = (event) => {
    playerRef.current = event.target;
    if (state.isPlaying) {
      playerRef.current.playVideo();
    }
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: { autoplay: 0 }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Music Player (YouTube)</h2>
      <TrackList tracks={state.tracks} currentIndex={state.currentIndex} />
      <PlayerControls isPlaying={state.isPlaying} dispatch={dispatch} />
      {state.tracks.length > 0 && (
        <YouTube
          videoId={state.tracks[state.currentIndex].youtubeId}
          opts={opts}
          onReady={onReady}
        />
      )}
    </div>
  );
}
