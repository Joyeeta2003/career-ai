import FeatureCard from "./FeatureCard"
import featuresData from "../data/featuresData"

function Features() {
  return (
    <section className="px-8 py-24">

      <div className="text-center mb-20">

        <p className="text-purple-400 uppercase tracking-widest font-semibold">
          Features
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Everything You Need
        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

  {featuresData.map((feature, index) => (
    <FeatureCard
      key={index}
      title={feature.title}
      description={feature.description}
    />
  ))}

</div>

    </section>
  )
}

export default Features