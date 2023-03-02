import { Component } from '@angular/core';
import { Drink } from '../drink.interface';
import { SelectedDrinksService } from '../selected-drinks.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css'],
})
export class AddDrinkComponent {
  selectedDrink: Drink = {} as Drink;
  drinks: Drink[] = [
    { name: 'Beer', alcoholContent: 5 },
    { name: 'Wine', alcoholContent: 12 },
    { name: 'Spirits', alcoholContent: 40 },
  ];

  constructor(public selectedDrinkService: SelectedDrinksService) {}

  getSelectedDrinks(): Drink[] {
    return this.selectedDrinkService.getSelectedDrinks();
  }

  addDrink() {
    if (this.selectedDrink) {
      this.selectedDrinkService.addSelectedDrink(this.selectedDrink);
      //this.selectedDrink = null;
      console.log(this.getSelectedDrinks());
      console.log('selected drink:', this.selectedDrink?.alcoholContent);
    }
  }
}
