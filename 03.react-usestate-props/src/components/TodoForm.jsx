import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Please write a todo!");
      return;
    }

    // 🔴 ÇATIŞAN HİSSƏ BURADAYDI
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);

    setText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Write todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
          {error && (
            <p style={{ color: "red", margin: "5px 0 0 0", fontSize: "14px" }}>
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
