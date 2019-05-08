import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-xemhoasession',
  templateUrl: 'xemhoasession.html',
})
export class XemhoasessionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  listHoa = [];

  ionViewDidLoad() {
    var value = sessionStorage.getItem('listHoa');
    this.listHoa = JSON.parse(value);
    sessionStorage.clear(); 
  }

}
