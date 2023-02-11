import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDelReservationComponent } from './get-del-reservation.component';

describe('GetDelReservationComponent', () => {
  let component: GetDelReservationComponent;
  let fixture: ComponentFixture<GetDelReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDelReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDelReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
