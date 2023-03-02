import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sober-app';
  currentPage: string = 'AddDrink';

  setCurrentPage(page: string) {
    this.currentPage = page;
  }
}
