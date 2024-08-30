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
import { ReservationsService } from '../../../../services/reservations.service';
import { BranchesService } from '../../../../services/branches.service';
import { DepartmentsService } from '../../../../services/departments.service';
import { DoctorsService } from '../../../../services/doctors.service';

@Component({
  selector: 'app-create-new-reservation',
  standalone: true,
  imports: [
    HeadingComponent,
    ReactiveFormsModule,
    SuccessMessageComponent,
    ErrorMessageComponent,
    RouterLink,
  ],
  templateUrl: './create-new-reservation.component.html',
  styleUrl: './create-new-reservation.component.scss',
})
export class CreateNewReservationComponent {
  constructor(
    private fb: FormBuilder,
    private reservationsService: ReservationsService,
    private branchesService: BranchesService,
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  branches: any = [];
  departments: any = [];
  doctors: any = [];

  times = [
    { time: '10:00 ص', value: '10:00:00' },
    { time: '10:30 ص', value: '10:30:00' },
    { time: '11:00 ص', value: '11:00:00' },
    { time: '11:30 ص', value: '11:30:00' },
    { time: '12:00 م', value: '12:00:00' },
    { time: '12:30 م', value: '12:30:00' },
    { time: '05:00 م', value: '17:00:00' },
    { time: '05:30 م', value: '17:30:00' },
    { time: '06:00 م', value: '18:00:00' },
    { time: '06:30 م', value: '18:30:00' },
    { time: '07:00 م', value: '19:00:00' },
    { time: '07:30 م', value: '19:30:00' },
    { time: '08:00 م', value: '20:00:00' },
    { time: '08:30 م', value: '20:30:00' },
    { time: '09:00 م', value: '21:00:00' },
    { time: '09:30 م', value: '21:30:00' },
  ];

  updateDoctors() {
    let data = {
      branch_id: this.form.controls['branch'].value,
      department_id: this.form.controls['department'].value,
    };
    this.reservationsService.getDoctors(data).subscribe({
      next: (res: any) => {
        console.log(res);

        this.doctors = res.doctors;
      },
    });
  }

  form!: FormGroup;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  submit() {
    this.reservationsService.addReservation(this.form.value).subscribe({
      next: (res: any) => {
        this.form.reset();
        this.successMessage = res.message;
        setTimeout(() => {
          this.router.navigateByUrl('/admin/reservations');
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

    // Handle Form
    this.form = this.fb.group({
      branch: ['', Validators.required],
      department: ['', Validators.required],
      doctor_id: ['', Validators.required],
      patient_name: ['', Validators.required],
      patient_phone: ['', Validators.required],
      patient_email: ['', Validators.required, Validators.email],
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: ['pending'],
      notes: [''],
    });
  }
}
