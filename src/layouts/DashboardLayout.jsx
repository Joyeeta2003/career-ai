import { Outlet } from "react-router-dom"
import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { Menu } from "lucide-react"

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="bg-black text-white min-h-screen flex">

      <div
  className={`fixed lg:static top-0 left-0 z-50 h-screen transition-transform duration-300

  ${
    isSidebarOpen
      ? "translate-x-0"
      : "-translate-x-full lg:translate-x-0"
  }`}
>

  <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />

</div>

      <div className="flex-1 p-10 min-w-0">

        <Topbar />
        <button
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  className="lg:hidden mb-6 bg-white/5 border border-white/10 p-3 rounded-xl"
>

  <Menu />

</button>

        <Outlet />

      </div>

    </div>
  )
}

export default DashboardLayout