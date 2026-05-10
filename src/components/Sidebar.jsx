import { NavLink } from "react-router-dom"

import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Route,
} from "lucide-react"

function Sidebar({ closeSidebar }) {
  return (
    <div className="w-72 min-h-screen bg-white/5 border-r border-white/10 p-8">

      {/* Logo */}
      <h1 className="text-3xl font-bold mb-16">
        Career AI
      </h1>

      {/* Navigation */}
      <div className="space-y-4">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          end
          onClick={closeSidebar}
          className={({ isActive }) =>
            `block px-5 py-4 rounded-2xl font-semibold transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : "hover:bg-white/5"
            }`
          }
        >
          <div className="flex items-center gap-3">

            <LayoutDashboard size={20} />

            <span>Dashboard</span>

          </div>
        </NavLink>

        {/* Resume Analysis */}
        <NavLink
          to="/dashboard/resume-analysis"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `block px-5 py-4 rounded-2xl font-semibold transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : "hover:bg-white/5"
            }`
          }
        >
          <div className="flex items-center gap-3">

            <FileText size={20} />

            <span>Resume Analysis</span>

          </div>
        </NavLink>

        {/* Internship Tracker */}
        <NavLink
          to="/dashboard/internships"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `block px-5 py-4 rounded-2xl font-semibold transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : "hover:bg-white/5"
            }`
          }
        >
          <div className="flex items-center gap-3">

            <Briefcase size={20} />

            <span>Internship Tracker</span>

          </div>
        </NavLink>

        {/* Learning Roadmap */}
        <NavLink
          to="/dashboard/roadmap"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `block px-5 py-4 rounded-2xl font-semibold transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : "hover:bg-white/5"
            }`
          }
        >
          <div className="flex items-center gap-3">

            <Route size={20} />

            <span>Learning Roadmap</span>

          </div>
        </NavLink>

      </div>

    </div>
  )
}

export default Sidebar