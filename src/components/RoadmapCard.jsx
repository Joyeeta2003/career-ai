function RoadmapCard({ topic, status }) {

  const statusStyles = {
    Completed:
      "bg-green-500/10 text-green-400 border-green-500/20",

    "In Progress":
      "bg-blue-500/10 text-blue-400 border-blue-500/20",

    Pending:
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  }

  return (
    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-3xl p-5 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">

      <div>

        <h2 className="text-xl font-bold">
          {topic}
        </h2>

      </div>

      <div
        className={`px-4 py-2 rounded-xl border font-medium ${statusStyles[status]}`}
      >
        {status}
      </div>

    </div>
  )
}

export default RoadmapCard