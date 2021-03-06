import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';
import { LoaderService } from '../../../services/loader';
import { AlertService } from '../../../services/alert';
import { ToasterService } from '../../../services/toaster/toaster';
import { BaseClass } from '../../../baseClass/baseClass';
import { Usuario, UsuarioService } from '../usuario.service';

@Component({
    selector: 'page-usuario-list',
    templateUrl: 'usuario-list.html'
})

export class UsuarioListPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;
    loader: any;
    usuarios: Promise<Usuario[]>;

    constructor(private userService : UsuarioService, public navCtrl: NavController, private toasterService: ToasterService, private navParams: NavParams, public loadingService: LoaderService, public baseClass: BaseClass, private alertService: AlertService) {
        this.toasterService.toasterSuccess(this.navParams.get('msgSuccess'));
        this.toasterService.toasterFail(this.navParams.get('msgFail'));
        // Let's populate this page with some filler content for funzies
        // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        //   'american-football', 'boat', 'bluetooth', 'build'];

        this.icons = ['shirt'];
        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
        // this.usuarios = userService.buscarUsuariosAtivos();
    }
    

    //Abre a tela de usuario passando o proprio usuario e a ação Detalhar.
    consultarUsuario(usuario) {
        this.loadingService.exibirLoading("Recuperando informações sobre " + usuario.title);
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(UsuarioPage, {
            selectedItem: usuario,
            acao: this.baseClass.DETALHAR
        });
        this.loadingService.ocultarLoading();
    }

    alterarUsuario(usuario) {
        this.loadingService.exibirLoading("Recuperando informações sobre " + usuario.title);
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(UsuarioPage, {
            selectedItem: usuario,
            acao: this.baseClass.ALTERAR
        });
        this.loadingService.ocultarLoading();
    }

    //Exibe um alerta de confirmação de exclusão, passando a função que irá efetuar a exclusão
    excluirUsuario(usuario) {
        this.alertService.exibirAlertaSimNao("Deseja excluir o " + usuario.title, function () { console.log('Usuario ' + usuario.title + ' excluido com sucesso !!'); });
    }

    //Abre a tela de inserção de usuario passando a ação como INCLUIR.
    incluirUsuario() {
        this.navCtrl.push(UsuarioPage, {
            acao: this.baseClass.INCLUIR
        });
    }
}