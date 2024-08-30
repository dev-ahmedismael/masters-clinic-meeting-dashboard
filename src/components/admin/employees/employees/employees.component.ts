import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';
import { EmployeesService } from '../../../../services/employees.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    HeadingComponent,
    FontAwesomeModule,
    RouterLink,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent {
  constructor(private employeesService: EmployeesService) {}

  icons = {
    edit: faEdit,
    delete: faTrash,
  };

  employees: any = null;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  editEmployee(id: string) {}
  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id).subscribe({
      next: (res: any) => {
        this.employees = res.users;
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
    this.employeesService.getEmployees().subscribe({
      next: (res: any) => {
        this.employees = res;
      },
    });
  }
}
