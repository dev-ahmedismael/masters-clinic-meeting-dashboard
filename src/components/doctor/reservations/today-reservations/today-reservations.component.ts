import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ReservationsService } from '../../../../services/reservations.service';

@Component({
  selector: 'app-today-reservations',
  standalone: true,
  imports: [
    HeadingComponent,
    FontAwesomeModule,
    RouterLink,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './today-reservations.component.html',
  styleUrl: './today-reservations.component.scss',
})
export class TodayReservationsComponent {
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
    this.resService.getTodayReservations().subscribe({
      next: (res: any) => {
        this.reservations = res.reservations;
      },
    });
  }
}
