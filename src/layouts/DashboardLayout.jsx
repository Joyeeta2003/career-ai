import { Outlet } from "react-router-dom"

import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function DashboardLayout() {
  return (
    <div className="bg-black text-white min-h-screen flex">

      <Sidebar />

      <div className="flex-1 p-10 min-w-0">

        <Topbar />

        <Outlet />

      </div>

    </div>
  )
}

export default DashboardLayout