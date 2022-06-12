import Tile from "./Tile";
import classes from "../css/board.module.css";

const Board = ({ col, row }) => {
  return (
    <div className={classes.board}>
      {Array.from(Array(row)).map(() => (
        <div className={classes.row}>
          {Array.from(Array(col)).map(() => (
            <Tile />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
