import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Navbar() {

  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10">

      <h1 className="text-2xl font-bold">
        Career AI
      </h1>

      <div className="hidden md:flex items-center gap-10 text-gray-300">

        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={toggleTheme}
          className="border border-white/20 px-4 py-2 rounded-full"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold">
          Sign In
        </button>

      </div>

    </nav>
  )
}

export default Navbar