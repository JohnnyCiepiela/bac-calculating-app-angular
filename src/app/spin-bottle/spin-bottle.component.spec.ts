import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinBottleComponent } from './spin-bottle.component';

describe('SpinBottleComponent', () => {
  let component: SpinBottleComponent;
  let fixture: ComponentFixture<SpinBottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinBottleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
