function StatsCard({ title, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition duration-300">

      <p className="text-gray-400 mb-4">
        {title}
      </p>

      <h1 className="text-3xl font-bold">
        {value}
      </h1>

    </div>
  )
}

export default StatsCard