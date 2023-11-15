"use client";

import { useState, useEffect } from "react";
import Square from "../square/square";
import styles from "./board.module.css";

import { PLAYERS, calculateWinner } from "@/utils";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [finished, setFinished] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    console.log("effect");
    const winner = calculateWinner(board);
    console.log({ winner, finished, board });
    if (!finished && winner === "NONE") return;
    if (finished || winner !== "NONE") {
      setWinner(winner);
      setFinished(true);
    }
  }, [board, finished]);

  function shouldMove(square) {
    if (board[square] || finished) return false;
    const hasEmptySquare = board.findIndex((value) => !value) !== -1;
    if (!hasEmptySquare) {
      setFinished(true);
      return false;
    }
    return true;
  }

  function updateBoard(square) {
    const updatedBoard = board.slice();
    updatedBoard[square] = PLAYERS[currentPlayer];
    setBoard(updatedBoard);
  }

  function setNextPlayer() {
    if (currentPlayer > 0) {
      setCurrentPlayer(0);
    } else {
      setCurrentPlayer(1);
    }
  }

  function registerMove() {
    // TODO
  }

  function handleMove(square) {
    if (!shouldMove) return;
    updateBoard(square);
    setNextPlayer();
    registerMove();
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setFinished(false);
    setCurrentPlayer(0);
    setWinner(null);
  }

  return (
    <>
      <p>{winner}</p>
      <div className={styles.board}>
        <div className={styles.row}>
          <Square value={board[0]} onSquareClick={() => handleMove(0)} />
          <Square value={board[1]} onSquareClick={() => handleMove(1)} />
          <Square value={board[2]} onSquareClick={() => handleMove(2)} />
        </div>
        <div className={styles.row}>
          <Square value={board[3]} onSquareClick={() => handleMove(3)} />
          <Square value={board[4]} onSquareClick={() => handleMove(4)} />
          <Square value={board[5]} onSquareClick={() => handleMove(5)} />
        </div>
        <div className={styles.row}>
          <Square value={board[6]} onSquareClick={() => handleMove(6)} />
          <Square value={board[7]} onSquareClick={() => handleMove(7)} />
          <Square value={board[8]} onSquareClick={() => handleMove(8)} />
        </div>
      </div>
    </>
  );
}
