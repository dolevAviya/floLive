import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../users.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent {
  @Input() users: User[] = [];
  headers = ['firstName', 'lastName', 'age', 'Gender', 'Address'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['../user-details'], {
      relativeTo: this.route,
      state: { users: this.users, userId },
    });
  }
}
