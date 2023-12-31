import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../services';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      providers: [CalculatorService],
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should guarantee that 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSum = fixture.debugElement.query(By.css('#btnSoma'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalculate = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSum.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });
});
