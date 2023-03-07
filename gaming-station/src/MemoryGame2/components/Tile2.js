import { useEffect, useState } from "react";
import classes from "../css/tile2.module.css";

const Tile2 = ({ selected, correctFlip, reset }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selected);
    setIsFlipped(false);
    showTiles();
  }, [reset]);

  const showTiles = () => {
    setIsFlipped(true);
    const timer = setTimeout(() => {
      setIsFlipped(false);
    }, 1500);
    return () => clearTimeout(timer);
  };

  const clickHandler = () => {
    if (isSelected) {
      setIsFlipped(true);
      correctFlip(true);
    } else {
      correctFlip(false);
    }
  };

  return (
    <>
      <div
        className={`${classes.tile} ${
          isFlipped && isSelected ? classes.selected : ""
        }`}
        onClick={clickHandler}
      ></div>
    </>
  );
};

export default Tile2;
