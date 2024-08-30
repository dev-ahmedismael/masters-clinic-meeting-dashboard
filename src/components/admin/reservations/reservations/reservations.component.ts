import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';
import { ReservationsService } from '../../../../services/reservations.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    HeadingComponent,
    FontAwesomeModule,
    RouterLink,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent {
  constructor(private reservationsService: ReservationsService) {}

  icons = {
    edit: faEdit,
    delete: faTrash,
  };

  reservations: any = null;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  deleteReservation(id: string) {
    this.reservationsService.deleteReservation(id).subscribe({
      next: (res: any) => {
        this.reservations = res.reservations;
        this.successMessage = res.message;
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
      },
      error: (err: any) => {
        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      },
    });
  }

  copy(url: string) {
    navigator.clipboard.writeText(url);
  }
  ngOnInit(): void {
    this.reservationsService.getReservations().subscribe({
      next: (res: any) => {
        this.reservations = res;
      },
    });
  }
}
