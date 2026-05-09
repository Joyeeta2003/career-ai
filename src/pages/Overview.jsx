import StatsCard from "../components/StatsCard"
import AnalyticsChart from "../components/AnalyticsChart"

import dashboardStats from "../data/dashboardStats"

function Overview() {
  return (
    <div>

      {/* Heading */}
      <div className="mb-12">

        <p className="text-purple-400 uppercase tracking-widest font-semibold">
          Dashboard
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Welcome Back, Joyeeta 👋
        </h1>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {dashboardStats.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}

      </div>

      {/* Chart */}
      <AnalyticsChart />

    </div>
  )
}

export default Overview