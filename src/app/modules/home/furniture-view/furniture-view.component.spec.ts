import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureViewComponent } from './furniture-view.component';

describe('FurnitureViewComponent', () => {
  let component: FurnitureViewComponent;
  let fixture: ComponentFixture<FurnitureViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
