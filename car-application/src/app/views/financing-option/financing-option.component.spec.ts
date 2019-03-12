import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingOptionComponent } from './financing-option.component';

describe('FinancingOptionComponent', () => {
  let component: FinancingOptionComponent;
  let fixture: ComponentFixture<FinancingOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancingOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
