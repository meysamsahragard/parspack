import {NgModule} from '@angular/core';
import {GridListComponent} from './grid-list.component';
import {RouterModule} from '@angular/router';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    RouterModule,
    NzCardModule,
    NzPaginationModule,
    CommonModule
  ],
  declarations: [GridListComponent],
  exports: [GridListComponent]
})

export class GridListModule {

}
