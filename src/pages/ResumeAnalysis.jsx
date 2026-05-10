import ResumeUpload from "../components/ResumeUpload"
import ATSScoreCard from "../components/ATSScoreCard"
import MissingSkills from "../components/MissingSkills"
import AISuggestions from "../components/AISuggestions"
import PageHeader from "../components/PageHeader"

function ResumeAnalysis() {
  return (
    <div>
      <PageHeader
  badge="Resume Analysis"
  title="AI Resume Scanner"
  description="Upload your resume and receive AI-powered ATS analysis and improvement suggestions."
/>
      <ResumeUpload />
      <ATSScoreCard />
      <MissingSkills />
      <AISuggestions />

    </div>
  )
}

export default ResumeAnalysis