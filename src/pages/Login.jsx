function Login() {
  return (
    <div className="min-h-screen bg-black text-white grid grid-cols-1 lg:grid-cols-2">

      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center px-20 relative overflow-hidden">

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-20 left-20"></div>

        <div className="relative z-10">

          <p className="text-purple-400 uppercase tracking-widest font-semibold">
            Career AI Platform
          </p>

          <h1 className="text-6xl font-bold leading-tight mt-6">
            Grow Your Career With AI
          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-xl leading-relaxed">
            Analyze resumes, improve ATS score,
            and track your career journey using AI-powered insights.
          </p>

        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-3">
            Welcome Back
          </h2>

          <p className="text-gray-400 mb-10">
            Sign in to continue
          </p>

          {/* Email */}
          <div className="mb-6">

            <label className="block mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
            />

          </div>

          {/* Password */}
          <div className="mb-8">

            <label className="block mb-2 text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
            />

          </div>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] transition duration-300">

            Sign In

          </button>

        </div>

      </div>

    </div>
  )
}

export default Login