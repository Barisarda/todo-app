import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, updateTodo, toggleTodo }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 bg-gray-100 p-4 rounded-xl">
        Henüz görev eklenmedi.
      </p>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;