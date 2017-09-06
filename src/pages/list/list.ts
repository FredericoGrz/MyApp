import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { LoaderService } from '../../services/loader'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoaderService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    
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
  }

  

  itemTapped(item) {
    this.loadingService.exibirLoading("Recuperando informações sobre " + item.title);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailPage, {
      selectedItem: item
    });
    this.loadingService.ocultarLoading();
  }
}
