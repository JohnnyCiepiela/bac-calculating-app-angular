import { Component } from '@angular/core';

@Component({
  selector: 'app-spin-bottle',
  templateUrl: './spin-bottle.component.html',
  styleUrls: ['./spin-bottle.component.css'],
})
export class SpinBottleComponent {
pointerTransform = '';
spin(): void {
  let angle = 0;
  angle = angle + 2 * 360 + Math.random() * 360;
  this.pointerTransform = `rotate(${angle}deg)`;
}

reset(): void {
this.pointerTransform = '';
}
}
