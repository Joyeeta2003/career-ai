import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"

function Home() {

  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen transition duration-500"
          : "bg-white text-black min-h-screen transition duration-500"
      }
    >

      <div className="max-w-7xl mx-auto">

        <Navbar />
        <Hero />
        <Features />

      </div>

    </div>
  )
}

export default Home