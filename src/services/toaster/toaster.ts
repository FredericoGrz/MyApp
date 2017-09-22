import { ToastController, Toast } from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()
export class ToasterService {
    toaster: Toast
    constructor(private toasterCtrl: ToastController) {

    }

    public toasterSuccess(mensagem: string, showCloseButton: boolean = false, duration: number = 3000) {
        if (mensagem) {
            var toasterOptions = {
                message: mensagem, duration: duration, position: 'top',
                cssClass: 'toast-success', showCloseButton: showCloseButton, closeButtonText: 'Ok'
            };

            this.toaster = this.toasterCtrl.create(toasterOptions);
            this.toaster.present();
        }
    }

    public toasterFail(mensagem: string, showCloseButton: boolean = true, duration: number = null) {
        if (mensagem) {
            var toasterOptions = {
                message: mensagem, duration: duration, position: 'top',
                cssClass: 'toast-fail', showCloseButton: showCloseButton, closeButtonText: 'Ok'
            };

            this.toaster = this.toasterCtrl.create(toasterOptions);
            this.toaster.present();
        }
    }
}