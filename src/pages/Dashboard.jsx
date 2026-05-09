import Sidebar from "../components/Sidebar"
import dashboardStats from "../data/dashboardStats"
import StatsCard from "../components/StatsCard"
import Topbar from "../components/Topbar"
import AnalyticsChart from "../components/AnalyticsChart"

function Dashboard() {
    return (
        <div className="bg-black text-white min-h-screen flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-10 min-w-0">
                <Topbar />

                {/* Header */}
                <div className="mb-12">

                    <p className="text-purple-400 uppercase tracking-widest font-semibold">
                        Dashboard
                    </p>

                    <h1 className="text-5xl font-bold mt-4">
                        Welcome Back, Joyeeta 👋
                    </h1>

                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {dashboardStats.map((item, index) => (
                        <StatsCard
                            key={index}
                            title={item.title}
                            value={item.value}
                        />
                    ))}

                </div>

                <AnalyticsChart />

            </div>

        </div>
    )
}

export default Dashboard