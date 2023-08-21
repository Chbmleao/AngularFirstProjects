import { Component, OnInit } from '@angular/core';

import { TicTacToeService } from './shared';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent implements OnInit {
  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {
    this.ticTacToeService.initialize();
  }

  get showStart(): boolean {
    return this.ticTacToeService.showStart;
  }

  get showBoard(): boolean {
    return this.ticTacToeService.showBoard;
  }

  get showEnd(): boolean {
    return this.ticTacToeService.showEnd;
  }

  startGame(): void {
    this.ticTacToeService.startGame();
  }

  play(posX: number, posY: number): void {
    this.ticTacToeService.play(posX, posY);
  }

  displayX(posX: number, posY: number): boolean {
    return this.ticTacToeService.displayX(posX, posY);
  }

  displayO(posX: number, posY: number): boolean {
    return this.ticTacToeService.displayO(posX, posY);
  }

  displayVictory(posX: number, posY: number): boolean {
    return this.ticTacToeService.displayVictory(posX, posY);
  }
}
