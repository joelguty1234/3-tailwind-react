import TodoItem from "./TodoItem";
const TodoList = ({ todos, removeButtonCheck, updateButtonCheck }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white ">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeButtonCheck={removeButtonCheck} updateButtonCheck={updateButtonCheck} />
      ))}
    </div>
  );
};

export default TodoList;
