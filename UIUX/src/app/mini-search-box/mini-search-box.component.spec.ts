import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSearchBoxComponent } from './mini-search-box.component';

describe('MiniSearchBoxComponent', () => {
  let component: MiniSearchBoxComponent;
  let fixture: ComponentFixture<MiniSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
