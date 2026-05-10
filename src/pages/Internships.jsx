import internships from "../data/internships"

import InternshipCard from "../components/InternshipCard"

function Internships() {
  return (
    <div>

      {/* Header */}
      <div className="mb-12">

        <p className="text-purple-400 uppercase tracking-widest font-semibold">
          Career Tracker
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Internship Applications
        </h1>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {internships.map((item, index) => (
          <InternshipCard
            key={index}
            company={item.company}
            role={item.role}
            status={item.status}
          />
        ))}

      </div>

    </div>
  )
}

export default Internships