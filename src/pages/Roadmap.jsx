import roadmap from "../data/roadmap"

import RoadmapCard from "../components/RoadmapCard"

function Roadmap() {
  return (
    <div>

      {/* Header */}
      <div className="mb-12">

        <p className="text-purple-400 uppercase tracking-widest font-semibold">
          Learning Journey
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Career Roadmap
        </h1>

      </div>

      {/* Roadmap Cards */}
      <div className="space-y-6">

        {roadmap.map((item, index) => (
          <RoadmapCard
            key={index}
            topic={item.topic}
            status={item.status}
          />
        ))}

      </div>

    </div>
  )
}

export default Roadmap