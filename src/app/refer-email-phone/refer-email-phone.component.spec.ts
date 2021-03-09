import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferEmailPhoneComponent } from './refer-email-phone.component';

describe('ReferEmailPhoneComponent', () => {
  let component: ReferEmailPhoneComponent;
  let fixture: ComponentFixture<ReferEmailPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferEmailPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferEmailPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
