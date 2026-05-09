function Topbar() {
  return (
    <div className="flex items-center justify-between mb-12">

      {/* Search */}
      <div className="w-full max-w-xl">

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5 ml-6">

        {/* Notification */}
        <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">

          🔔

        </button>

        {/* Profile */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>

          <div>

            <p className="font-semibold">
              Joyeeta
            </p>

            <p className="text-sm text-gray-400">
              Frontend Developer
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Topbar