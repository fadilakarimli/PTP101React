import React from "react";
import MusicPage from "./pages/MusicPage";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>React Music Player with Mock API</h1>
      <MusicPage />
    </div>
  );
}
