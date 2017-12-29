import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertiesPage } from './properties';

@NgModule({
  declarations: [
    PropertiesPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertiesPage),
  ],
  exports: [
    PropertiesPage
  ]
})
export class PropertiesPageModule {}
