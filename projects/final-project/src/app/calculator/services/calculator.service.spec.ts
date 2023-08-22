import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should guarantee that 1 + 4 = 5', () => {
    const sum = service.calculate(1, 4, CalculatorService.PLUS);
    expect(sum).toEqual(5);
  });

  it('should guarantee that 1 - 4 = -3', () => {
    const sum = service.calculate(1, 4, CalculatorService.MINUS);
    expect(sum).toEqual(-3);
  });

  it('should guarantee that 1 / 4 = 0.25', () => {
    const sum = service.calculate(1, 4, CalculatorService.DIVIDE);
    expect(sum).toEqual(0.25);
  });

  it('should guarantee that 1 * 4 = 4', () => {
    const sum = service.calculate(1, 4, CalculatorService.TIMES);
    expect(sum).toEqual(4);
  });

  it('should return 0 to invalid operation', () => {
    const sum = service.calculate(1, 4, '%');
    expect(sum).toEqual(0);
  });
});
