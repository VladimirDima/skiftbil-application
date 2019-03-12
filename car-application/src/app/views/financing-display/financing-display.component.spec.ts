import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingDisplayComponent } from './financing-display.component';

describe('FinancingDisplayComponent', () => {
  let component: FinancingDisplayComponent;
  let fixture: ComponentFixture<FinancingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
