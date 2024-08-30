import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-service',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './customer-service.component.html',
  styleUrl: './customer-service.component.scss',
})
export class CustomerServiceComponent {}
