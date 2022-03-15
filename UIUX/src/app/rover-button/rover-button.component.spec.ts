import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverButtonComponent } from './rover-button.component';

describe('RoverButtonComponent', () => {
  let component: RoverButtonComponent;
  let fixture: ComponentFixture<RoverButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
