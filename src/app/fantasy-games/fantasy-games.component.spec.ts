import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyGamesComponent } from './fantasy-games.component';

describe('FantasyGamesComponent', () => {
  let component: FantasyGamesComponent;
  let fixture: ComponentFixture<FantasyGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasyGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
