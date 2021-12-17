import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainTagComponent } from './domain-tag.component';

describe('DomainTagComponent', () => {
  let component: DomainTagComponent;
  let fixture: ComponentFixture<DomainTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
