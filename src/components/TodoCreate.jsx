import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSumitAddTodo = (e) => {
    e.preventDefault();

    if (title.trim().length > 0) {
      createTodo(title);
      return setTitle("");
    } else {
      setTitle("");
    }
  };

  return (
    <form
      onSubmit={handleSumitAddTodo}
      className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
    >
      <span className="inline-block h-7 w-7 rounded-full border-2"></span>
      <input
        className="w-full text-gray-500 outline-none"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
