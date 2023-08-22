import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';
import { NumberDirective } from './directives';

@NgModule({
  declarations: [ConverterComponent, NumberDirective],
  imports: [CommonModule, FormsModule],
  exports: [ConverterComponent],
  providers: [CurrencyService, ConverterService],
})
export class ConverterModule {}
