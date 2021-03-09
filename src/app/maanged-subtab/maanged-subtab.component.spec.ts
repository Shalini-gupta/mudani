import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaangedSubtabComponent } from './maanged-subtab.component';

describe('MaangedSubtabComponent', () => {
  let component: MaangedSubtabComponent;
  let fixture: ComponentFixture<MaangedSubtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaangedSubtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaangedSubtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
