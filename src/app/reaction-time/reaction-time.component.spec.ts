import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactionTimeComponent} from './reaction-time.component';

describe('ReactionTimeComponent', () => {
  let component: ReactionTimeComponent;
  let fixture: ComponentFixture<ReactionTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactionTimeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReactionTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start test when start button is clicked', () => {
    const startTestButton = fixture.nativeElement.querySelector('.start-test');
    startTestButton.click();
    expect(component.testRunning).toBe(true);
  });

  it('should show "Get ready..." when dot is not visible', () => {
    component.dotVisible = false;
    fixture.detectChanges();
    const dotAppearance = fixture.nativeElement.querySelector('.dot-appearance');
    expect(dotAppearance).toBeNull();
  });

  it('should reset test when reset button is clicked', () => {
    component.testRunning = true;
    component.testFinished = true;
    component.dotVisible = true;
    component.tapEnabled = true;
    component.startTime = 123;
    component.endTime = 456;
    component.reactionTime = 333;
    component.reactionTimeMsg = 'Your reaction time is great!';
    fixture.detectChanges();

    const resetButton = fixture.nativeElement.querySelector('.try-again');
    resetButton.click();

    expect(component.testRunning).toBe(false);
    expect(component.testFinished).toBe(false);
    expect(component.dotVisible).toBe(false);
    expect(component.tapEnabled).toBe(false);
    expect(component.startTime).toBeNull();
    expect(component.endTime).toBeNull();
    expect(component.reactionTime).toBeNull();
    expect(component.reactionTimeMsg).toBe('');
  });

  it('should disable tap button while test is not running', () => {
    const tapButton = fixture.nativeElement.querySelector('.tap');
    expect(tapButton.disabled).toBe(true);
  });
});
