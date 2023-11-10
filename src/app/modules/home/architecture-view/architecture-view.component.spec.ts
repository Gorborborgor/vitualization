import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualsViewComponent } from './architecture-view.component';

describe('VisualsViewComponent', () => {
  let component: VisualsViewComponent;
  let fixture: ComponentFixture<VisualsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
