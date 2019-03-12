import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFlowComponent } from './loan-flow.component';

describe('LoanFlowComponent', () => {
  let component: LoanFlowComponent;
  let fixture: ComponentFixture<LoanFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
