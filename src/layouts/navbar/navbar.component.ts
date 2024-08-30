import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPhone,
  faEnvelope,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  userData!: any;

  logout() {
    this.userService.logout().subscribe({
      next: (res) => {
        this.router.navigateByUrl('/');
      },
    });
  }

  ngOnInit(): void {
    this.userService.getAuthUser().subscribe({
      next: (res: any) => {
        this.userData = res.user;
      },
    });
  }
}
