import internships from "../data/internships"
import PageHeader from "../components/PageHeader"
import InternshipCard from "../components/InternshipCard"
import { useState } from "react"

function Internships() {
  const [searchTerm, setSearchTerm] = useState("")

const [statusFilter, setStatusFilter] = useState("All")

const filteredInternships = internships.filter((item) => {

  const matchesSearch =
    item.company
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

  const matchesStatus =
    statusFilter === "All" ||
    item.status === statusFilter

  return matchesSearch && matchesStatus
})

  return (
    <div>

      {/* Header */}
      <PageHeader
  badge="Career Tracker"
  title="Internship Applications"
/>

<div className="flex flex-col md:flex-row gap-4 mb-10">

  {/* Search */}
  <input
    type="text"
    placeholder="Search company..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
  />

  {/* Filter */}
  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
  >

    <option>All</option>
    <option>Applied</option>
    <option>Interview</option>
    <option>Accepted</option>
    <option>Rejected</option>

  </select>

</div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {filteredInternships.map((item, index) => (
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