import { useEffect, useState } from "react";

import Tile from "./Tile";
import classes from "../css/board.module.css";

const Board = ({ row, col, selectedNum }) => {
  const [boardArray, setBoardArray] = useState([[]]);
  const [selectedArray, setSelectedArray] = useState([]);

  const rows = [...Array(row).keys()];
  const cols = [...Array(col).keys()];

  useEffect(() => {
    makeBoard();
  }, []);

  //updating selected array once boardarray state changes
  useEffect(() => {
    chooseSelected();
  }, [boardArray]);

  //initialize the board as list
  //list = [col, row], eg for 2x2: [[0,0], [0,1], [1,0], [1,1]]
  const makeBoard = () => {
    let board = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        board.push([i, j, false]);
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

  const gameOver = () => {
    alert("gameover");
  };

  const board = (
    <div className={classes.board}>
      {rows.map((rowIndex) => (
        <div className={classes.row}>
          {cols.map((colIndex) => (
            <Tile
              selected={checkSelected(rowIndex, colIndex)}
              gameOver={gameOver}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return <>{board}</>;
};

export default Board;
