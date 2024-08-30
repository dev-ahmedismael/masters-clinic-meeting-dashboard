import { Component, OnInit } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BranchesService } from '../../../../services/branches.service';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-new-branch',
  standalone: true,
  imports: [
    HeadingComponent,
    ReactiveFormsModule,
    SuccessMessageComponent,
    ErrorMessageComponent,
    RouterLink,
  ],
  templateUrl: './create-new-branch.component.html',
  styleUrl: './create-new-branch.component.scss',
})
export class CreateNewBranchComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private branchesServices: BranchesService,
    private router: Router
  ) {}
  form!: FormGroup;

  get title() {
    return this.form.controls['title'];
  }
  get slug() {
    return this.form.controls['slug'];
  }
  get address() {
    return this.form.controls['address'];
  }
  get location() {
    return this.form.controls['location'];
  }

  successMessage: string | null = null;
  errorMessage: string | null = null;

  submit() {
    this.branchesServices.addBranch(this.form.value).subscribe({
      next: (res: any) => {
        this.form.reset();
        this.successMessage = res.message;
        setTimeout(() => {
          this.router.navigateByUrl('/admin/branches');
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
      address: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
}
