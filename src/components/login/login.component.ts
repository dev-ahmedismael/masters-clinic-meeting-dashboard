import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm!: FormGroup<any>;

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  errorMessage: string | null = null;

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log(res);

        if (typeof window !== 'undefined') {
          localStorage.setItem('name', res.user.name);
          localStorage.setItem('auth-token', res.token);
        }
        this.router.navigateByUrl(`/${res.path}`);
      },
      error: (res: any) => {
        this.errorMessage = res.error.message;
        setTimeout(() => {
          this.errorMessage = null;
        }, 4000);
      },
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
