const TodoComputed = ({ countItemsLeftTodo, clearItemsCompletedTodo }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
      <span className="text-gray-400">{countItemsLeftTodo} items left</span>
      <button className="text-gray-400"
        onClick={() => clearItemsCompletedTodo()}
      >Clear Completed</button>
    </section>
  );
};

export default TodoComputed;
