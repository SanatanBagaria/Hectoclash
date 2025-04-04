import React, { useState, useEffect } from "react";
import PuzzleDisplay from "./DuelArena/PuzzleDisplay";
import SolutionInput from "./DuelArena/SolutionInput";
import Timer from "./DuelArena/Timer";
import { mockPuzzles } from "../data/mockData";

const SinglePlayerMode = ({ difficulty, initialTimeLimit }) => {
  const [puzzle, setPuzzle] = useState(mockPuzzles[0]);
  const [solution, setSolution] = useState("");
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(initialTimeLimit);
  const [puzzlesSolved, setPuzzlesSolved] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const [feedback, setFeedback] = useState(null);
  const [gameId, setGameId] = useState(1); // Used to force timer reset

  // Get a new random puzzle
  const getNewPuzzle = () => {
    const randomIndex = Math.floor(Math.random() * mockPuzzles.length);
    setPuzzle(mockPuzzles[randomIndex]);
  };

  // Handle solution input change
  const handleSolutionChange = (e) => {
    setSolution(e.target.value);
  };

  // Robust solution validator that supports digit grouping
  const validateSolution = (puzzleDigits, solution) => {
    // Remove all whitespace from the solution
    const cleanSolution = solution.replace(/\s+/g, '');
    
    // Create a copy of the puzzle digits as a string without spaces
    const puzzleString = puzzleDigits.toString().replace(/\s+/g, '');
    
    // Extract all numbers from the solution
    const numberMatches = cleanSolution.match(/\d+/g) || [];
    const allDigitsInSolution = numberMatches.join('');
    
    // Check if the solution uses exactly the same digits as the puzzle
    if (allDigitsInSolution.length !== puzzleString.length) {
      return false; // Different number of digits
    }
    
    // Check if the digits appear in the correct order
    let puzzleIndex = 0;
    for (const num of numberMatches) {
      for (const digit of num) {
        if (digit !== puzzleString[puzzleIndex]) {
          return false; // Digits not in correct order
        }
        puzzleIndex++;
      }
    }
    
    // Now safely calculate the result using a math expression parser
    try {
      // Using a simple recursive descent parser for safety
      const result = evaluateExpression(cleanSolution);
      return Math.abs(result - 100) < 0.0001; // Check if result equals 100
    } catch (error) {
      return false;
    }
  };

  // A simple recursive descent parser for mathematical expressions
  const evaluateExpression = (expression) => {
    let pos = 0;
    
    function parseExpression() {
      let left = parseTerm();
      
      while (pos < expression.length) {
        if (expression[pos] === '+') {
          pos++;
          left += parseTerm();
        } else if (expression[pos] === '-') {
          pos++;
          left -= parseTerm();
        } else {
          break;
        }
      }
      
      return left;
    }
    
    function parseTerm() {
      let left = parseFactor();
      
      while (pos < expression.length) {
        if (expression[pos] === '*') {
          pos++;
          left *= parseFactor();
        } else if (expression[pos] === '/') {
          pos++;
          const right = parseFactor();
          if (right === 0) throw new Error("Division by zero");
          left /= right;
        } else {
          break;
        }
      }
      
      return left;
    }
    
    function parseFactor() {
      if (expression[pos] === '(') {
        pos++; // Skip '('
        const result = parseExpression();
        if (expression[pos] !== ')') throw new Error("Missing closing parenthesis");
        pos++; // Skip ')'
        
        // Check for power operator after parenthesis
        if (pos < expression.length && expression[pos] === '^') {
          pos++;
          const exponent = parseFactor();
          return Math.pow(result, exponent);
        }
        
        return result;
      }
      
      // Handle numbers
      let start = pos;
      while (
        pos < expression.length && 
        (
          (expression[pos] >= '0' && expression[pos] <= '9') || 
          expression[pos] === '.'
        )
      ) {
        pos++;
      }
      
      if (start === pos) throw new Error("Expected number");
      
      const num = parseFloat(expression.substring(start, pos));
      
      // Check for power operator after number
      if (pos < expression.length && expression[pos] === '^') {
        pos++;
        const exponent = parseFactor();
        return Math.pow(num, exponent);
      }
      
      return num;
    }
    
    const result = parseExpression();
    if (pos !== expression.length) {
      throw new Error("Unexpected characters at end of expression");
    }
    
    return result;
  };

  // Handle solution submission
  const handleSubmit = () => {
    if (!gameActive) return;

    if (validateSolution(puzzle, solution)) {
      const pointsEarned = Math.ceil(timeRemaining / 3); // More time = more points
      setScore((prevScore) => prevScore + pointsEarned);
      setPuzzlesSolved((prev) => prev + 1);
      setSolution("");
      getNewPuzzle();
      setFeedback({
        type: "success",
        message: `Correct! +${pointsEarned} points`,
      });
    } else {
      setFeedback({
        type: "error",
        message: "Incorrect solution. Try again!",
      });
    }

    // Clear feedback after 2 seconds
    setTimeout(() => setFeedback(null), 2000);
  };

  // Timer effect
  useEffect(() => {
    if (!gameActive || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, gameActive, gameId]);

  // Restart game
  const handleRestart = () => {
    // First, stop the current game
    setGameActive(false);
    
    // Reset game state
    setScore(0);
    setPuzzlesSolved(0);
    setSolution("");
    getNewPuzzle();
    setFeedback(null);
    
    // Use setTimeout to ensure state updates have processed
    setTimeout(() => {
      setTimeRemaining(initialTimeLimit);
      setGameId(prevId => prevId + 1); // Force timer reset
      setGameActive(true);
    }, 50);
  };

  // Skip the current puzzle
  const handleSkip = () => {
    getNewPuzzle();
    setSolution("");
    setFeedback({
      type: "info",
      message: "Skipped! No penalty.",
    });

    // Clear feedback after a short delay
    setTimeout(() => setFeedback(null), 2000);
  };

  // Get difficulty display name
  const getDifficultyName = () => {
    if (difficulty === "custom") return "Custom";
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Single Player Mode</h2>
        <div className="text-sm bg-gray-200 px-2 py-1 rounded">
          Difficulty: {getDifficultyName()} ({initialTimeLimit}s)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Timer key={gameId} seconds={timeRemaining} />
          <PuzzleDisplay puzzle={puzzle} mode="standard" />

          {feedback && (
            <div
              className={`my-2 p-2 rounded text-center ${
                feedback.type === "success"
                  ? "bg-green-100 text-green-800"
                  : feedback.type === "error"
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {feedback.message}
            </div>
          )}

          <SolutionInput
            value={solution}
            onChange={handleSolutionChange}
            onSubmit={handleSubmit}
            disabled={!gameActive}
          />

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
            disabled={!gameActive}
          >
            Skip Puzzle
          </button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Stats</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-50 p-2 rounded">
              <div className="text-sm text-gray-600">Score</div>
              <div className="text-xl font-bold">{score}</div>
            </div>
            <div className="bg-green-50 p-2 rounded">
              <div className="text-sm text-gray-600">Solved</div>
              <div className="text-xl font-bold">{puzzlesSolved}</div>
            </div>
          </div>

          {!gameActive && timeRemaining === 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Game Over!</h3>
              <p className="mb-4">Final Score: {score}</p>
              <button
                onClick={handleRestart}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Restart Game
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePlayerMode;
