import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { LoginPage } from '../pages/login/login';

import { UsuarioListPage } from '../pages/usuario/usuario-list/usuario-list';
import { UsuarioPage } from '../pages/usuario/usuario/usuario';
import {UsuarioService} from '../pages/usuario/usuario.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoaderService } from '../services/loader';
import { AlertService } from '../services/alert';
import { Navigation } from '../services/navigation';
import { ToasterService } from '../services/toaster/toaster';
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
    HttpModule,
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
    Navigation,
    ToasterService,
    BaseClass,
    UsuarioService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
