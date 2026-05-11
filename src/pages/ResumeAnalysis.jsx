import ResumeUpload from "../components/ResumeUpload"
import ATSScoreCard from "../components/ATSScoreCard"
import MissingSkills from "../components/MissingSkills"
import AISuggestions from "../components/AISuggestions"
import PageHeader from "../components/PageHeader"
import { useState } from "react"


function ResumeAnalysis() {
  const [analysisComplete, setAnalysisComplete] = useState(false)

  return (
    <div>
      <PageHeader
  badge="Resume Analysis"
  title="AI Resume Scanner"
  description="Upload your resume and receive AI-powered ATS analysis and improvement suggestions."
/>
      <ResumeUpload setAnalysisComplete={setAnalysisComplete} />
      <ATSScoreCard />
      <MissingSkills />
      <AISuggestions />

    </div>
  )
}

export default ResumeAnalysis