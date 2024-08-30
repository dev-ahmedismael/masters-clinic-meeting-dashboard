import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';
import { DepartmentsService } from '../../../../services/departments.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    HeadingComponent,
    FontAwesomeModule,
    RouterLink,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
  constructor(private departmentsService: DepartmentsService) {}

  icons = {
    edit: faEdit,
    delete: faTrash,
  };

  departments: any = null;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  editDepartment(id: string) {}
  deleteDepartment(id: string) {
    this.departmentsService.deleteDepartment(id).subscribe({
      next: (res: any) => {
        this.departments = res.departments;
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
    this.departmentsService.getDepartments().subscribe({
      next: (res: any) => {
        this.departments = res;
      },
    });
  }
}
