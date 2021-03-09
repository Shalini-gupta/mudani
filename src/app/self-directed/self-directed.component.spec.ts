import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDirectedComponent } from './self-directed.component';

describe('SelfDirectedComponent', () => {
  let component: SelfDirectedComponent;
  let fixture: ComponentFixture<SelfDirectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfDirectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDirectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
