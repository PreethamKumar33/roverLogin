import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverStepperComponent } from './rover-stepper.component';

describe('RoverStepperComponent', () => {
  let component: RoverStepperComponent;
  let fixture: ComponentFixture<RoverStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
