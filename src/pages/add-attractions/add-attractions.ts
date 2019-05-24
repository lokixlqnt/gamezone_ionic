import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated class for the AddAttractionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-attractions',
  templateUrl: 'add-attractions.html',
})
export class AddAttractionsPage {

  id: ""
  nom: ""
  exp: ""
  photo: ""
  desc: ""

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAttractionsPage');
  }

  addAttraction() {
    firebase.database().ref("attractions").push({
      nom: this.nom,
      exp: this.exp,
      photo: this.photo,
      desc: this.desc
    })
  }
}
