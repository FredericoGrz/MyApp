import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { LoginPage } from '../pages/login/login';

import { UsuarioListPage } from '../pages/usuario/usuario-list/usuario-list';
import { UsuarioPage } from '../pages/usuario/usuario/usuario';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoaderService } from '../services/loader';
import { AlertService } from '../services/alert';
import { BaseClass } from '../baseClass/baseClass';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    LoginPage,
    UsuarioListPage,
    UsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    LoginPage,
    UsuarioListPage,
    UsuarioPage
  ],
  providers: [
    LoaderService,
    AlertService,
    BaseClass,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
