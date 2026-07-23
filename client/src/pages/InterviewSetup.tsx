import { useState } from "react";
import { generateInterviewQuestions } from "../services/gemini";

function InterviewSetup() {
  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState(5);
  const [type, setType] = useState("Technical");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleStart = async () => {
    if (!role) {
      alert("Please select a job role.");
      return;
    }

    try {
      setLoading(true);

      const response = await generateInterviewQuestions(
        role,
        difficulty,
        type,
        questions
      );

      setResult(response ?? "");
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Failed to generate interview questions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto bg-slate-900 rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          Interview Setup
        </h1>

        <div className="space-y-6 mt-8">
          <div>
            <label className="block mb-2">Job Role</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800"
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
            <label className="block mb-2">Difficulty</label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Interview Type</label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800"
            >
              <option>Technical</option>
              <option>HR</option>
              <option>Mixed</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Number of Questions</label>

            <input
              type="number"
              value={questions}
              min={1}
              max={20}
              onChange={(e) => setQuestions(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-slate-800"
            />
          </div>

          <button
            onClick={handleStart}
            disabled={loading}
            className="w-full bg-cyan-400 text-slate-900 py-3 rounded-lg font-bold hover:bg-cyan-300 transition disabled:opacity-60"
          >
            {loading ? "Generating..." : "Start Interview"}
          </button>

          {result && (
            <div className="mt-8 bg-slate-800 p-6 rounded-lg whitespace-pre-wrap">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                Generated Interview Questions
              </h2>

              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewSetup;