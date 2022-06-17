import { useEffect, useState } from "react";
import classes from "../css/tile.module.css";

const Tile = ({ id, selected, tileClicked, gameOver }) => {
  const [tileColour, setTileColour] = useState(classes.selected);

  //initially show selected tiles for 2 seconds and disappear
  useEffect(() => {
    const timer = setTimeout(() => {
      setTileColour("");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  //change tile colour when clicked if is selected i.e correct
  //else gameOver
  const clickHandler = () => {
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
    ></div>
  );
};

export default Tile;
