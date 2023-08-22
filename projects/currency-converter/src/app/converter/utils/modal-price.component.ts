import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ConversionResponse, Conversion } from '../models';
import { ConverterService } from '../services';

@Component({
  selector: 'modal-price',
  templateUrl: './modal-price.component.html',
  styleUrls: ['./modal-price.component.css'],
})
export class ModalPriceComponent implements OnInit {
  @Input() id: string;
  @Input() conversionResponse: ConversionResponse;
  @Input() conversion: Conversion = new Conversion();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private converterService: ConverterService) {}

  ngOnInit(): void {}

  newConsult() {
    this.onConfirm.emit();
  }

  get convertedValue(): string {
    if (this.conversionResponse === undefined) {
      return '0';
    }

    return (
      this.conversion.value *
      this.conversionResponse.rates[this.conversion.currencyTo]
    ).toFixed(2);
  }

  get currencyTo(): number {
    return this.converterService.currencyTo(
      this.conversionResponse,
      this.conversion
    );
  }

  get currencyFrom(): string {
    return this.converterService.currencyFrom(
      this.conversionResponse,
      this.conversion
    );
  }

  get currencyDate(): string {
    return this.converterService.currencyDate(this.conversionResponse);
  }
}
