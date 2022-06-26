import { useState, useEffect } from "react";
import Board from "./Board";

const MemoryGame = () => {
  const [reset, setReset] = useState(true);
  const [board, setBoard] = useState();
  const [currentStage, setCurrentStage] = useState(0);
  const [stages, setStages] = useState([1, 2, 3]);

  useEffect(() => {
    makeBoard();
  }, [reset, currentStage]);

  const makeBoard = () => {
    let col = stages[currentStage] + 2;
    let row = stages[currentStage] + 2;
    let selectedNum = stages[currentStage] + 1;
    setBoard(
      <Board col={col} row={row} selectedNum={selectedNum} reset={reset} />
    );
  };

  const changeStage = (e) => {
    console.log(e.target.dataset["mssg"]);
    setCurrentStage(e.target.dataset["mssg"] - 1);
    setReset(!reset);
  };

  return (
    <>
      <button onClick={() => setReset(!reset)}>Start Game</button>
      {board}
      {stages.map((stage) => {
        return (
          <button data-mssg={stage} onClick={changeStage}>
            {stage}
          </button>
        );
      })}
    </>
  );
};

export default MemoryGame;
