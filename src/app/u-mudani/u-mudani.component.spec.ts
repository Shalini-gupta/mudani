import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UMudaniComponent } from './u-mudani.component';

describe('UMudaniComponent', () => {
  let component: UMudaniComponent;
  let fixture: ComponentFixture<UMudaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UMudaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UMudaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
