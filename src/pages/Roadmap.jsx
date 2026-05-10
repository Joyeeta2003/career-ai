import roadmap from "../data/roadmap"
import PageHeader from "../components/PageHeader"
import RoadmapCard from "../components/RoadmapCard"

function Roadmap() {
  return (
    <div>

      {/* Header */}
      <PageHeader
  badge="Learning Journey"
  title="Career Roadmap"
/>

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