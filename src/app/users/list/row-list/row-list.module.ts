import {NgModule} from '@angular/core';
import {RowListComponent} from './row-list.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    NzListModule,
    NzSkeletonModule,
    CommonModule,
    RouterModule,
    NzButtonModule
  ],
  declarations: [RowListComponent],
  exports: [RowListComponent]
})

export class RowListModule {

}
