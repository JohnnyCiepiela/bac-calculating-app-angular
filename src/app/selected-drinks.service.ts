import { Injectable } from '@angular/core';
import { Drink } from './drink.interface';

@Injectable({
  providedIn: 'root',
})
export class SelectedDrinksService {
  selectedDrinks: Drink[] = [];

  addSelectedDrink(drink: Drink) {
    this.selectedDrinks.push(drink);
  }

  getSelectedDrinks(): Drink[] {
    return this.selectedDrinks;
  }
}
