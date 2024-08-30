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
import { DoctorsService } from '../../../../services/doctors.service';
import { DepartmentsService } from '../../../../services/departments.service';
import { BranchesService } from '../../../../services/branches.service';
import { EmployeesService } from '../../../../services/employees.service';

@Component({
  selector: 'app-create-new-doctor',
  standalone: true,
  imports: [
    HeadingComponent,
    ReactiveFormsModule,
    SuccessMessageComponent,
    ErrorMessageComponent,
    RouterLink,
  ],
  templateUrl: './create-new-doctor.component.html',
  styleUrl: './create-new-doctor.component.scss',
})
export class CreateNewDoctorComponent {
  constructor(
    private fb: FormBuilder,
    private branchesService: BranchesService,
    private departmentsService: DepartmentsService,
    private doctorsService: DoctorsService,
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  branches: any = [];
  departments: any = [];
  employees: any = [];

  form!: FormGroup;

  formData = new FormData();

  file!: any;
  onFileSelect(event: any) {
    this.file = event.target.files[0];
  }

  successMessage: string | null = null;
  errorMessage: string | null = null;
  x: any = null;
  submit() {
    for (const key in this.form.value) {
      if (key && this.form.value[key]) {
        this.formData.append(key, this.form.value[key]);
      }
    }

    if (this.file) {
      this.formData.append('image', this.file);
    }

    this.doctorsService.addDoctor(this.formData).subscribe({
      next: (res: any) => {
        this.form.reset();
        this.successMessage = res.message;
        setTimeout(() => {
          this.router.navigateByUrl('/admin/doctors');
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
    // Fetch Branches
    this.branchesService.getBranches().subscribe({
      next: (res: any) => {
        this.branches = res;
      },
    });

    // Fetch Departments
    this.departmentsService.getDepartments().subscribe({
      next: (res: any) => {
        this.departments = res;
      },
    });

    // Fetch Employees
    this.employeesService.getEmployees().subscribe({
      next: (res: any) => {
        this.employees = res;
      },
    });

    // Handle Form
    this.form = this.fb.group({
      branch_id: ['', Validators.required],
      department_id: ['', Validators.required],
      user_id: ['', Validators.required],
    });
  }
}
