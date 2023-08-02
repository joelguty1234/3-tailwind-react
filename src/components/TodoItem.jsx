import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";


const TodoItem = ({ todo, removeButtonCheck, updateButtonCheck }) => {


    return (
        <article className="dark:bg-gray-800 flex gap-4 border-b-[1.0px] border-b-gray-400 px-4 py-4">
            <button
                className={`h-7 w-7 flex-none rounded-full border-2 ${todo.completed
                    ? "flex items-center justify-center bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-300"
                    : "inline-block"
                    }`}
                onClick={() => updateButtonCheck(todo.id)}>
                {todo.completed && <IconCheck />}
            </button>
            <p
                className={`grow text-gray-600 ${todo.completed ? "line-through" : ""}`}>
                {todo.title}</p>
            <button className="flex-none"
                onClick={() => removeButtonCheck(todo.id)}>
                <CrossIcon></CrossIcon>
            </button>
        </article>
    );
};

export default TodoItem;
