import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

const data = [
    {
        month: "Jan",
        score: 45,
    },

    {
        month: "Feb",
        score: 60,
    },

    {
        month: "Mar",
        score: 68,
    },

    {
        month: "Apr",
        score: 80,
    },

    {
        month: "May",
        score: 82,
    },
]

function AnalyticsChart() {
    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-10">

            <div className="mb-8">

                <p className="text-purple-400 uppercase tracking-widest font-semibold">
                    Analytics
                </p>

                <h2 className="text-3xl font-bold mt-2">
                    ATS Score Growth
                </h2>

            </div>


            <ResponsiveContainer width="100%" height={350}>

                <LineChart data={data}>

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#a855f7"
                        strokeWidth={4}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    )
}

export default AnalyticsChart