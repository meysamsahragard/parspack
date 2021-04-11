import {UserDetail} from './details/user-detail.model';
import {User} from './user.model';

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl = 'https://hamed.ninja/';

  constructor(private http: HttpClient) {

  }

  getList(): Observable<[User]> {
    return this.http.get<[User]>(this.baseUrl + 'frontend_challenge/?o=list').pipe(shareReplay());
  }

  getDeatail(id): Observable<UserDetail> {
    return this.http.get<UserDetail>(this.baseUrl + 'frontend_challenge/?o=detail', {params: {id}});
  }
}
