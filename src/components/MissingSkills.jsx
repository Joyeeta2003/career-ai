const missingSkills = [
  "Node.js",
  "MongoDB",
  "REST API",
  "TypeScript",
  "Docker",
]

function MissingSkills() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-10  hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">

      {/* Header */}
      <div className="mb-8">

        <p className="text-purple-400 uppercase tracking-widest font-semibold">
          Skill Gap Analysis
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Missing Skills
        </h2>

        <p className="text-gray-400 mt-4">
          AI detected these important missing skills
          based on your target role.
        </p>

      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-4">

        {missingSkills.map((skill, index) => (
          <div
            key={index}
            className="px-5 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium  hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            {skill}
          </div>
        ))}

      </div>

    </div>
  )
}

export default MissingSkills
