import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo, toggleTodo }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleUpdate = () => {
    if (newTitle.trim() === "") {
      alert("Görev boş olamaz");
      return;
    }

    updateTodo(todo.id, newTitle);
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white/80 border border-gray-200 p-4 rounded-xl mb-3 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 cursor-pointer"
        />

        <div className="flex-1">
          {editing ? (
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border p-2 rounded-lg w-full"
            />
          ) : (
            <h3
              className={`text-lg font-medium ${
                todo.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {todo.title}
            </h3>
          )}

          <p className="text-sm text-gray-500">
            Eklenme tarihi: {todo.createdAt}
          </p>
        </div>
      </div>

      <div className="flex gap-2 ml-3">
        {editing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
          >
            Kaydet
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
          >
            Güncelle
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default TodoItem;