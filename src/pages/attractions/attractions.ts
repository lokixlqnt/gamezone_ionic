import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShowAttractionsPage } from '../show-attractions/show-attractions';
import * as firebase from 'firebase/app';

/**
 * Generated class for the AttractionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attractions',
  templateUrl: 'attractions.html',
})
export class AttractionsPage {

  attractions = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref("attractions/").on("value", (snapshot) => {
      this.attractions = []
      snapshot.forEach((childSnapshot) => {
        this.attractions.push({ id: childSnapshot.key,
                                nom: childSnapshot.val().nom,
                                exp: childSnapshot.val().exp,
                                photo: childSnapshot.val().photo
         })
        return false
      })
    })
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad AttractionsPage');
      }

  goToDetails(id) {
    this.navCtrl.push(ShowAttractionsPage, {id: id})
  }

}
