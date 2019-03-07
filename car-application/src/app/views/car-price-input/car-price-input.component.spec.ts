import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPriceInputComponent } from './car-price-input.component';

describe('CarPriceInputComponent', () => {
  let component: CarPriceInputComponent;
  let fixture: ComponentFixture<CarPriceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPriceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPriceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
