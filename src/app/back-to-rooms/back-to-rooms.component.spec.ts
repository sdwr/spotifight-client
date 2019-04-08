import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToRoomsComponent } from './back-to-rooms.component';

describe('BackToRoomsComponent', () => {
  let component: BackToRoomsComponent;
  let fixture: ComponentFixture<BackToRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
