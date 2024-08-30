import { Component } from '@angular/core';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { faCalendarDays, faHospital } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SidebarComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorComponent {
  sidebarItems = [
    {
      id: 1,
      icon: faCalendarDays,
      title: 'حجوزات اليوم',
      path: 'today-reservations',
    },
    { id: 2, icon: faHospital, title: 'جميع الحجوزات', path: 'reservations' },
  ];
}
