import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  private currencyMap = new Map([
    ['AMD', '֏'],
    ['RUB', '₽'],
    ['EUR', '€'],
    ['USD', '$']
  ]);

  transform(value: number, currencyCode: string): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + this.currencyMap.get(currencyCode);
  }
}
