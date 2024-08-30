import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';
import { DoctorsService } from '../../../../services/doctors.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [
    HeadingComponent,
    FontAwesomeModule,
    RouterLink,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss',
})
export class DoctorsComponent {
  constructor(private doctorsService: DoctorsService) {}

  icons = {
    edit: faEdit,
    delete: faTrash,
  };

  doctors: any = null;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  editDoctor(id: string) {}
  deleteDoctor(id: string) {
    this.doctorsService.deleteDoctor(id).subscribe({
      next: (res: any) => {
        this.doctors = res.doctors;
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

  ngOnInit(): void {
    this.doctorsService.getDoctors().subscribe({
      next: (res: any) => {
        this.doctors = res;
        console.log(res);
      },
    });
  }
}
