import { Component } from '@angular/core';
import { Drink } from '../drink.interface';
import { SelectedDrinksService } from '../selected-drinks.service';

@Component({
  selector: 'app-calculate-bac',
  templateUrl: './calculate-bac.component.html',
  styleUrls: ['./calculate-bac.component.css'],
})
export class CalculateBacComponent {
  weight: number | null = null;
  hoursPassed: number | null = null;
  gender: 'male' | 'female' | null = null;
  bac: string | null = null;

  drinks: Drink[] = [
    { name: 'Beer', alcoholContent: 5 },
    { name: 'Wine', alcoholContent: 12 },
    { name: 'Spirits', alcoholContent: 40 },
  ];

  constructor(private selectedDrinkService: SelectedDrinksService) {}

  calculateBac(): void {
    const bacFormula =
      ((this.selectedDrinkService.selectedDrinks.reduce(
        (total, drink) => total + drink.alcoholContent,
        0
      ) *
        5.14) /
        this.weight!) *
        0.73 -
      0.15 * this.hoursPassed!;
    this.bac = bacFormula.toFixed(2);
  }
}
