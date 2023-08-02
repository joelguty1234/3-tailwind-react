import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import IconSun from "./icons/IconSun";
const inicialStateDarkMode = localStorage.getItem('theme') === 'dark'
const TodoHeader = () => {
  const [darkMode, setDarkMode] = useState(inicialStateDarkMode)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }, [darkMode])

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <MoonIcon /> : <IconSun />
          }

        </button>
      </div>
    </header>
  );
};
export default TodoHeader;
