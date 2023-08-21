import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  private readonly TAM_BOARD: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any;
  private numMoviments: number;
  private victory: any;

  private _player: number;
  private _showStart: boolean;
  private _showBoard: boolean;
  private _showEnd: boolean;

  constructor() {}

  initialize(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showEnd = false;
    this.numMoviments = 0;
    this._player = this.X;
    this.victory = false;
    this.initializeBoard();
  }

  initializeBoard(): void {
    this.board = [this.TAM_BOARD];
    for (let i = 0; i < this.TAM_BOARD; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  get showStart(): boolean {
    return this._showStart;
  }

  get showBoard(): boolean {
    return this._showBoard;
  }

  get showEnd(): boolean {
    return this._showEnd;
  }

  get player(): number {
    return this._player;
  }

  startGame(): void {
    this._showStart = false;
    this._showBoard = true;
  }

  play(posX: number, posY: number): void {
    if (this.board[posX][posY] !== this.EMPTY || this.victory) {
      return;
    }

    this.board[posX][posY] = this._player;
    this.numMoviments++;
    this.victory = this.endGame(posX, posY, this.board, this._player);
    this._player = this._player === this.X ? this.O : this.X;

    if (!this.victory && this.numMoviments < 9) {
      this.cpuPlay();
    }

    if (this.victory !== false) {
      this._showEnd = true;
    }

    if (!this.victory && this.numMoviments === 9) {
      this._player = 0;
      this._showEnd = true;
    }
  }

  endGame(row: number, col: number, board: any, player: number) {
    let end: any = false;

    if (
      board[row][0] === player &&
      board[row][1] === player &&
      board[row][2] === player
    ) {
      end = [
        [row, 0],
        [row, 1],
        [row, 2],
      ];
    }

    if (
      board[0][col] === player &&
      board[1][col] === player &&
      board[2][col] === player
    ) {
      end = [
        [0, col],
        [1, col],
        [2, col],
      ];
    }

    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      end = [
        [0, 0],
        [1, 1],
        [2, 2],
      ];
    }

    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      end = [
        [0, 2],
        [1, 1],
        [2, 0],
      ];
    }

    return end;
  }

  cpuPlay(): void {
    let move: number[] = this.getMove(this.O);

    if (move.length <= 0) {
      move = this.getMove(this.X);
    }

    if (move.length <= 0) {
      let moves: any = [];
      for (let i = 0; i < this.TAM_BOARD; i++) {
        for (let j = 0; j < this.TAM_BOARD; j++) {
          if (this.board[i][j] === this.EMPTY) {
            moves.push([i, j]);
          }
        }
      }

      let k = Math.floor(Math.random() * (moves.length - 1));
      move = [moves[k][0], moves[k][1]];
    }

    this.board[move[0]][move[1]] = this._player;
    this.numMoviments++;
    this.victory = this.endGame(move[0], move[1], this.board, this._player);
    this._player = this._player === this.X ? this.O : this.X;
  }

  getMove(player: number): number[] {
    let board = this.board;
    for (let row = 0; row < this.TAM_BOARD; row++) {
      for (let col = 0; col < this.TAM_BOARD; col++) {
        if (board[row][col] !== this.EMPTY) {
          continue;
        }
        board[row][col] = player;
        if (this.endGame(row, col, board, player)) {
          return [row, col];
        }
        board[row][col] = this.EMPTY;
      }
    }

    return [];
  }

  displayX(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.X;
  }

  displayO(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.O;
  }

  displayVictory(posX: number, posY: number): boolean {
    let displayVictory: boolean = false;

    if (!this.victory) {
      return displayVictory;
    }

    for (let pos of this.victory) {
      if (pos[0] === posX && pos[1] === posY) {
        displayVictory = true;
        break;
      }
    }

    return displayVictory;
  }

  newGame(): void {
    this.initialize();
    this._showStart = false;
    this._showEnd = false;
    this._showBoard = true;
  }
}
