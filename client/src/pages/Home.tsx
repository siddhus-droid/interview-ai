function Home() {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
  
          <h1 className="text-6xl font-bold leading-tight">
            Ace Your
            <br />
            Next Interview
          </h1>
  
          <p className="text-xl text-gray-400 mt-6 max-w-2xl">
            Practice technical and HR interviews with an AI interviewer.
            Get instant feedback, improve your confidence, and track your progress.
          </p>
  
          <div className="mt-10 flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold">
              Start Interview
            </button>
  
            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
              Learn More
            </button>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Home;