import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAttractionsPage } from './edit-attractions';

@NgModule({
  declarations: [
    EditAttractionsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAttractionsPage),
  ],
})
export class EditAttractionsPageModule {}
