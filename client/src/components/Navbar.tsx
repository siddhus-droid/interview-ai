import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-cyan-400 font-semibold"
      : "text-white hover:text-cyan-400 transition";

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <NavLink
          to="/"
          className="text-2xl font-bold text-cyan-400"
        >
          InterviewAI
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;