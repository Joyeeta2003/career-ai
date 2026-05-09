function ResumeUpload() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-10">

      {/* Header */}
      <div className="mb-8">

        <p className="text-purple-400 uppercase tracking-widest font-semibold">
          Resume Analysis
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Upload Your Resume
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Upload your resume and receive AI-powered ATS analysis,
          skill gap detection, and personalized improvement suggestions.
        </p>

      </div>

      {/* Upload Box */}
      <div className="border-2 border-dashed border-white/10 rounded-3xl p-14 flex flex-col items-center justify-center text-center hover:border-purple-500 transition duration-300 cursor-pointer">

        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-5xl mb-8">

          📄

        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-4">
          Drag & Drop Resume
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
          Upload PDF or DOCX files and let AI analyze your resume
          for ATS optimization and career insights.
        </p>

        {/* Upload Button */}
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition duration-300">

          Upload Resume

        </button>

        {/* File Info */}
        <p className="text-sm text-gray-500 mt-6">
          Maximum file size: 5MB
        </p>

      </div>

    </div>
  )
}

export default ResumeUpload