function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-white/5 border-r border-white/10 p-8">

      {/* Logo */}
      <h1 className="text-3xl font-bold mb-16">
        Career AI
      </h1>

      {/* Navigation */}
      <div className="space-y-4">

        <button className="w-full text-left px-5 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold">
          Dashboard
        </button>

        <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/5 transition">
          Resume Analysis
        </button>

        <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/5 transition">
          Internship Tracker
        </button>

        <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/5 transition">
          Learning Roadmap
        </button>

      </div>

    </div>
  )
}

export default Sidebar