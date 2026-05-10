import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={
        "flex justify-between items-center px-3 sm:px-7.5  h-12 shadow-xl shadow-gray-300  dark:shadow-none dark:bg-[#374152] dark:text-white  transition-colors ease-in duration-300"
      }
    >
      <Link to={"/"} className="font-bold text-md text-shadow-2xs  ">
        Where in the world?
      </Link>

      <button
        onClick={toggleTheme}
        className="text-sm font-bold cursor-pointer"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
};
