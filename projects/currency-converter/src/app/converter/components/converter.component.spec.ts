import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './converter.component';
import { CurrencyService, ConverterService } from '../services';
import { NumberDirective } from '../directives';
import { BrDatePipe } from '../pipes';
import { ModalPriceComponent } from '../utils';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConverterComponent,
        NumberDirective,
        BrDatePipe,
        ModalPriceComponent,
      ],
      providers: [CurrencyService, ConverterService],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
