import {Component} from '@angular/core';
import {SelectedDrinksService} from '../selected-drinks.service';
import {Drink} from '../drink.interface';

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

  constructor(public selectedDrinkService: SelectedDrinksService) {
  }

  calculateBac(): void {
    if (this.isValidForm()) {
      const genderFactor: number = this.gender === 'male' ? 0.68 : 0.55;
      const drinks: Drink[] = this.selectedDrinkService.getSelectedDrinks();
      const totalAlcohol: number = drinks.reduce((acc, curr) => {
        return acc + (curr.amount * curr.alcoholContent / 100);
      }, 0);
      const alcoholDistributionRatio: number = genderFactor * this.weight!;
      const bac: number = totalAlcohol / alcoholDistributionRatio / 1000 * 100;
      const adjustedBac: number = bac - (0.015 * this.hoursPassed!);
      this.bac = adjustedBac.toFixed(3).toString();
    } else {
      this.bac = null;
    }
  }

  isValidForm(): boolean {
    return this.weight !== null && this.hoursPassed !== null && this.gender !== null;
  }
}
