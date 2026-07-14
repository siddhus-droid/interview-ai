import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Side */}
        <div className="flex-1">

          <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
            🚀 AI Powered Interview Preparation
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Ace Your
            <br />
            Dream Job
            <br />
            <span className="text-cyan-400">Interview</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            Practice technical and HR interviews with AI. Receive instant
            feedback, improve your confidence, and track your progress with a
            modern AI-powered interview platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-300 transition">
              Start Interview
            </button>

            <button className="border border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-800 transition">
              Learn More
            </button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-cyan-400">10K+</h2>
              <p className="text-gray-400">Practice Interviews</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">95%</h2>
              <p className="text-gray-400">Success Rate</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
              <p className="text-gray-400">AI Available</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-[420px] h-[420px] rounded-full bg-cyan-500/20 flex items-center justify-center">
              <div className="w-[320px] h-[320px] rounded-full bg-cyan-400/30 flex items-center justify-center">
                <span className="text-[120px]">🤖</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8 py-24">

  <h2 className="text-5xl font-bold text-center">
    Why Choose
    <span className="text-cyan-400"> InterviewAI?</span>
  </h2>

  <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
    Everything you need to prepare for technical interviews,
    HR interviews and placement drives.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-20">

    <FeatureCard
      icon="🤖"
      title="AI Interviewer"
      description="Practice with an AI interviewer that adapts questions based on your answers."
    />

    <FeatureCard
      icon="📊"
      title="Performance Analytics"
      description="Receive detailed reports, scores and improvement suggestions after every interview."
    />

    <FeatureCard
      icon="🎯"
      title="Placement Ready"
      description="Prepare for TCS, Infosys, Accenture, Google, Amazon and many more companies."
    />

  </div>

</section>
    </div>
  );
}

export default Home;