import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateBacComponent } from './calculate-bac.component';

describe('CalculateBacComponent', () => {
  let component: CalculateBacComponent;
  let fixture: ComponentFixture<CalculateBacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateBacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateBacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
