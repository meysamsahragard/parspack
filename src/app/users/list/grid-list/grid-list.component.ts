import {Component, Input} from '@angular/core';
import {User} from '../../user.model';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['grid-list.component.scss']
})

export class GridListComponent {
  @Input() userList: [User];
  start = 0;
  end = 8;
  pageSize = 8;

  pageIndexChange(pageIndex: number) {
    this.start = (pageIndex - 1) * this.pageSize;
    this.end = this.start + 8;
  }
}
