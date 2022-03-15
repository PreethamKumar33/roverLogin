import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChipsComponent } from './display-chips.component';

describe('DisplayChipsComponent', () => {
  let component: DisplayChipsComponent;
  let fixture: ComponentFixture<DisplayChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
