import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetairmentComponent } from './retairment.component';

describe('RetairmentComponent', () => {
  let component: RetairmentComponent;
  let fixture: ComponentFixture<RetairmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetairmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetairmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
