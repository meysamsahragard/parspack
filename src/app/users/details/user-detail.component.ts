import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {UserDetail} from './user-detail.model';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: 'user-detail.component.html',
  styleUrls: ['user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  public userDetails: UserDetail;
  public largeImgSrc: string;
  private subscribtion: Subscription;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.subscribtion = this.userService.getDeatail(id).subscribe(res => {
      this.userDetails = res;
      this.setLargeImg(res.images[0]);
    });
  }

  setLargeImg(image: string) {
    this.largeImgSrc = image;
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}

