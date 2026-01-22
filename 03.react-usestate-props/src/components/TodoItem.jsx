import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, setTodos }) => {
  const handleDelete = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const toggleCompleted = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <li>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
      </div>
      <button onClick={handleDelete}><FaTrash /></button>
    </li>
  );
};

export default TodoItem;
