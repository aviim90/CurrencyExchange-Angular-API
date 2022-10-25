import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currencies} from "../models/currency";
import {Rate} from "../models/Rate";


@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  constructor(private http:HttpClient) { }

  public getCurrencies(){
    return this.http.get<Currencies>('https://www.frankfurter.app/currencies');
  }

  public getRate(fromCurrency:string, toCurrency:string){
    return this.http.get<Rate>('https://www.frankfurter.app/latest?from='+fromCurrency+'&to='+toCurrency);
  }

}
