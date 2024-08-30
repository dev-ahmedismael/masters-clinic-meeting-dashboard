import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../../../services/reservations.service';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-d-reservations',
  standalone: true,
  imports: [
    HeadingComponent,
    FontAwesomeModule,
    RouterLink,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './d-reservations.component.html',
  styleUrl: './d-reservations.component.scss',
})
export class DReservationsComponent implements OnInit {
  constructor(private resService: ReservationsService) {}

  icons = {
    edit: faEdit,
    delete: faTrash,
  };

  reservations: any = null;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  copy(url: string) {
    navigator.clipboard.writeText(url);
  }

  ngOnInit(): void {
    this.resService.getDoctorReservations().subscribe({
      next: (res: any) => {
        this.reservations = res.reservations;
      },
    });
  }
}
