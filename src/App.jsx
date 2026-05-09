import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import DashboardLayout from "./layouts/DashboardLayout"

import Overview from "./pages/Overview"
import ResumeAnalysis from "./pages/ResumeAnalysis"
import Internships from "./pages/Internships"
import Roadmap from "./pages/Roadmap"

function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>

        <Route index element={<Overview />} />

        <Route
          path="resume-analysis"
          element={<ResumeAnalysis />}
        />

        <Route
          path="internships"
          element={<Internships />}
        />

        <Route
          path="roadmap"
          element={<Roadmap />}
        />

      </Route>

    </Routes>
  )
}

export default App
