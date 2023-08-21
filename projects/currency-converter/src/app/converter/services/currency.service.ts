import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currencies: Currency[];

  private currenciesObj = [
    //http://fixer.io
    { acronym: 'AUD', description: 'Dólar australiano' },
    { acronym: 'BGN', description: 'Lev búlgaro' },
    { acronym: 'BRL', description: 'Real brasileiro' },
    { acronym: 'CAD', description: 'Dólar canadense' },
    { acronym: 'CHF', description: 'Franco suíço' },
    { acronym: 'CNY', description: 'Yuan Chinês' },
    { acronym: 'CZK', description: 'Coroa República Tcheca' },
    { acronym: 'DKK', description: 'Coroa dinamarquesa' },
    { acronym: 'EUR', description: 'Euro' },
    { acronym: 'GBP', description: 'Libra Esterlina' },
    { acronym: 'HKD', description: 'Dólar de Hong Kong' },
    { acronym: 'HRK', description: 'Coroa Croácia' },
    { acronym: 'HUF', description: 'Florim húngaro' },
    { acronym: 'IDR', description: 'Rupia indonésia' },
    { acronym: 'ILS', description: 'Novo shekel israelense' },
    { acronym: 'INR', description: 'Rupia indiana' },
    { acronym: 'JPY', description: 'Iene japonês' },
    { acronym: 'KRW', description: 'Won sul-coreano' },
    { acronym: 'MXN', description: 'Peso mexicano' },
    { acronym: 'MYR', description: 'Malásia Ringgit' },
    { acronym: 'NOK', description: 'Coroa Noruega' },
    { acronym: 'NZD', description: 'Dólar da Nova Zelândia' },
    { acronym: 'PHP', description: 'Peso filipino' },
    { acronym: 'PLN', description: 'Złoty Polónia' },
    { acronym: 'RON', description: 'Leu romeno' },
    { acronym: 'RUB', description: 'Belarus Ruble' },
    { acronym: 'SEK', description: 'Coroa Suécia' },
    { acronym: 'SGD', description: 'Dólar de Singapura' },
    { acronym: 'THB', description: 'Baht Tailândia' },
    { acronym: 'TRY', description: 'Lira turca' },
    { acronym: 'USD', description: 'Dólar dos Estados Unidos' },
    { acronym: 'ZAR', description: 'Rand África do Sul' },
  ];

  getAll(): Currency[] {
    if (this.currencies) {
      return this.currencies;
    }

    this.currencies = [];

    for (let currencyObj of this.currenciesObj) {
      let currency: Currency = new Currency();
      Object.assign(currency, currencyObj);
      this.currencies.push(currency);
    }

    return this.currencies;
  }

  constructor() {}
}
