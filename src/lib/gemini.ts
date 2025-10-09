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

  IMPORTANT: Do NOT use any asterisks, markdown formatting, or special characters. Use plain text only.

  Return the response as a JSON object with the following structure:
  {
    "title": "Problem title (no asterisks)",
    "description": "Detailed problem description in plain text without any asterisks or markdown",
    "examples": [
      {
        "input": "Example input (plain text)",
        "output": "Example output (plain text)",
        "explanation": "Why this output (plain text)"
      }
    ],
    "constraints": ["Constraint 1 (plain text)", "Constraint 2 (plain text)"],
    "testCases": [
      {
        "input": "Test input",
        "expectedOutput": "Expected output"
      }
    ],
    "starterCode": {
      "javascript": "function solution() {\\n  // Write your code here\\n}",
      "python": "def solution():\\n    # Write your code here\\n    pass",
      "python3": "def solution():\\n    # Write your code here\\n    pass",
      "java": "public class Solution {\\n    public static void main(String[] args) {\\n        // Write your code here\\n    }\\n}",
      "c": "#include <stdio.h>\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
      "cpp": "#include <iostream>\\nusing namespace std;\\n\\nint main() {\\n    // Write your code here\\n    return 0;\\n}",
      "csharp": "using System;\\n\\nclass Solution {\\n    static void Main() {\\n        // Write your code here\\n    }\\n}",
      "go": "package main\\n\\nimport \\"fmt\\"\\n\\nfunc main() {\\n    // Write your code here\\n}",
      "rust": "fn main() {\\n    // Write your code here\\n}",
      "kotlin": "fun main() {\\n    // Write your code here\\n}"
    }
  }

  Remember: Use only plain text without asterisks or markdown formatting in all text fields.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    const parsed = JSON.parse(jsonMatch[0]);
    const cleanText = (str: string) => str.replace(/\*\*/g, '').replace(/\*/g, '').trim();

    return {
      ...parsed,
      title: cleanText(parsed.title),
      description: cleanText(parsed.description),
      examples: parsed.examples.map((ex: any) => ({
        input: cleanText(ex.input),
        output: cleanText(ex.output),
        explanation: cleanText(ex.explanation)
      })),
      constraints: parsed.constraints.map((c: string) => cleanText(c))
    };
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

  IMPORTANT: Do NOT use asterisks or markdown formatting in your feedback. Use plain text only.

  Return a JSON object with:
  {
    "passed": true/false,
    "score": number (0-100),
    "feedback": "Detailed feedback on the code in plain text without asterisks",
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
    const parsed = JSON.parse(jsonMatch[0]);
    const cleanText = (str: string) => str.replace(/\*\*/g, '').replace(/\*/g, '').trim();

    return {
      ...parsed,
      feedback: cleanText(parsed.feedback)
    };
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

  IMPORTANT: Do NOT use asterisks or markdown formatting. Use plain text only.

  Return the response as a JSON object with the following structure:
  {
    "title": "Challenge title (plain text, no asterisks)",
    "description": "Detailed problem description that tests understanding of this chapter (plain text, no asterisks)",
    "examples": ["Example 1 with input/output (plain text)", "Example 2 with input/output (plain text)"],
    "constraints": ["Constraint 1 (plain text)", "Constraint 2 (plain text)"],
    "difficulty": "${difficulty}"
  }

  Make sure the challenge is relevant to the chapter and appropriate for the difficulty level.
  Remember: Use only plain text without asterisks or markdown formatting.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    const parsed = JSON.parse(jsonMatch[0]);
    const cleanText = (str: string) => str.replace(/\*\*/g, '').replace(/\*/g, '').trim();

    return {
      ...parsed,
      title: cleanText(parsed.title),
      description: cleanText(parsed.description),
      examples: parsed.examples.map((ex: string) => cleanText(ex)),
      constraints: parsed.constraints.map((c: string) => cleanText(c))
    };
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

  IMPORTANT: Do NOT use asterisks or markdown formatting in your feedback. Use plain text only.

  Return a JSON object with:
  {
    "score": number (0-100, where 60+ is passing),
    "feedback": "Detailed constructive feedback on the code quality, correctness, efficiency, and suggestions for improvement (plain text, no asterisks)"
  }

  Be fair but constructive in your evaluation. Consider correctness, code quality, and approach.
  Remember: Use only plain text without asterisks or markdown formatting.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    const parsed = JSON.parse(jsonMatch[0]);
    const cleanText = (str: string) => str.replace(/\*\*/g, '').replace(/\*/g, '').trim();

    return {
      ...parsed,
      feedback: cleanText(parsed.feedback)
    };
  }

  throw new Error('Failed to evaluate code');
}

