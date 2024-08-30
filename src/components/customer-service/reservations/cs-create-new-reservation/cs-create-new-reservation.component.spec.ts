import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCreateNewReservationComponent } from './cs-create-new-reservation.component';

describe('CsCreateNewReservationComponent', () => {
  let component: CsCreateNewReservationComponent;
  let fixture: ComponentFixture<CsCreateNewReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsCreateNewReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsCreateNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
