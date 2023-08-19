import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  static readonly PLUS: string = '+';
  static readonly MINUS: string = '-';
  static readonly DIVIDE: string = '/';
  static readonly TIMES: string = '*';

  constructor() {}

  calculate(num1: number, num2: number, operation: string): number {
    let result: number;

    switch (operation) {
      case CalculatorService.PLUS:
        result = num1 + num2;
        break;
      case CalculatorService.MINUS:
        result = num1 - num2;
        break;
      case CalculatorService.DIVIDE:
        result = num1 / num2;
        break;
      case CalculatorService.TIMES:
        result = num1 * num2;
        break;
      default:
        result = 0;
    }

    return result;
  }
}
