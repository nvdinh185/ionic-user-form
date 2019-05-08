import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from './../buyout/buyout';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  listHoa: Observable<any>;

  constructor(public navCtrl: NavController, private httpClient: HttpClient, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.listHoa = this.httpClient.get('http://localhost:3000/hoa')
    .map(res => res['results']);
  }
  
  Buy(hoa) {
    this.navCtrl.push(BuyoutPage, hoa);
  }
}
