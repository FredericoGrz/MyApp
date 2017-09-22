import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular'; 
import { Page } from 'ionic-angular/navigation/nav-util';

@Injectable()
export class Navigation{
    navigation: NavController;
    constructor(private navController: NavController, private events: Events){

    }

    public voltarMetodo(componente: Page, msg: string){
        this.navController.pop();
        this.navController.push(componente, {
            msg: msg
        });
    }

    // pass in a callback when transitioning
    
    //  // callback...
    //  myCallbackFunction = function(_params) {
    //      return new Promise((resolve, reject) => {
    //         this.params = params;
    //              resolve();
    //          });
    //  }
    
    //  // push page...
    //  this.navController.push(OtherPageComponent, {
    //     callback: myCallbackFunction
    // });
    // in the OtherPageComponent
    
    //  this.callback = this.navParams.get("callback")
    
    //  this.callback(param).then(()=>{
    //     this.navController.pop();
    //  });

    

}