import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Input, OnChanges } from '@angular/core';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  user:any = {};
  @Input() userInput;
  constructor(public navCtrl: NavController, public  params:NavParams) {
    this.user = params.get('user');
  }
  ngOnChanges() {
    if(this.userInput) {
        this.user = this.userInput;
    }
  }

}
