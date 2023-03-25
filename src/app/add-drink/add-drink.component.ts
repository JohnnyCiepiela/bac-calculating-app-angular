import {Component, OnInit} from '@angular/core';
import { Drink } from '../drink.interface';
import { SelectedDrinksService } from '../selected-drinks.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css'],
})
export class AddDrinkComponent implements OnInit {
  selectedDrink: Drink = {} as Drink;
  drinks: Drink[] = [
    { name: 'Beer', alcoholContent: 5 },
    { name: 'Wine', alcoholContent: 12 },
    { name: 'Spirits', alcoholContent: 40 },
  ];
  addDrinkButtonDisabled = false;
  firstDrink: Drink = this.drinks[0];

  constructor(public selectedDrinkService: SelectedDrinksService) {}

  ngOnInit() {
    this.checkIfAtLeastOneDrinkAdded();
    this.selectedDrink = this.firstDrink;
  }

  getSelectedDrinks(): Drink[] {
    return this.selectedDrinkService.getSelectedDrinks();
  }

  addDrink() {
    this.selectedDrinkService.addSelectedDrink(this.selectedDrink);
// this.selectedDrink = null;
  }

  checkIfAtLeastOneDrinkAdded() {
    this.addDrinkButtonDisabled = !this.selectedDrink;
  }
}
