import { useState } from "react";
import classes from "../css/tile.module.css";

const Tile = ({ selected, gameOver }) => {
  const [isClicked, setIsClicked] = useState(false);

  //style prop for tile if this tile is selected
  const tileColour = selected && classes.selected;

  //change isClicked to true if selected i.e correct
  //else gameOver
  const clickHandler = () => {
    if (selected) {
      setIsClicked(true);
    } else {
      gameOver();
    }
  };

  return (
    <div
      className={`${classes.tile} ${isClicked && tileColour}`}
      onClick={clickHandler}
    ></div>
  );
};

export default Tile;
