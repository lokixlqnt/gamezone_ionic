import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAttractionsPage } from './add-attractions';

@NgModule({
  declarations: [
    AddAttractionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAttractionsPage),
  ],
})
export class AddAttractionsPageModule {}
