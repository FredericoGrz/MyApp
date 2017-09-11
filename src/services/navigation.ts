import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
@Injectable()
export class Navigation{
    navigation: NavController;
    constructor(private navController: NavController){

    }

    public push(componente: Component, params: object){

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