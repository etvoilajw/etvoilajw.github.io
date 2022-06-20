import { useState, useEffect } from "react";
import Board from "./Board";

const MemoryGame = () => {
  const [game, setGame] = useState();
  const [reset, setReset] = useState(true);

  //  const startGame = () => {
  //    setGame();
  //  };
  return (
    <>
      <button onClick={() => setReset(!reset)}>Start Game</button>
      <Board col={3} row={3} selectedNum={2} reset={reset} />
    </>
  );
};

export default MemoryGame;
