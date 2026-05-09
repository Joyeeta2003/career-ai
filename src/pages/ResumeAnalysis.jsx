import ResumeUpload from "../components/ResumeUpload"
import ATSScoreCard from "../components/ATSScoreCard"
import MissingSkills from "../components/MissingSkills"
import AISuggestions from "../components/AISuggestions"

function ResumeAnalysis() {
  return (
    <div>

      <ResumeUpload />
      <ATSScoreCard />
      <MissingSkills />
      <AISuggestions />

    </div>
  )
}

export default ResumeAnalysis