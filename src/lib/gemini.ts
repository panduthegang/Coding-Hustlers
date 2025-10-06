import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateTestQuestions(topic: string, difficulty: string, count: number = 10) {
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

export async function generateMCQQuestions(courseTopic: string, chapterTitle: string, chapterDescription: string, count: number = 5) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Generate ${count} multiple-choice questions for a ${courseTopic} course, specifically for the chapter titled "${chapterTitle}".

  Chapter description: ${chapterDescription}

  Return the response as a JSON array with the following structure:
  [
    {
      "question": "Question text here?",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctAnswer": "The exact correct option text"
    }
  ]

  Make sure questions are relevant, clear, and test understanding of the chapter concepts.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }

  throw new Error('Failed to generate MCQ questions');
}

export async function generateCodingChallenge(courseTopic: string, chapterTitle: string, chapterDescription: string, difficulty: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Generate a coding challenge for a ${courseTopic} course, specifically for the chapter titled "${chapterTitle}".

  Chapter description: ${chapterDescription}
  Difficulty level: ${difficulty}

  Return the response as a JSON object with the following structure:
  {
    "title": "Challenge title",
    "description": "Detailed problem description that tests understanding of this chapter",
    "examples": ["Example 1 with input/output", "Example 2 with input/output"],
    "constraints": ["Constraint 1", "Constraint 2"],
    "difficulty": "${difficulty}"
  }

  Make sure the challenge is relevant to the chapter and appropriate for the difficulty level.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }

  throw new Error('Failed to generate coding challenge');
}

export async function evaluateCodingChallenge(challengeTitle: string, challengeDescription: string, code: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Evaluate the following code solution for this coding challenge:

  Challenge: ${challengeTitle}
  Description: ${challengeDescription}

  User's Code:
  ${code}

  Return a JSON object with:
  {
    "score": number (0-100, where 60+ is passing),
    "feedback": "Detailed constructive feedback on the code quality, correctness, efficiency, and suggestions for improvement"
  }

  Be fair but constructive in your evaluation. Consider correctness, code quality, and approach.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }

  throw new Error('Failed to evaluate code');
}
