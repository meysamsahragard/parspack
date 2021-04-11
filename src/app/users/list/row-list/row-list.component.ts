import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['row-list.component.scss']
})

export class RowListComponent {
  @Input() userList: [];
  isloadingMore = false;
  start = 1;
  end = 8;
  loading: boolean;

  loadMore() {
    this.end += 8;

  }

}
