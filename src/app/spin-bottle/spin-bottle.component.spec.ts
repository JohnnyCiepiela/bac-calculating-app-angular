import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinBottleComponent} from './spin-bottle.component';

describe('SpinBottleComponent', () => {
  let component: SpinBottleComponent;
  let fixture: ComponentFixture<SpinBottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinBottleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpinBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset pointerTransform to an empty string', () => {
    component.pointerTransform = 'rotate(90deg)';
    component.reset();
    expect(component.pointerTransform).toEqual('');
  });

  it('should set pointerTransform to a string starting with "rotate(" and ending with "deg)" after calling spin()', () => {
    component.spin();
    expect(component.pointerTransform).toMatch(/^rotate\(\d+(\.\d+)?deg\)$/);
  });
});
