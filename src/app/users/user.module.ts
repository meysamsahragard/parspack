import {NgModule} from '@angular/core';
import {UserListComponent} from './list/user-list.component';
import {UserRoutingModule} from './user-routing.module';
import {CommonModule} from '@angular/common';
import {NzCardModule} from 'ng-zorro-antd/card';
import {UserDetailComponent} from './details/user-detail.component';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {FormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    UserRoutingModule,
    CommonModule,
    NzCardModule,
    NzPaginationModule,
    NzSwitchModule,
    FormsModule,
    NzIconModule,
    NzButtonModule
  ],
  declarations: [UserListComponent, UserDetailComponent]
})

export class UserModule {

}
