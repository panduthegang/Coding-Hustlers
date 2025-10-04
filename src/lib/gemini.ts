import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateMCQQuestions(topic: string, difficulty: string, count: number = 10) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Generate ${count} multiple-choice questions about ${topic} at ${difficulty} difficulty level.

  Return the response as a JSON array with the following structure:
  [
    {
      "question": "Question text here?",
      "options": {
        "A": "Option A text",
        "B": "Option B text",
        "C": "Option C text",
        "D": "Option D text"
      },
      "correct_answer": "A",
      "explanation": "Brief explanation of the correct answer"
    }
  ]

  Make sure questions are relevant, clear, and appropriate for ${difficulty} level.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }

  throw new Error('Failed to generate questions');
}

export async function generateCodingProblem(topic: string, difficulty: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Generate a coding problem about ${topic} at ${difficulty} difficulty level.

  Return the response as a JSON object with the following structure:
  {
    "title": "Problem title",
    "description": "Detailed problem description",
    "examples": [
      {
        "input": "Example input",
        "output": "Example output",
        "explanation": "Why this output"
      }
    ],
    "constraints": ["Constraint 1", "Constraint 2"],
    "testCases": [
      {
        "input": "Test input",
        "expectedOutput": "Expected output"
      }
    ],
    "starterCode": {
      "javascript": "function solution() { }",
      "python": "def solution():\\n    pass",
      "java": "public class Solution { }"
    }
  }`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }

  throw new Error('Failed to generate coding problem');
}

export async function evaluateCode(code: string, problem: string, testCases: any[]) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Evaluate the following code solution for this problem:

  Problem: ${problem}

  Code:
  ${code}

  Test Cases: ${JSON.stringify(testCases)}

  Return a JSON object with:
  {
    "passed": true/false,
    "score": number (0-100),
    "feedback": "Detailed feedback on the code",
    "testResults": [
      {
        "passed": true/false,
        "expected": "expected output",
        "actual": "actual output"
      }
    ]
  }`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }

  throw new Error('Failed to evaluate code');
}
