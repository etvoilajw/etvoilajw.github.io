import { useState, useEffect } from "react";
import Tile2 from "./Tile2";
import AlertDialog from "./AlertDialog";

import classes from "../css/board2.module.css";

const Board2 = ({
  row,
  col,
  selectedCount,
  reset,
  setReset,
  increaseStage,
}) => {
  const [BoardArray, setBoardArray] = useState([[]]);
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [flippedCount, setFlippedCount] = useState(0);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    setIsDisabled(false);
    setFlippedCount(0);
    setIsWon(false);
    setIsLost(false);
    setBoardArray([[]]);
    createBoard();
  }, [reset]);

  // useEffect(() => {
  //   createBoard();
  // }, []);

  useEffect(() => {
    checkEndGame();
  }, [flippedCount]);

  const createBoard = () => {
    let count = selectedCount;

    //create initial board with number of selected tiles infront
    let board = Array(row)
      .fill(false)
      .map(() => Array(col).fill(false));
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (count <= 0) {
          break;
        } else {
          board[i][j] = true;
          count -= 1;
        }
      }
    }

    //shuffles the board to randomize tile location
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let i1 = Math.floor(Math.random() * board.length);
        let j1 = Math.floor(Math.random() * board.length);

        let temp = board[i][j];
        board[i][j] = board[i1][j1];
        board[i1][j1] = temp;
      }
    }
    setBoardArray(board);
  };

  const correctFlip = (status) => {
    status && setFlippedCount((current) => current + 1);
    status ? checkEndGame() : gameLost();
  };

  const checkEndGame = () => {
    flippedCount === selectedCount && gameWon();
  };

  const gameWon = () => {
    setIsWon(true);
    setIsDisabled(true);
    setIsModalOpen(true);
    setModalMessage("You won! Proceed to the next stage.");
  };

  const gameLost = () => {
    setIsLost(true);
    setIsDisabled(true);
    setIsModalOpen(true);
    setModalMessage("You lost. Please try again!");
  };

  return (
    <>
      {isModalOpen && (
        <AlertDialog
          message={modalMessage}
          setReset={setReset}
          setIsModalOpen={setIsModalOpen}
          increaseStage={increaseStage}
          isLost={isLost}
        />
      )}
      <div className={classes.board} disabled={isDisabled}>
        {BoardArray.map((row) => (
          <div className={classes.row}>
            {row.map((col) => (
              <Tile2 selected={col} correctFlip={correctFlip} reset={reset} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board2;
