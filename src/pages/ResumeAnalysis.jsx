import ResumeUpload from "../components/ResumeUpload"
import ATSScoreCard from "../components/ATSScoreCard"
import MissingSkills from "../components/MissingSkills"

function ResumeAnalysis() {
  return (
    <div>

      <ResumeUpload />
      <ATSScoreCard />
      <MissingSkills />

    </div>
  )
}

export default ResumeAnalysis