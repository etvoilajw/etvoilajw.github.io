import { useEffect, useState } from "react";

import Tile from "./Tile";
import classes from "../css/board.module.css";

const Board = ({ row, col, selectedNum }) => {
  const [boardArray, setBoardArray] = useState([[]]);
  const [selectedArray, setSelectedArray] = useState([]);
  const [clickedArray, setClickedArray] = useState([]);

  const rows = [...Array(row).keys()];
  const cols = [...Array(col).keys()];

  useEffect(() => {
    makeBoard();
  }, []);

  //updating selected array once boardarray state changes
  useEffect(() => {
    chooseSelected();
  }, [boardArray]);

  //check if game is won after each tile has been revealed
  useEffect(() => {
    gameWon();
  }, [clickedArray]);

  //initialize the board as list
  //list = [col, row], eg for 2x2: [[0,0], [0,1], [1,0], [1,1]]
  const makeBoard = () => {
    let board = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        board.push([i, j]);
      }
    }
    setBoardArray(board);
  };

  //shuffle existing board and slice upto the number of selection
  //needed to have non duplicate random selection
  const chooseSelected = () => {
    setSelectedArray(() =>
      [...boardArray].sort(() => 0.5 - Math.random()).slice(0, selectedNum)
    );
  };

  //checks if a tile is one of the selected
  const checkSelected = (r, c) => {
    let filtered = selectedArray.filter(
      (tile) => tile[0] === r && tile[1] === c
    );
    return filtered.length > 0;
  };

  //gameover if wrong tile has been clicked
  const gameOver = () => {
    alert("gameover");
  };

  //check if all selected tile has been revealed
  const gameWon = () => {
    if (clickedArray.length === selectedNum) {
      alert("You won");
    }
  };

  //add correctly revealed tile to clicked array
  const tileClicked = (id) => {
    if (!clickedArray.includes(id)) {
      setClickedArray(() => [...clickedArray, id]);
    }
  };

  const board = (
    <div className={classes.board}>
      {rows.map((rowIndex) => (
        <div className={classes.row}>
          {cols.map((colIndex) => (
            <Tile
              key={`${rowIndex},${colIndex}`}
              id={`${rowIndex},${colIndex}`}
              selected={checkSelected(rowIndex, colIndex)}
              gameOver={gameOver}
              tileClicked={tileClicked}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return <>{board}</>;
};

export default Board;
