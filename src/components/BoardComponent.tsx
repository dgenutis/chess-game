
import { FC, useState } from "react";
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import React from "react";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;

}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
  return (
    <div className="board">
      {board.cells.map((row, index) =>
      <React.Fragment key={index}>
        {row.map(cell =>
          <CellComponent
            cell={cell}
            key={cell.id}
          />
        )}
        </React.Fragment>
      )}
    </div>
  );
};

export default BoardComponent
