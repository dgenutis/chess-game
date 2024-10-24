import logo from '../../assets/black-king.png'
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureNames {
    FIGURE = "figure",
    KING = "king",
    QUEEN = "queen",
    ROOK = "rook",
    BISHOP = "bishop",
    KNIGHT = "knight",
    PAWN = "pawn",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;


   constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.logo = null;
    this.cell = cell;
    this.name = FigureNames.FIGURE;
    this.cell.figure = this;
    this.id = Math.random(); // for react key
   }

   canMove(target: Cell) : boolean {
    return true;
   }
   moveFigure(target: Cell) {}
}