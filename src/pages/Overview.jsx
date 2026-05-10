import StatsCard from "../components/StatsCard"
import AnalyticsChart from "../components/AnalyticsChart"
import PageHeader from "../components/PageHeader"
import dashboardStats from "../data/dashboardStats"

function Overview() {
  return (
    <div>

      {/* Heading */}
      <PageHeader
  badge="Dashboard"
  title="Welcome Back, Joyeeta 👋"
/>

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