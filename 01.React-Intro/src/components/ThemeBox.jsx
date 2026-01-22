import { useState } from "react";

function ThemeBox() {
  const [isDark, setIsDark] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const boxStyle = {
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000",
    padding: "30px",
    textAlign: "center",
    fontSize: fontSize + "px"
  };

  const increaseFont = () => {
    if (fontSize < 30) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFont = () => {
    if (fontSize > 10) {
      setFontSize(fontSize - 2);
    }
  };

  return (
    <div style={boxStyle}>
      <p>Hello PTP101</p>

      <button onClick={() => setIsDark(!isDark)}>
         Mode
      </button>

      <div style={{ marginTop: "15px" }}>
        <button onClick={increaseFont}>+</button>
        <button onClick={decreaseFont} style={{ marginLeft: "10px" }}>
          -
        </button>
      </div>
    </div>
  );
}

export default ThemeBox;
