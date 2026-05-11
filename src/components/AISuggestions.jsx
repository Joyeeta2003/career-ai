const suggestions = [
  "Add more measurable achievements in your experience section.",
  "Include backend technologies like Node.js and Express.",
  "Improve ATS keyword matching for frontend developer roles.",
  "Add GitHub and portfolio project links.",
]

function AISuggestions() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-10  hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">

      {/* Header */}
      <div className="mb-8">

        <p className="text-purple-400 uppercase tracking-widest font-semibold">
          AI Recommendations
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Suggested Improvements
        </h2>

        <p className="text-gray-400 mt-4">
          AI-generated recommendations to improve your resume quality.
        </p>

      </div>

      {/* Suggestions */}
      <div className="space-y-5">

        {suggestions.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4 items-start  hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shrink-0">

              ✨

            </div>

            {/* Text */}
            <p className="text-gray-300 leading-relaxed">
              {item}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default AISuggestions