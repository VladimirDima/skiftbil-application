import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoDisplayComponent } from './car-info-display.component';

describe('CarInfoDisplayComponent', () => {
  let component: CarInfoDisplayComponent;
  let fixture: ComponentFixture<CarInfoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInfoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
