
function FeatureCard({ title, description }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 mb-6"></div>

      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

    </div>
  )
}

export default FeatureCard