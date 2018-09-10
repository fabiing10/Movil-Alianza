import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../providers/auth-service';

import {UserModel} from '../../models/user.model';
/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  private contactData: FormGroup;
  contactGroup: string = "form";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController,
              public storage: Storage,
              public formBuilder: FormBuilder) {

        // Validate Form
        this.contactData = this.formBuilder.group({
          nombre: ['', Validators.compose([Validators.required])],
          asunto: ['', Validators.compose([Validators.required])],
          email: ['', Validators.compose([Validators.required])],
          telefono: ['', Validators.compose([Validators.required])],
          mensaje: ['', Validators.compose([Validators.required])],
        });

  }
  Submitcontact(){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
