import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Currency, Conversion, ConversionResponse } from '../models';
import { CurrencyService, ConverterService } from '../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  currencies: Currency[];
  conversion: Conversion;
  hasError: boolean;
  conversionResponse: ConversionResponse;

  @ViewChild('conversionForm', { static: true }) conversionForm: NgForm;

  constructor(
    private currencyService: CurrencyService,
    private converterService: ConverterService
  ) {}

  ngOnInit(): void {
    this.currencies = this.currencyService.getAll();
    this.init();
  }

  init() {
    this.conversion = new Conversion('EUR', 'BRL', null);
    this.hasError = false;
  }

  convert() {
    if (this.conversionForm.form.valid) {
      this.converterService.convert(this.conversion).subscribe((response) => {
        this.conversionResponse = response;
        if (response.success === false) {
          this.hasError = true;
        }
      });
    }
  }
}
