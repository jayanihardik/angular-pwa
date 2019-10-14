import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) {

  }

  getdata() {
    return this.http.get('https://api.github.com/users/hadley/orgs').pipe(map(Subscriber => Subscriber));
  }
}
