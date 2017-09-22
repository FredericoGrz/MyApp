import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { BaseClass } from '../../../baseClass/baseClass';
import { UsuarioListPage } from '../usuario-list/usuario-list';

@Component({
    selector: 'page-usuario',
    templateUrl: 'usuario.html'
})

export class UsuarioPage {
    public Usuario: Object;
    constructor(private navParams: NavParams, private navCtrl: NavController, public baseClass: BaseClass) {
        this.verificarAcao();
    }

    salvar(acao) {
        if (acao == this.baseClass.ALTERAR) {
            this.navCtrl.setRoot(UsuarioListPage, {
                msgFail: 'Erro ao Alterar o usuario'
            });
        }
        else if (acao == this.baseClass.INCLUIR) {
            this.navCtrl.setRoot(UsuarioListPage, {
                msgSuccess: 'Usuário Criado com sucesso'
            });
        }
    }

    verificarAcao() {
        this.baseClass.verificarAcao(this.navParams.get('acao'));
        if (this.baseClass.semAcao) {
            //função de retornar para a tela de listagem
        }

        this.Usuario = this.navParams.get('selectedItem');
    }

}