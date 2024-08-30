import { Component, OnInit } from '@angular/core';
import { HeadingComponent } from '../../../shared/heading/heading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { SuccessMessageComponent } from '../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../shared/error-message/error-message.component';
import { MessagesService } from '../../../services/messages.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    HeadingComponent,
    FontAwesomeModule,
    RouterLink,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent implements OnInit {
  constructor(private messagesService: MessagesService) {}

  icons = {
    edit: faEdit,
    delete: faTrash,
  };

  messages: any = null;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  deleteDepartment(id: string) {
    this.messagesService.deleteMessage(id).subscribe({
      next: (res: any) => {
        this.messages = res.messages;
        this.successMessage = res.message;
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
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
    this.messagesService.getMessages().subscribe({
      next: (res: any) => {
        this.messages = res;
      },
    });
  }
}
