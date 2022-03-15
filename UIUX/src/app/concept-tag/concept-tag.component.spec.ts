import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptTagComponent } from './concept-tag.component';

describe('ConceptTagComponent', () => {
  let component: ConceptTagComponent;
  let fixture: ComponentFixture<ConceptTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
