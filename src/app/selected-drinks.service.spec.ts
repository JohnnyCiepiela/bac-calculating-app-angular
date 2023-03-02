import { TestBed } from '@angular/core/testing';

import { SelectedDrinksService } from './selected-drinks.service';

describe('SelectedDrinksService', () => {
  let service: SelectedDrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedDrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
