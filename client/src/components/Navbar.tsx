import { Link } from "react-router-dom";
function Navbar() {
    return (
      <nav className="w-full border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
  
          <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
            InterviewAI
          </h1>
  
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>
  
            <a href="#" className="hover:text-cyan-400 transition">
              Features
            </a>
  
            <a href="#" className="hover:text-cyan-400 transition">
              About
            </a>
          </div>
  
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Login
            </button>
  
            <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition">
              Sign Up
            </button>
          </div>
  
        </div>
      </nav>
    );
  }
  
  export default Navbar;