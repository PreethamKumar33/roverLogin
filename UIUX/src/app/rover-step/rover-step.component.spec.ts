import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverStepComponent } from './rover-step.component';

describe('RoverStepComponent', () => {
  let component: RoverStepComponent;
  let fixture: ComponentFixture<RoverStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
