import { useState, useEffect } from "react";
import Board2 from "./Board2";

const MemoryGame2 = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [stages, setStages] = useState([1]);
  const [reset, setReset] = useState(false);
  const [row, setRow] = useState(3);
  const [col, setCol] = useState(3);
  const [selectedCount, setSelectedCount] = useState(2);
  const [board, setBoard] = useState(null);

  useEffect(() => {
    resetBoard();
  }, [reset]);

  const increaseStage = () => {
    setCurrentStage((current) => current + 1);
    setStages((current) => [...current, currentStage]);
    setRow((current) => current + 1);
    setCol((current) => current + 1);
    setSelectedCount((current) => current + 1);
  };

  const resetBoard = () => {
    setBoard(
      <Board2
        row={row}
        col={col}
        selectedCount={selectedCount}
        reset={reset}
        setReset={setReset}
        increaseStage={increaseStage}
      />
    );
  };

  const moveStage = (e) => {
    setCurrentStage(e.target.value);
    setReset((current) => !current);
  };

  return (
    <div>
      {board}
      <button
        onClick={() => {
          setReset((current) => !current);
        }}
      >
        Reset
      </button>
      <p>Stage: {currentStage}</p>
      <p>Number of Tiles to find: {selectedCount}</p>
      {[...Array(currentStage).keys()].map((num) => (
        <button onClick={moveStage}>{num + 1}</button>
      ))}
    </div>
  );
};

export default MemoryGame2;
