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
import { DepartmentsService } from '../../../../services/departments.service';

@Component({
  selector: 'app-create-new-department',
  standalone: true,
  imports: [
    HeadingComponent,
    ReactiveFormsModule,
    SuccessMessageComponent,
    ErrorMessageComponent,
    RouterLink,
  ],
  templateUrl: './create-new-department.component.html',
  styleUrl: './create-new-department.component.scss',
})
export class CreateNewDepartmentComponent {
  constructor(
    private fb: FormBuilder,
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}
  form!: FormGroup;

  formData = new FormData();

  file!: any;
  onFileSelect(event: any) {
    this.file = event.target.files[0];
  }

  get title() {
    return this.form.controls['title'];
  }
  get slug() {
    return this.form.controls['slug'];
  }
  get content() {
    return this.form.controls['content'];
  }

  successMessage: string | null = null;
  errorMessage: string | null = null;

  submit() {
    for (const key in this.form.value) {
      if (key && this.form.value[key]) {
        this.formData.append(key, this.form.value[key]);
      }
    }

    if (this.file) {
      this.formData.append('image', this.file);
    }

    this.departmentsService.addDepartment(this.formData).subscribe({
      next: (res: any) => {
        this.form.reset();
        this.successMessage = res.message;
        setTimeout(() => {
          this.router.navigateByUrl('/admin/departments');
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
    this.form = this.fb.group({
      title: ['', Validators.required],
      slug: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
}
