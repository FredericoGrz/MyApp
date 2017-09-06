import { LoadingController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
    loader: Loading;
    constructor(private loadingCtrl: LoadingController){

    }

    exibirLoading(content:string = null):void{
        this.loader = this.loadingCtrl.create({
            content: content ? content : "Recuperando informações..."
        });
        this.loader.present();
    }

    ocultarLoading():void{
        this.loader.dismiss();
    }

}