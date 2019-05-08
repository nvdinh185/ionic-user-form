import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {

  public hoa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.hoa = this.navParams.data;
  }

  muaHoa(hoa) {
    alert("Chuc mung ban da mua thanh cong "+hoa.ten);
    this.navCtrl.pop();
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
