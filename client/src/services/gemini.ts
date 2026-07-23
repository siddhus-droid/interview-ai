import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateInterviewQuestions(
  role: string,
  difficulty: string,
  type: string,
  questions: number
) {
  const prompt = `
You are an expert technical interviewer.

Generate exactly ${questions} ${type} interview questions for a ${role}.

Difficulty: ${difficulty}

Return only the questions as a numbered list.
`;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
      contents: prompt,
    });

    console.log(response);

    return response.text ?? "No response received.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}