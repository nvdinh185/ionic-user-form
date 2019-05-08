import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetHocVienProvider {

  constructor(public http: HttpClient) {
  }

  getHocVien(){
    const url = 'http://localhost:3000/hocvien-ionic';
    return this.http.get(url)
    .toPromise()
    .then(res => res);
  }

}
