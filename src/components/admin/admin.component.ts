import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBedPulse,
  faCalendarDays,
  faEnvelope,
  faHospital,
  faUserDoctor,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    FontAwesomeModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  sidebarItems = [
    { id: 1, icon: faEnvelope, title: 'البريد الوارد', path: 'inbox' },
    { id: 2, icon: faCalendarDays, title: 'الحجوزات', path: 'reservations' },
    { id: 3, icon: faHospital, title: 'الفروع', path: 'branches' },
    {
      id: 4,
      icon: faBedPulse,
      title: 'الأقسام الطبية',
      path: 'departments',
    },
    { id: 6, icon: faUserDoctor, title: 'الأطباء', path: 'doctors' },
    { id: 7, icon: faUsers, title: 'الموظفين', path: 'employees' },
  ];
}
