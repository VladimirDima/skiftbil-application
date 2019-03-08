import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBuyerComponent } from './contact-buyer.component';

describe('ContactBuyerComponent', () => {
  let component: ContactBuyerComponent;
  let fixture: ComponentFixture<ContactBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
