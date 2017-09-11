import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { BaseClass} from '../../../baseClass/baseClass';

@Component({
    selector: 'page-usuario',
    templateUrl: 'usuario.html'
})

export class UsuarioPage{
    constructor (public navParams: NavParams, public baseClass: BaseClass){
        this.verificarAcao();
    }

    verificarAcao(){
        this.baseClass.verificarAcao(this.navParams.get('acao'));
        
        console.log('ALTERAR: ' + this.baseClass.isAlterar)
        console.log('SEM ACAO: ' + this.baseClass.semAcao)
        if(this.baseClass.semAcao){
            //função de retornar para a tela de listagem
        }
    }

}