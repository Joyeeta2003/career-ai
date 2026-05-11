function InternshipCard({ company, role, status }) {

  const statusColors = {
    Applied: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

    Interview: "bg-blue-500/10 text-blue-400 border-blue-500/20",

    Accepted: "bg-green-500/10 text-green-400 border-green-500/20",

    Rejected: "bg-red-500/10 text-red-400 border-red-500/20",
  }

  return (
<div className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold">
        {company}
      </h2>

      <p className="text-gray-400 mt-3">
        {role}
      </p>

      <div
        className={`inline-block mt-6 px-4 py-2 rounded-xl border font-medium ${statusColors[status]}`}
      >
        {status}
      </div>

    </div>
  )
}

export default InternshipCard