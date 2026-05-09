import Button from "./Button"

function Hero() {
    return (
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-36">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2"></div>

            {/* Content */}
            <div className="relative z-10">

                <p className="text-purple-400 font-semibold tracking-widest uppercase">
                    AI Powered Platform
                </p>

                <h1 className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight mt-6">
                    Build Your Career With AI Intelligence
                </h1>

                <p className="text-gray-400 text-xl max-w-2xl mt-8 mx-auto leading-relaxed">
                    Analyze resumes, improve ATS score, track applications,
                    and get personalized career guidance powered by AI.
                </p>

                <div className="flex items-center justify-center gap-5 mt-12">

                    <Button text="Get Started" primary={true} />

                    <Button text="Learn More" />

                </div>

            </div>

        </section>
    )
}

export default Hero