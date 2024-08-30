import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';
import { Router, RouterLink } from '@angular/router';
import { EmployeesService } from '../../../../services/employees.service';

@Component({
  selector: 'app-create-new-employee',
  standalone: true,
  imports: [
    HeadingComponent,
    ReactiveFormsModule,
    SuccessMessageComponent,
    ErrorMessageComponent,
    RouterLink,
  ],
  templateUrl: './create-new-employee.component.html',
  styleUrl: './create-new-employee.component.scss',
})
export class CreateNewEmployeeComponent {
  constructor(
    private fb: FormBuilder,
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  roles: any = [];

  form!: FormGroup;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  submit() {
    this.employeesService.addEmployee(this.form.value).subscribe({
      next: (res: any) => {
        this.form.reset();
        console.log(res);

        this.successMessage = res.message;
        setTimeout(() => {
          this.router.navigateByUrl('/admin/employees');
        }, 1000);
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
    this.employeesService.getRoles().subscribe({
      next: (res: any) => {
        this.roles = res.roles;
      },
    });
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }
}
