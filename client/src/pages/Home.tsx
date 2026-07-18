import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
            🚀 AI Powered Interview Preparation
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Ace Your
            <br />
            <span className="text-cyan-400">Dream Job Interview</span>
          </h1>

          <p className="text-slate-300 text-lg mt-6">
            Practice technical and HR interviews with AI, receive instant
            feedback, improve your confidence, and get placement-ready for top
            companies.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition">
              Start Interview
            </button>

            <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-cyan-400">10K+</h2>
              <p className="text-slate-400">Practice Interviews</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">95%</h2>
              <p className="text-slate-400">Success Rate</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
              <p className="text-slate-400">AI Available</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full bg-cyan-400/20 flex items-center justify-center">
            <div className="w-60 h-60 rounded-full bg-cyan-400/30 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-cyan-400 flex items-center justify-center text-6xl">
                🤖
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center">
          Why Choose{" "}
          <span className="text-cyan-400">InterviewAI?</span>
        </h2>

        <p className="text-center text-slate-400 mt-4">
          Everything you need to prepare for your dream job interviews.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <FeatureCard
            icon="🤖"
            title="AI Interviewer"
            description="Practice realistic HR and technical interviews with AI."
          />

          <FeatureCard
            icon="📊"
            title="Performance Analytics"
            description="Receive detailed feedback and improve after every interview."
          />

          <FeatureCard
            icon="🎯"
            title="Placement Ready"
            description="Prepare for top companies like TCS, Infosys, Accenture, Google, Amazon and more."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;