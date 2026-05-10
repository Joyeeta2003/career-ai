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
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between">

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