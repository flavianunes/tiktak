export const POSSIBLE_WINS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const PLAYERS = ["X", "O"];

export const calculateWinner = (board) => {
  for (const line of POSSIBLE_WINS) {
    const [a, b, c] = line;
    if (!board[a] || !board[b] || !board[c]) continue;
    if (board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return "NONE";
};
