import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {User} from '../user.model';
import {DisplayTypeRow} from './display-type.row';

@Component({
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList$: Observable<[User]>;

  displayType = DisplayTypeRow.Row;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userList$ = this.userService.getList();
  }



}
