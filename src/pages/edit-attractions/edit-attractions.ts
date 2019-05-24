import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase/app';

/**
 * Generated class for the EditAttractionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-attractions',
  templateUrl: 'edit-attractions.html',
})
export class EditAttractionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAttractionsPage');
  }
  editAttraction() {
    firebase.database("attractions/" + this.id).update({
      id: this.id,
      nom: this.nom,
      exp: this.exp,
      photo: this.photo,
      desc: this.desc
    })
  }
}
