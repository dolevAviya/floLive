import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User, Users } from '../users.interface';
import { Observable, Subject, map } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  users!: Observable<Users>;
  offset = 0;
  limit = 10;
  pageIndex = 0;
  searchVal = '';
  malesAmount$!: Observable<number>;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.offset = e.pageIndex * e.pageSize;
    this.limit = e.pageSize;
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getUsers(
      this.searchVal,
      this.offset,
      this.limit
    );
    this.malesAmount$ = this.users.pipe(
      map(
        (data) =>
          data.users?.filter((user) => user.gender === 'male').length || 0
      )
    );
  }

  search() {
    this.offset = 0;
    this.pageIndex = 0;
    this.getUsers();
  }
}
