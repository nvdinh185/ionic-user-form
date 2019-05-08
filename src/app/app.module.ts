import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MuahoasessionPage } from '../pages/muahoasession/muahoasession';
import { XemhoasessionPage } from '../pages/xemhoasession/xemhoasession';
import { UsersPage } from '../pages/users/users';
import { HocvienPage } from '../pages/hocvien/hocvien';
import { DetailHvPage } from '../pages/detail-hv/detail-hv'
import { ShopPage } from '../pages/shop/shop'
import { BuyoutPage } from '../pages/buyout/buyout'

import { PostUserProvider } from '../providers/post-user/post-user';
import { GetHocVienProvider } from '../providers/get-hoc-vien/get-hoc-vien';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    MuahoasessionPage,
    XemhoasessionPage,
    UsersPage,
    HocvienPage,
    DetailHvPage,
    ShopPage,
    BuyoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    MuahoasessionPage,
    XemhoasessionPage,
    UsersPage,
    HocvienPage,
    DetailHvPage,
    ShopPage,
    BuyoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostUserProvider,
    GetHocVienProvider
  ]
})
export class AppModule {}
