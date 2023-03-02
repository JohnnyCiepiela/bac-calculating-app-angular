import { Component } from '@angular/core';

@Component({
  selector: 'app-spin-bottle',
  templateUrl: './spin-bottle.component.html',
  styleUrls: ['./spin-bottle.component.css'],
})
export class SpinBottleComponent {
  people = ['Alice', 'Bob', 'Charlie', 'Dave'];
  selectedPerson = '';
  showResult = false;

  spin() {
    const randomIndex = Math.floor(Math.random() * this.people.length);
    this.selectedPerson = this.people[randomIndex];
    this.showResult = true;
  }

  reset() {
    this.selectedPerson = '';
    this.showResult = false;
  }
}
