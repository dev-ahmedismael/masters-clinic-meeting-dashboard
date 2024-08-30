import { Component, OnInit } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import { BranchesService } from '../../../../services/branches.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { SuccessMessageComponent } from '../../../../shared/success-message/success-message.component';
import { ErrorMessageComponent } from '../../../../shared/error-message/error-message.component';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [
    HeadingComponent,
    FontAwesomeModule,
    RouterLink,
    SuccessMessageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss',
})
export class BranchesComponent implements OnInit {
  constructor(private branchesService: BranchesService) {}

  icons = {
    edit: faEdit,
    delete: faTrash,
  };

  branches: any = null;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  editBranch(id: string) {}
  deleteBranch(id: string) {
    this.branchesService.deleteBranch(id).subscribe({
      next: (res: any) => {
        this.branches = res.branches;
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
    this.branchesService.getBranches().subscribe({
      next: (res: any) => {
        this.branches = res;
      },
    });
  }
}
