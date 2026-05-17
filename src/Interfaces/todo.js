export const createTodo = (id, title) => ({
  id,
  title,
  completed: false,
  createdAt: new Date().toLocaleDateString("tr-TR"),
});