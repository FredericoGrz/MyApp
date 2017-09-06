import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})
export class DetailPage {
    selectedItem: any;
    constructor(public navParams: NavParams){
        this.selectedItem = navParams.get('selectedItem');
    }
}