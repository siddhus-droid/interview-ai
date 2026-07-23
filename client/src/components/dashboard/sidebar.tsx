import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        InterviewAI
      </h1>

      <nav className="flex flex-col gap-5">
        <Link
          to="/dashboard"
          className="hover:text-cyan-400 transition"
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/"
          className="hover:text-cyan-400 transition"
        >
          🌐 Home
        </Link>

        <Link
          to="/login"
          className="hover:text-cyan-400 transition"
        >
          🔐 Login
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;