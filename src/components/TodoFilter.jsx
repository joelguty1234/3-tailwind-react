const TodoFilter = () => {
    return (
        <section className=" container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white px-4 py-4">
                <button className="text-blue-800">All</button>
                <button className="text-gray-500 hover:text-blue-800">Active</button>
                <button className="text-gray-500 hover:text-blue-800">
                    Complete
                </button>
            </div>
        </section>
    )
}

export default TodoFilter