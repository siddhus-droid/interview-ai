import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <Link
          to="/interview-setup"
          className="bg-cyan-500 hover:bg-cyan-400 rounded-lg p-5 text-center transition font-semibold text-slate-900"
        >
          🎤 Start Interview
        </Link>

        <button className="bg-slate-800 hover:bg-slate-700 rounded-lg p-5 transition">
          📊 View Reports
        </button>

        <button className="bg-slate-800 hover:bg-slate-700 rounded-lg p-5 transition">
          👤 Edit Profile
        </button>
      </div>
    </div>
  );
}

export default QuickActions;