export async function generateDebugProblem(topic: string, difficulty: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Generate a debug challenge about ${topic} at ${difficulty} difficulty level.

  IMPORTANT: Do NOT use any asterisks, markdown formatting, or special characters. Use plain text only.

  Return the response as a JSON object with the following structure:
  {
    "title": "Debug Challenge Title (no asterisks)",
    "description": "Brief description of what the code is supposed to do (plain text)",
    "buggyCode": "Code with intentional bugs that needs to be fixed",
    "language": "javascript",
    "hints": ["Hint 1 about where bugs might be", "Hint 2 about what to look for"],
    "expectedBehavior": "Description of correct behavior",
    "testCases": [
      {
        "input": "Test input",
        "expectedOutput": "Expected output"
      }
    ]
  }

  Make the bugs realistic and educational. Include 2-3 bugs that test understanding of ${topic}.
  Remember: Use only plain text without asterisks or markdown formatting.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    const parsed = JSON.parse(jsonMatch[0]);
    const cleanText = (str: string) => str.replace(/\*\*/g, '').replace(/\*/g, '').trim();

    return {
      ...parsed,
      title: cleanText(parsed.title),
      description: cleanText(parsed.description),
      expectedBehavior: cleanText(parsed.expectedBehavior),
      hints: parsed.hints.map((h: string) => cleanText(h))
    };
  }

  throw new Error('Failed to generate debug problem');
}

export async function evaluateDebugCode(originalBuggyCode: string, fixedCode: string, description: string, testCases: any[]) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Evaluate the debugging solution:

  Original Buggy Code:
  ${originalBuggyCode}

  Fixed Code:
  ${fixedCode}

  Problem Description: ${description}
  Test Cases: ${JSON.stringify(testCases)}

  IMPORTANT: Do NOT use asterisks or markdown formatting in your feedback. Use plain text only.

  Return a JSON object with:
  {
    "passed": true/false,
    "score": number (0-100),
    "feedback": "Detailed feedback on whether bugs were fixed correctly (plain text, no asterisks)",
    "bugsFound": number,
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
    const parsed = JSON.parse(jsonMatch[0]);
    const cleanText = (str: string) => str.replace(/\*\*/g, '').replace(/\*/g, '').trim();

    return {
      ...parsed,
      feedback: cleanText(parsed.feedback)
    };
  }

  throw new Error('Failed to evaluate debug code');
}

export async function generatePseudocodeProblem(topic: string, difficulty: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Generate a pseudocode problem about ${topic} at ${difficulty} difficulty level.

  IMPORTANT: Do NOT use any asterisks, markdown formatting, or special characters. Use plain text only.

  Return the response as a JSON object with the following structure:
  {
    "title": "Problem Title (no asterisks)",
    "description": "Detailed problem description (plain text)",
    "requirements": [
      "Requirement 1: Must handle this case",
      "Requirement 2: Must consider this scenario"
    ],
    "examples": [
      {
        "scenario": "Example scenario description",
        "expectedApproach": "Brief description of expected approach"
      }
    ],
    "evaluationCriteria": [
      "Criterion 1: Logic correctness",
      "Criterion 2: Edge case handling",
      "Criterion 3: Clarity of expression"
    ]
  }

  The problem should test algorithmic thinking without requiring actual code.
  Remember: Use only plain text without asterisks or markdown formatting.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    const parsed = JSON.parse(jsonMatch[0]);
    const cleanText = (str: string) => str.replace(/\*\*/g, '').replace(/\*/g, '').trim();

    return {
      ...parsed,
      title: cleanText(parsed.title),
      description: cleanText(parsed.description),
      requirements: parsed.requirements.map((r: string) => cleanText(r)),
      evaluationCriteria: parsed.evaluationCriteria.map((c: string) => cleanText(c))
    };
  }

  throw new Error('Failed to generate pseudocode problem');
}

export async function evaluatePseudocode(problem: string, requirements: string[], pseudocode: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Evaluate the following pseudocode solution:

  Problem: ${problem}
  Requirements: ${JSON.stringify(requirements)}

  User's Pseudocode:
  ${pseudocode}

  IMPORTANT: Do NOT use asterisks or markdown formatting in your feedback. Use plain text only.

  Return a JSON object with:
  {
    "score": number (0-100),
    "feedback": "Detailed feedback on logic, clarity, completeness, and edge case handling (plain text, no asterisks)",
    "strengths": ["Strength 1", "Strength 2"],
    "improvements": ["Area for improvement 1", "Area for improvement 2"],
    "logicCorrect": true/false,
    "edgeCasesHandled": true/false,
    "clarityScore": number (0-10)
  }

  Evaluate based on:
  1. Logical correctness of the algorithm
  2. Handling of edge cases
  3. Clarity and readability of the pseudocode
  4. Completeness in addressing all requirements

  Remember: Use only plain text without asterisks or markdown formatting.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    const parsed = JSON.parse(jsonMatch[0]);
    const cleanText = (str: string) => str.replace(/\*\*/g, '').replace(/\*/g, '').trim();

    return {
      ...parsed,
      feedback: cleanText(parsed.feedback),
      strengths: parsed.strengths.map((s: string) => cleanText(s)),
      improvements: parsed.improvements.map((i: string) => cleanText(i))
    };
  }

  throw new Error('Failed to evaluate pseudocode');
}
