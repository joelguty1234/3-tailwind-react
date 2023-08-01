const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className=" container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white px-4 py-4">
        <button className="text-blue-800" onClick={() => changeFilter("all")}>All</button>
        <button className="text-gray-500 hover:text-blue-800" onClick={() => changeFilter("active")}>Active</button>
        <button className="text-gray-500 hover:text-blue-800" onClick={() => changeFilter("completed")}>Complete</button>
      </div>
    </section>
  );
};

export default TodoFilter;
