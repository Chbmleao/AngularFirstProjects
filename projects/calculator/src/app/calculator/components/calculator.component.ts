import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.clean();
  }

  /**
   * Initialize all operators to default values.
   *
   * @returns void
   */
  clean(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  /**
   * Add a selected number to calculate later
   *
   * @param number string
   * @returns void
   */
  addNumber(number: string): void {
    if (this.operation === null) {
      this.number1 = this.concatenateNumber(this.number1, number);
    } else {
      this.number2 = this.concatenateNumber(this.number2, number);
    }
  }

  /**
   * It returns the concatenate value. It treats the decimal separator.
   *
   * @param currentNum string
   * @param concatNum string
   * @returns string
   */
  concatenateNumber(currentNum: string, concatNum: string): string {
    if (currentNum === '0' || currentNum === null) {
      currentNum = '';
    }

    if (concatNum === '.' && currentNum === '') {
      return '0.';
    }

    if (concatNum === '.' && currentNum.indexOf('.') > -1) {
      return currentNum;
    }

    return currentNum + concatNum;
  }

  /**
   * Executes logic when an operator is selected.
   * If it already has a selected operation, execute the last operation, and defines a new operation
   *
   * @param operation string
   * @returns void
   */
  defineOperation(operation: string): void {
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    if (this.number2 !== null) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation
      );
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  /**
   * Calculates an operation
   *
   * @returns void
   */
  calculate(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.calculatorService.calculate(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation
    );
  }

  /**
   * Returns the value to be displayed on calculator screen
   *
   * @returns string
   */
  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.number2 !== null) {
      return this.number2;
    }
    return this.number1;
  }
}
