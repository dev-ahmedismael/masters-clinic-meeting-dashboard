import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-success-message',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './success-message.component.html',
  styleUrl: './success-message.component.scss',
})
export class SuccessMessageComponent {
  @Input() message: string | null = null;

  closeIcon = faXmark;

  closeSuccessMessage(): void {
    this.message = null;
  }
}
