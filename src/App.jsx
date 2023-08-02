import TodoHeader from "./components/TodoHeader";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";
// const initialStateTodos = [
//   { id: 1, title: "Complete Online Javascript", completed: true },
//   { id: 2, title: "Go to the gym", completed: false },
//   { id: 3, title: "pick up groceries", completed: false },
//   { id: 4, title: "Read for 1 hour", completed: false },
//   { id: 5, title: "Complete Todo App on Frontend Mentor", completed: false },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || []

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeButtonCheck = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateButtonCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const countItemsLeftTodo = todos.filter((todo) => !todo.completed).length;

  const clearItemsCompletedTodo = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");
  const changeFilter = (filter) => setFilter(filter);
  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div
      className="min-h-screen
      bg-gray-300
      bg-[url('./assets/images/bg-mobile-light.jpg')] 
      bg-contain 
      bg-no-repeat 
      dark:bg-gray-900 
      dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
      md:bg-[url('./assets/images/bg-desktop-light.jpg')]
      md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
    >
      <TodoHeader />
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filteredTodos()}
          removeButtonCheck={removeButtonCheck}
          updateButtonCheck={updateButtonCheck}
        />
        <TodoComputed
          countItemsLeftTodo={countItemsLeftTodo}
          clearItemsCompletedTodo={clearItemsCompletedTodo}
        />
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
      <footer className="mt-8 px-4 py-4 text-center text-gray-500 dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
