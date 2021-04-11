import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {User} from '../user.model';

@Component({
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList$: Observable<[User]>;
  start = 0;
  end = 8;
  pageSize = 8;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userList$ = this.userService.getList();
  }

  pageIndexChange(pageIndex: number) {
    this.start = (pageIndex - 1) * this.pageSize;
    this.end = this.start + 8;
  }

}
