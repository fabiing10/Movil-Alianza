import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  bgImage: any;
  bgImage2: any;
  bgImage3: any;
  bgJuridica: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bgImage = '../../assets/images/service_01.jpg';
    this.bgImage2 = '../../assets/images/service_2.jpg';
    this.bgImage3 = '../../assets/images/service_03.jpg';
    this.bgJuridica = '../../assets/images/abogados.jpg';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

}
