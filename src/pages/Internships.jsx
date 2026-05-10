import internships from "../data/internships"
import PageHeader from "../components/PageHeader"
import InternshipCard from "../components/InternshipCard"

function Internships() {
  return (
    <div>

      {/* Header */}
      <PageHeader
  badge="Career Tracker"
  title="Internship Applications"
/>

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