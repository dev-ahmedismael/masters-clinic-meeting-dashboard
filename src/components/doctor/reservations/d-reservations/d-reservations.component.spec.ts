import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DReservationsComponent } from './d-reservations.component';

describe('DReservationsComponent', () => {
  let component: DReservationsComponent;
  let fixture: ComponentFixture<DReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
