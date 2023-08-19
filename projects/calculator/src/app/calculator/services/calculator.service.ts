/**
 * Service responsible for performing the calculator operations.
 *
 * @author Carlos Henrique Brito Malta Leão <carlosbmaltaleao@gmail.com>
 * @since 1.0.0
 */

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

  /**
   * Method that calculates a mathematical operation from two numbers.
   * Supports sum, subtraction, division and multiplication.
   *
   * @param num1 number
   * @param num2 number
   * @param operation string Operation to be executed
   * @returns number Operation result
   */
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
