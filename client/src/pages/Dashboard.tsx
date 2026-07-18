import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold">
        🎉 Welcome to InterviewAI Dashboard
      </h1>

      <p className="text-slate-400 mt-4">
        You have successfully logged in.
      </p>

      <button
        onClick={handleLogout}
        className="mt-8 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;