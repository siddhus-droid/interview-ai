import { useState } from "react";

function InterviewSetup() {
  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState(5);
  const [type, setType] = useState("Technical");

  const handleStart = () => {
    alert(`
Role: ${role}
Difficulty: ${difficulty}
Questions: ${questions}
Type: ${type}
    `);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-slate-900 rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-white text-center">
          Setup Your Interview
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Configure your interview before starting.
        </p>

        <div className="mt-8 space-y-6">

          <div>
            <label className="text-white block mb-2">
              Job Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 text-white"
            >
              <option value="">Select Role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>AI / ML Engineer</option>
              <option>Data Scientist</option>
            </select>
          </div>

          <div>
            <label className="text-white block mb-2">
              Difficulty
            </label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 text-white"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="text-white block mb-2">
              Number of Questions
            </label>

            <input
              type="number"
              value={questions}
              onChange={(e) => setQuestions(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-slate-800 text-white"
              min={1}
              max={20}
            />
          </div>

          <div>
            <label className="text-white block mb-2">
              Interview Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 text-white"
            >
              <option>Technical</option>
              <option>HR</option>
              <option>Mixed</option>
            </select>
          </div>

          <button
            onClick={handleStart}
            className="w-full bg-cyan-400 text-slate-900 py-3 rounded-lg font-bold hover:bg-cyan-300 transition"
          >
            Start Interview
          </button>

        </div>
      </div>
    </div>
  );
}

export default InterviewSetup;