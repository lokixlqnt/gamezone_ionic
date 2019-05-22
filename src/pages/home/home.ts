import { Component } from '@angular/core';
import { NavController, AlertController, Button } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  showLogin() {
  const prompt = this.alertCtrl.create({
    title: 'Login',
    message: "Entrez vos informations de connexion",
    inputs: [
      {
        name: 'pseudo',
        placeholder: 'Pseudo'
      },
      {
        name: 'pass',
        placeholder: 'Mot de passe'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
          console.log('Saved clicked');
        }
      }
    ]
  });
  prompt.present();
}
showSignup() {
const prompt = this.alertCtrl.create({
  title: 'Signup',
  message: "Entrez vos informations de connexion",
  inputs: [
    {
      name: 'pseudo',
      placeholder: 'Pseudo'
    },
    {
      name: 'pass',
      placeholder: 'Mot de passe'
    },
    {
      name: 'mail',
      placeholder: 'E-mail'
    }
  ],
  buttons: [
    {
      text: 'Cancel',
      handler: data => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Login',
      handler: data => {
        console.log('Saved clicked');
      }
    }
  ]
});
prompt.present();
}
}
