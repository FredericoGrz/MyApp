import { AlertController, Alert } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertService{
    alert : Alert
    constructor(private alertCtrl: AlertController){

    }

    exibirAlertaSimNao(mensagem: string, funcaoSim: Function = null, funcaoNao: Function = null){
        if(!funcaoSim){
            funcaoSim = function () {return true;};
        }
        if(!funcaoNao){
            funcaoNao = function () {return true;};
        }
        this.alert = this.alertCtrl.create({
            title: 'Atenção',
            message: mensagem,
            buttons:[
                {
                    text: 'Sim',
                    role: 'sim',
                    handler: () => funcaoSim()
                },
                {
                    text: 'Não',
                    role: 'nao',
                    handler: () => funcaoNao()
                }
            ],
            enableBackdropDismiss: false
        });
        this.alert.present();
    }
}