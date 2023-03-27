import {Component} from '@angular/core';
import {Drink} from '../drink.interface';
import {SelectedDrinksService} from '../selected-drinks.service';

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
  parseFloat = parseFloat;

  drinks: Drink[] = [
    {name: 'Beer', alcoholContent: 5},
    {name: 'Wine', alcoholContent: 12},
    {name: 'Spirits', alcoholContent: 40},
  ];

  constructor(public selectedDrinkService: SelectedDrinksService) {
  }

  calculateBac(): void {
    if (this.isValidForm()) {
      const genderConstant = this.gender === 'male' ? 0.68 : 0.55;
      const totalAlcohol = this.selectedDrinkService.selectedDrinks.reduce(
        (total, drink) => total + (drink.alcoholContent / 100) * 12 * 0.789,
        0
      );
      const bacFormula =
        (totalAlcohol /
          (this.weight! * genderConstant)) -
        0.015 * this.hoursPassed!;
      this.bac = bacFormula.toFixed(2);
    } else {
      this.bac = null;
    }
  }

  isValidForm(): boolean {
    return this.weight !== null && this.hoursPassed !== null && this.gender !== null;
  }
}
