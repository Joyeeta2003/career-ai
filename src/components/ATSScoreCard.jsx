function ATSScoreCard() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-10 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">

      {/* Header */}
      <div className="mb-8">

        <p className="text-purple-400 uppercase tracking-widest font-semibold">
          ATS Analysis
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Resume Score
        </h2>

      </div>

      {/* Score Section */}
      <div className="flex items-center justify-between flex-wrap gap-8">

        {/* Left */}
        <div>

          <h1 className="text-7xl font-bold text-purple-400">
            82%
          </h1>

          <p className="text-gray-400 mt-3">
            Strong ATS compatibility
          </p>

        </div>

        {/* Right */}
        <div className="flex-1 min-w-[250px]">

          <div className="mb-6">

            <div className="flex justify-between mb-2">

              <p>Keywords Match</p>

              <p>90%</p>

            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

              <div className="w-[90%] h-full bg-purple-500 rounded-full"></div>

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <p>Formatting</p>

              <p>75%</p>

            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

              <div className="w-[75%] h-full bg-blue-500 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ATSScoreCard