// src/data/mockData.js
export const mockPuzzles = [
    "123456",
    "789123",
    "456789",
    "234567",
    "345678"
  ];
  
  export const mockUsers = [
    { 
      id: 1, 
      name: "MathWizard", 
      wins: 42, 
      losses: 12, 
      score: 1250, 
      badges: ["Weekly Champion", "Speed Demon", "Perfect Solver"] 
    },
    { 
      id: 2, 
      name: "NumberNinja", 
      wins: 38, 
      losses: 15, 
      score: 1120, 
      badges: ["Accuracy Master", "Consistent Player"] 
    },
    { 
      id: 3, 
      name: "CalculusKing", 
      wins: 35, 
      losses: 20, 
      score: 980, 
      badges: ["Quick Thinker"] 
    },
    { 
      id: 4, 
      name: "AlgebraAce", 
      wins: 30, 
      losses: 18, 
      score: 920, 
      badges: ["Rising Star"] 
    },
    { 
      id: 5, 
      name: "LogicLord", 
      wins: 28, 
      losses: 22, 
      score: 840, 
      badges: ["Persistent Player"] 
    }
  ];
  
  export const currentUser = {
    id: 1,
    name: "MathWizard",
    wins: 42,
    losses: 12,
    score: 1250,
    badges: ["Weekly Champion", "Speed Demon", "Perfect Solver"],
    recentGames: [
      { opponent: "NumberNinja", result: "win", score: 100, date: "2023-04-02" },
      { opponent: "CalculusKing", result: "win", score: 95, date: "2023-04-01" },
      { opponent: "AlgebraAce", result: "loss", score: 80, date: "2023-03-31" }
    ]
  };
  
  export const gameSettings = {
    modes: [
      { id: "first-three", name: "First Three", description: "Best of five rounds. New puzzles generate when either player completes a level." },
      { id: "time-attack", name: "Time Attack", description: "Solve as many puzzles as you can within the time limit." },
      { id: "reverse-hectoc", name: "Reverse Hectoc", description: "Operators are given, fill in the numbers to reach 100." }
    ],
    difficulties: [
      { id: "easy", name: "Easy", timeLimit: 120 },
      { id: "medium", name: "Medium", timeLimit: 90 },
      { id: "hard", name: "Hard", timeLimit: 60 }
    ]
  };
  