import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewReservationComponent } from './create-new-reservation.component';

describe('CreateNewReservationComponent', () => {
  let component: CreateNewReservationComponent;
  let fixture: ComponentFixture<CreateNewReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
