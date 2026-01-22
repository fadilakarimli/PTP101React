import { useState } from "react";

function ThemeBox() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState(16);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const increaseFont = () => {
    if (fontSize < 30) {
      setFontSize(fontSize + 1);
    }
  };

  const decreaseFont = () => {
    if (fontSize > 10) {
      setFontSize(fontSize - 1);
    }
  };

  const boxStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#000000",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
    textAlign: "center"
  };

  return (
    <div style={boxStyle}>
      <h2 style={{ fontSize: `${fontSize}px` }}>
        Hello PTP101
      </h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
      <br /><br />

      <button onClick={increaseFont}>+</button>
      <button onClick={decreaseFont}>-</button>
    </div>
  );
}

export default ThemeBox;
