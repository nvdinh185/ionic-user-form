import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class PostUserProvider {

  constructor(public http: Http) {}

  register(value) {
    const url = 'http://localhost:3000/signup';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }
  login(value) {
    const url = 'http://localhost:3000/login';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }
  logout(value) {
    const url = 'http://localhost:3000/logout';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }


}
