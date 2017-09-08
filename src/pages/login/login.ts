import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoaderService } from '../../services/loader'

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController, public loadingService: LoaderService) {

    }

    entrar() {
        this.loadingService.exibirLoading("Efetuando Login...");
        //Chamada do backend Consulta se o usuario existe
        this.loadingService.ocultarLoading();
        this.navCtrl.setRoot(HomePage);
        
    }
}