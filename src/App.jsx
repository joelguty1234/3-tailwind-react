import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div
      className="min-h-screen
    bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat"
    >
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-400" />
          </button>
        </div>
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
          <span className="inline-block h-7 w-7 rounded-full border-2"></span>
          <input
            className="w-full text-gray-500 outline-none"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white">
          <article className="flex gap-4 border-b-[1.0px] border-b-gray-400 px-4 py-4">
            <button className="inline-block h-7 w-7 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online javascript curse in joelsac
            </p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b-[1.0px] border-b-gray-400 px-4 py-4">
            <button className="inline-block h-7 w-7 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online javascript curse in joelsac
            </p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b-[1.0px] border-b-gray-400 px-4 py-4">
            <button className="inline-block h-7 w-7 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online javascript curse in joelsac
            </p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b-[1.0px] border-b-gray-400 px-4 py-4">
            <button className="inline-block h-7 w-7 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online javascript curse in joelsac
            </p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b-[1.0px] border-b-gray-400 px-4 py-4">
            <button className="inline-block h-7 w-7 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online javascript curse in joelsac
            </p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b-[1.0px] border-b-gray-400 px-4 py-4">
            <button className="inline-block h-7 w-7 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online javascript curse in joelsac
            </p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>

          <section className="flex justify-between px-4 py-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>
      <section className=" container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white px-4 py-4">
          <button className="text-blue-800">All</button>
          <button className="text-gray-500 hover:text-blue-800">Active</button>
          <button className="text-gray-500 hover:text-blue-800">
            Complete
          </button>
        </div>
      </section>
      <p className="mt-8 px-4 py-4 text-center text-gray-500">
        {" "}
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default App;
