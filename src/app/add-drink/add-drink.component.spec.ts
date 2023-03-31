import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {SelectedDrinksService} from '../selected-drinks.service';
import {AddDrinkComponent} from './add-drink.component';

describe('AddDrinkComponent', () => {
  let component: AddDrinkComponent;
  let fixture: ComponentFixture<AddDrinkComponent>;
  let selectedDrinksService: SelectedDrinksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddDrinkComponent],
      providers: [SelectedDrinksService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddDrinkComponent);
    component = fixture.componentInstance;
    selectedDrinksService = TestBed.inject(SelectedDrinksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of selected drinks when at least one drink has been added', () => {
    selectedDrinksService.addSelectedDrink({name: 'Beer', alcoholContent: 5, amount: 568});
    fixture.detectChanges();
    const selectedDrinksList = fixture.nativeElement.querySelector('.selected-drinks-list');
    expect(selectedDrinksList).toBeTruthy();
  });

  it('should enable the "Add Drink" button when a drink is selected', () => {
    component.selectedDrink = {name: 'Wine', alcoholContent: 12, amount: 150};
    component.checkIfAtLeastOneDrinkAdded();
    fixture.detectChanges();
    const addButton = fixture.nativeElement.querySelector('.add-button');
    expect(addButton.disabled).toBe(false);
  });

  it('should add the selected drink to the list of selected drinks when "Add Drink" button is clicked', () => {
    const addSelectedDrinkSpy = jest.spyOn(selectedDrinksService, 'addSelectedDrink');
    component.selectedDrink = {name: 'Spirits', alcoholContent: 40, amount: 40};
    component.addDrink();
    fixture.detectChanges();
    expect(addSelectedDrinkSpy).toHaveBeenCalledWith(component.selectedDrink);
  });
});
