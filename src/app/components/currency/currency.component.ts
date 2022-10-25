import {Component, OnInit} from '@angular/core';
import {CurrencyServiceService} from "../../services/currency-service.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public currencyCodes: string[] = [];
  public currencyNames: string[] = [];
  public fromCurrency: string | null = null;
  public toCurrency: string | null = null;
  public outputRate: number | null = null;


  constructor(private currencyService: CurrencyServiceService) {
  }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((currencies) => {
      this.currencyNames = Object.values(currencies);
      this.currencyCodes = Object.keys(currencies);
    })
  }

  public exchange() {
    if (this.fromCurrency != null && this.toCurrency != null) {
      this.currencyService.getRate(this.fromCurrency, this.toCurrency).subscribe((rate) => {
        this.outputRate = Object.values(rate.rates)[0];

      });
    }

  }
}
