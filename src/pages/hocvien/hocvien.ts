import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { GetHocVienProvider } from '../../providers/get-hoc-vien/get-hoc-vien';
import {DetailHvPage } from '../detail-hv/detail-hv'

@Component({
  selector: 'page-hocvien',
  templateUrl: 'hocvien.html',
})
export class HocvienPage implements OnInit {
  arHocVien: any = [];
  arHocVien1: any = [];
  isLoading;
  isShow = true;
  isShowDel = false;
  isShowEdit = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public hocVienService: GetHocVienProvider, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.isLoading = true;
    this.hocVienService.getHocVien()
      .then(hocvien => {
        this.arHocVien = hocvien;
        for (let i = 0; i < 3; i++) {
          this.arHocVien1.push(this.arHocVien[i]);
        }
        this.isLoading = false;
      })
      .catch(err => console.log(err));
  }

  addHocVien() {
    let alert = this.alertCtrl.create({
      title: 'Them hoc vien',
      inputs: [
        {
          name: 'ten',
          placeholder: 'Ten hoc vien'
        },
        {
          name: 'gioiTinh',
          placeholder: 'Giới tính'
        },
        {
          name: 'toan',
          placeholder: 'Điểm Toán'
        },
        {
          name: 'ly',
          placeholder: 'Điểm Lý'
        },
        {
          name: 'hoa',
          placeholder: 'Điểm Hóa'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Khong them nua ak?');
          }
        },
        {
          text: 'Them',
          handler: data => {
            var id = this.arHocVien1.length + 1;
            var ten = data.ten;
            var gioiTinh = (data.gioiTinh.toUpperCase() == "nam".toUpperCase());
            var toan = data.toan;
            var ly = data.ly;
            var hoa = data.hoa;
            var hocvien = { id, ten, gioiTinh, toan, ly, hoa };
            this.arHocVien1.unshift(hocvien);
            console.log("Da them thanh cong!");
          }
        }
      ]
    });
    alert.present();
  }

  deleteHV(id) {
    const index = this.arHocVien1.findIndex(e => e.id == id);
    this.arHocVien1.splice(index, 1);
    alert("Da xoa thanh cong!");
  }

  editHV(id){
    const index = this.arHocVien1.findIndex(e => e.id==id);
    var hocvienEdit = this.arHocVien1[index];
    let alert = this.alertCtrl.create({
      title: 'Sua hoc vien',
      inputs: [
        {
          name: 'ten',
          value: hocvienEdit.ten,
        },
        {
          name: 'gioiTinh',
          value: hocvienEdit.gioiTinh?"Nam":"Nu",
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Khong sua nua ak?');
          }
        },
        {
          text: 'Sua',
          handler: data => {
            var ten = data.ten;
            var gioiTinh = (data.gioiTinh.toUpperCase() == "nam".toUpperCase());
            this.arHocVien1[index].ten = ten;
            this.arHocVien1[index].gioiTinh = gioiTinh;
            console.log("Da sua thanh cong!");
          }
        }
      ]
    });
    alert.present();
  }

  reorderItems(indexes) {
    let element = this.arHocVien1[indexes.from];
    this.arHocVien1.splice(indexes.from, 1);
    this.arHocVien1.splice(indexes.to, 0, element);
  }

  doRefresh(refresher) {
    this.arHocVien1.sort(function (a, b) {
      return b.id - a.id;
    });
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  i = 3;
  doInfinite(event) {
    if (this.i > this.arHocVien.length-1) {
        alert("Het du lieu de tai!");
    } else {
      setTimeout(() => {
        this.arHocVien1.push(this.arHocVien[this.i++]);
        event.complete();
      }, 500);
    }
  }

  detailHV(hocvien){
    this.navCtrl.push(DetailHvPage, hocvien);
  }
}