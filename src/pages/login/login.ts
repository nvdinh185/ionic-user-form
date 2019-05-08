import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterPage } from '../register/register';
import { MuahoasessionPage } from '../muahoasession/muahoasession';
import { PostUserProvider } from '../../providers/post-user/post-user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myFromGroup: FormGroup;
  isShowInfo = false;
  serverTokenUserInfo = [
    { image: "https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg", name: "Nguyen Van Dinh" }
  ];
  constructor(private formBuilder: FormBuilder, private postUser: PostUserProvider, private toastCtrl: ToastController, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.myFromGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  callRegister() {
    //console.log("goi dang ky")
    this.navCtrl.push(RegisterPage);
  }

  onSubmit() {
    //console.log("goi dang nhap");
    //gui lenh login 
    let loading = this.loadingCtrl.create({
      content: 'Saving user info...'
    });
    loading.present();

    this.postUser.login(this.myFromGroup.value)
      .then(data => {
        loading.dismiss();
        this.alertCtrl.create({
          title: 'Login status',
          subTitle: data.message,
          buttons: ['OK']
        }).present();
        if (data.status == "ok") {
          this.navCtrl.push(MuahoasessionPage);
        } else {
          this.navCtrl.setRoot(LoginPage);
        }
      })
      .catch(err => {
        loading.dismiss();
        this.toastCtrl.create({
          message: "result: " + JSON.stringify(err),
          duration: 5000,
          position: 'bottom'
        }).present();
      });
  }

  callLogout() {
    //console.log("goi dang xuat");
    let loading = this.loadingCtrl.create({
      content: 'Saving user info...'
    });
    loading.present();

    this.postUser.logout(this.myFromGroup.value)
      .then(data => {
        loading.dismiss();
        this.alertCtrl.create({
          title: 'Logout status',
          subTitle: data.message,
          buttons: ['OK']
        }).present();
        if (data.status == "ok") {
          this.isShowInfo = false;
        } else {
          alert("Logout khong thanh cong!");
        }
      })
      .catch(err => {
        loading.dismiss();
        this.toastCtrl.create({
          message: "result: " + JSON.stringify(err),
          duration: 5000,
          position: 'bottom'
        }).present();
      });
  }
}