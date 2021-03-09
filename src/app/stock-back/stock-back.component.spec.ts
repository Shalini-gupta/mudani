import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBackComponent } from './stock-back.component';

describe('StockBackComponent', () => {
  let component: StockBackComponent;
  let fixture: ComponentFixture<StockBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
