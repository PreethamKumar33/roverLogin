import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverProgressBarComponent } from './rover-progress-bar.component';

describe('RoverProgressBarComponent', () => {
  let component: RoverProgressBarComponent;
  let fixture: ComponentFixture<RoverProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
