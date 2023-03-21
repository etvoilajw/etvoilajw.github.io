import { useEffect, useState } from "react";
import classes from "../css/tile.module.css";

const Tile = ({ id, selected, tileClicked, gameOver, reset }) => {
  const [tileColour, setTileColour] = useState(classes.selected);
  const [isDisabled, setIsDisabled] = useState(false);

  //initially show selected tiles for 2 seconds and disappear
  useEffect(() => {
    setTileColour(classes.selected);
    setIsDisabled(false);
    const timer = setTimeout(() => {
      setTileColour("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [reset]);

  //change tile colour when clicked if is selected i.e correct
  //else gameOver
  const clickHandler = () => {
    setIsDisabled(true);
    if (selected) {
      setTileColour(classes.selected);
      tileClicked(id);
    } else {
      gameOver();
    }
  };

  return (
    <div
      className={`${classes.tile} ${selected ? tileColour : ""}`}
      onClick={clickHandler}
      disabled={isDisabled}
    ></div>
  );
};

export default Tile;
