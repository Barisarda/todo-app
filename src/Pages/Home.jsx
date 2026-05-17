import { useEffect, useState } from "react";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";
import { createTodo } from "../Interfaces/todo";

function Home() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = createTodo(Date.now(), title);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-6">
      <div className="max-w-2xl mx-auto bg-white/90 p-6 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          To-Do App
        </h1>

        <p className="text-center text-gray-500 mb-5">
          Görevlerini ekle, güncelle, tamamla ve sil.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-5 text-center">
          <div className="bg-blue-100 p-3 rounded-xl">
            <p className="text-sm text-gray-500">Toplam</p>
            <p className="text-2xl font-bold">{todos.length}</p>
          </div>

          <div className="bg-green-100 p-3 rounded-xl">
            <p className="text-sm text-gray-500">Tamamlanan</p>
            <p className="text-2xl font-bold">{completedCount}</p>
          </div>

          <div className="bg-yellow-100 p-3 rounded-xl">
            <p className="text-sm text-gray-500">Kalan</p>
            <p className="text-2xl font-bold">
              {todos.length - completedCount}
            </p>
          </div>
        </div>

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default Home;