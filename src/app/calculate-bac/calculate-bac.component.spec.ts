import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CalculateBacComponent} from './calculate-bac.component';

describe('CalculateBacComponent', () => {
  let component: CalculateBacComponent;
  let fixture: ComponentFixture<CalculateBacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateBacComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalculateBacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not calculate BAC if weight is null', () => {
    component.hoursPassed = 1;
    component.gender = 'male';
    component.calculateBac();
    expect(component.bac).toBeNull();
  });

  it('should not calculate BAC if hoursPassed is null', () => {
    component.weight = 70;
    component.gender = 'male';
    component.calculateBac();
    expect(component.bac).toBeNull();
  });

  it('should not calculate BAC if gender is null', () => {
    component.weight = 70;
    component.hoursPassed = 1;
    component.calculateBac();
    expect(component.bac).toBeNull();
  });

  it('should calculate BAC for male with weight 70kg, 1 hour passed, and 3 beers selected', () => {
    component.weight = 70;
    component.hoursPassed = 1;
    component.gender = 'male';
    component.selectedDrinkService.selectedDrinks = [
      {name: 'Beer', alcoholContent: 5, amount: 568},
      {name: 'Beer', alcoholContent: 5, amount: 568},
      {name: 'Beer', alcoholContent: 5, amount: 568},
    ];
    component.calculateBac();
    expect(parseFloat(component.bac!)).toBeCloseTo(0.160, 2);
  });

  it('should calculate BAC for female with weight 50kg, 2 hours passed, and 1 wine selected', () => {
    component.weight = 50;
    component.hoursPassed = 2;
    component.gender = 'female';
    component.selectedDrinkService.selectedDrinks = [
      {name: 'Wine', alcoholContent: 12, amount: 150},
    ];
    component.calculateBac();
    expect(parseFloat(component.bac!)).toBeCloseTo(0.035, 2);
  });
});
