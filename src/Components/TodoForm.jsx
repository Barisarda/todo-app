import { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Lütfen görev giriniz");
      return;
    }

    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-5">
      <input
        type="text"
        placeholder="Görev ekle..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border p-2 rounded-lg"
      />

      <button className="bg-blue-600 text-white px-4 rounded-lg">
        Ekle
      </button>
    </form>
  );
}

export default TodoForm;