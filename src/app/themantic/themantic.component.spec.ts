import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemanticComponent } from './themantic.component';

describe('ThemanticComponent', () => {
  let component: ThemanticComponent;
  let fixture: ComponentFixture<ThemanticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemanticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
