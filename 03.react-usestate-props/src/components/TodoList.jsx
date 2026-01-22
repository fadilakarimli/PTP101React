import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  if (todos.length === 0) {
    return <p>No todos yet</p>;
  }

  return (
    <ul>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
