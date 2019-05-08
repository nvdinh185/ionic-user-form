import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { XemhoasessionPage } from '../xemhoasession/xemhoasession';

@Component({
  selector: 'page-muahoasession',
  templateUrl: 'muahoasession.html',
})
export class MuahoasessionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MuahoasessionPage');
  }
  listHoa = [];
  onSubmit(muaHoaForm){
    var hoa = {id: muaHoaForm.value.id, ten: muaHoaForm.value.ten, soluong: muaHoaForm.value.soluong, gia: muaHoaForm.value.gia};
    this.listHoa.push(hoa);
    var value = JSON.stringify(this.listHoa);
    sessionStorage.setItem("listHoa", value);
    let alert = this.alertCtrl.create({
      title: 'Trạng thái mua',
      subTitle: 'Mua thành công!',
      buttons: ['OK']
    });
    alert.present();
  }
  xemDanhSach(){
    this.navCtrl.push(XemhoasessionPage);
  }

}
