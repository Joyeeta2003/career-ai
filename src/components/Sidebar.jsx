import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-white/5 border-r border-white/10 p-8">

      {/* Logo */}
      <h1 className="text-3xl font-bold mb-16">
        Career AI
      </h1>

      <div className="space-y-4">

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `block px-5 py-4 rounded-2xl font-semibold transition ${isActive
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "hover:bg-white/5"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/resume-analysis"
          className={({ isActive }) =>
            `block px-5 py-4 rounded-2xl font-semibold transition ${isActive
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "hover:bg-white/5"
            }`
          }
        >
          Resume Analysis
        </NavLink>

        <NavLink
          to="/dashboard/internships"
          className={({ isActive }) =>
            `block px-5 py-4 rounded-2xl font-semibold transition ${isActive
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "hover:bg-white/5"
            }`
          }
        >
          Internship Tracker
        </NavLink>

        <NavLink
          to="/dashboard/roadmap"
          className={({ isActive }) =>
            `block px-5 py-4 rounded-2xl font-semibold transition ${isActive
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "hover:bg-white/5"
            }`
          }
        >
          Learning Roadmap
        </NavLink>

      </div>

    </div>
  )
}

export default Sidebar