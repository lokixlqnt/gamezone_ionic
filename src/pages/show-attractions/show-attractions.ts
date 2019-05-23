import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated class for the ShowAttractionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-show-attractions',
  templateUrl: 'show-attractions.html',
})
export class ShowAttractionsPage {

  id: ""
  nom: ""
  exp: ""
  photo: ""
  desc: ""

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get("id")
    firebase.database().ref("attractions/"+this.id).on("value", (snapshot)=>{
      this.nom = snapshot.val().name
      this.exp = snapshot.val().exp
      this.photo = snapshot.val().photo
      this.desc = snapshot.val().desc
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowAttractionsPage');
  }

}
