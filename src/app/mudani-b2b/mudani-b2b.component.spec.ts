import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudaniB2bComponent } from './mudani-b2b.component';

describe('MudaniB2bComponent', () => {
  let component: MudaniB2bComponent;
  let fixture: ComponentFixture<MudaniB2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudaniB2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudaniB2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
