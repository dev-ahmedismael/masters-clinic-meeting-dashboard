import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsReservationsComponent } from './cs-reservations.component';

describe('CsReservationsComponent', () => {
  let component: CsReservationsComponent;
  let fixture: ComponentFixture<CsReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
