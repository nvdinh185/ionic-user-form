import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  public users = [{ username: "dinh", age: 27 }, { username: "hoa", age: 27 }, { username: "hanh", age: 27 }, { username: "Quyen", age: 27 }, { username: "Quynh", age: 27 }, { username: "Thu", age: 27 }];
  public users2: Observable<any>;
  public usersFresh = [{ username: "dinh1", age: 23 }, { username: "dinh2", age: 22 }, { username: "dinh3", age: 21 }, { username: "dinh4", age: 20 }];

  constructor (private httpClient: HttpClient, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.users2 = this.httpClient.get('http://localhost:3000/users')
    .map(res => res['results']);
    this.users2.subscribe(res =>{
      this.users = res;
    });
  }

  goHome() {
    this.navCtrl.pop();
  }

  reorderItems(index) {
    let element = this.users[index.from];
    this.users.splice(index.from, 1);
    this.users.splice(index.to, 0, element);
  }

  doRefresh(refresher) {
    this.users = this.usersFresh;
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  doInfinite(event) {
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        var user = { username: "Quyen", age: i };
        this.users.push(user);
      }
      event.complete();
    }, 500);
  }
}