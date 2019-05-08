import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UsersPage } from '../users/users';
import { HocvienPage } from '../hocvien/hocvien';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public platform: Platform, public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {
    if(this.platform.is('ios')) console.log("This is platform ios");
  }
  menu(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Chon mot chuc nang',
      buttons: [
        {
          text: 'Login',
          icon: this.platform.is('ios') ? 'log-in' : null,
          handler: () => {
            this.login();
          }
        },
        {
          text: 'ListUsers',
          icon: this.platform.is('ios') ? 'share' : null,
          handler: () => {
            this.listUser();
          }
        },
        {
          text: 'ListHocVien',
          icon: this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            this.listHocVien();
          }
        },
        {
          text: 'Mua Hoa',
          icon: this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            this.muaHoa();
          }
        },
        {
          text: 'Cancel',
          icon: this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  login(){
    this.navCtrl.push(LoginPage);
  }

  listUser(){
    this.navCtrl.push(UsersPage);
  }
  
  listHocVien(){
    this.navCtrl.push(HocvienPage);
  }
  
  muaHoa(){
    this.navCtrl.push(ShopPage);
  }
}
