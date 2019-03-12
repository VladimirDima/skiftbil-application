import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRegistrationInputComponent } from './car-registration-input.component';

describe('CarRegistrationInputComponent', () => {
  let component: CarRegistrationInputComponent;
  let fixture: ComponentFixture<CarRegistrationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRegistrationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRegistrationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
