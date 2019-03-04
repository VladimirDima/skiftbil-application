import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoOptionsComponent } from './car-info-options.component';

describe('CarInfoOptionsComponent', () => {
  let component: CarInfoOptionsComponent;
  let fixture: ComponentFixture<CarInfoOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInfoOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInfoOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
