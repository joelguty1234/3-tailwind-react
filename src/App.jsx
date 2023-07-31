import TodoHeader from "./components/TodoHeader";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  return (
    <div
      className="min-h-screen
    bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat"
    >
      {/* TodoHeader */}
      <TodoHeader></TodoHeader>
      <main className="container mx-auto mt-8 px-4">
        {/* TodoCreate */}
        <TodoCreate></TodoCreate>
        {/* TodoList (TodoItem) TodoUpdate TodoDelete */}
        <TodoList></TodoList>
        {/* TodoComputed */}
        <TodoComputed></TodoComputed>
        {/* TodoFilter */}
        <TodoFilter></TodoFilter>
      </main>

      <p className="mt-8 px-4 py-4 text-center text-gray-500">
        {" "}
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default App;
