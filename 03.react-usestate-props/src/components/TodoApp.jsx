import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div>
      <h2>Todo App</h2>
      <TodoForm setTodos={setTodos} />
      {todos.length > 0 && (
        <button onClick={handleClearAll} style={{ marginBottom: "10px" }}>
          Clear All
        </button>
      )}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
