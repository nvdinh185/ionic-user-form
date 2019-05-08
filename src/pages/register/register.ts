import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginPage } from '../login/login';
import { PostUserProvider } from '../../providers/post-user/post-user';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public myFromGroup: FormGroup;
  public isImageViewer: boolean = false;
  public resourceImages: { imageViewer: any, file: any, name: string }[] = [];
  public serverKey: any;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private postUser: PostUserProvider
  ) { }

  ngOnInit() {
    this.myFromGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, (Validators.minLength(3))]]
    });
  }

  onSubmit() {
    //gui lenh login 
    let loading = this.loadingCtrl.create({
      content: 'Saving user info...'
    });
    loading.present();

    this.postUser.register(this.myFromGroup.value)
      .then(data => {
        loading.dismiss();
        this.alertCtrl.create({
          title: 'Register status',
          subTitle: data.message,
          buttons: ['OK']
        }).present();
        this.navCtrl.setRoot(LoginPage);
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
