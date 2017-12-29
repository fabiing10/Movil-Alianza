import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UserModel} from '../../models/user.model';
import {GeneralServiceProvider} from '../../providers/general-service';

@IonicPage()
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage extends ProtectedPage {

  public user: UserModel;
  public users: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public generalService: GeneralServiceProvider) {

    super(navCtrl, navParams, storage);

    this.storage.get('user').then(user => {
      this.user = user;
    });
    this.generalService.getAllUsersNetwork().then(users => this.users = users);



  }
  profileUser(user) {
    this.navCtrl.push('ProfilePage', {user: user});
  }
  ionViewDidLoad() {
    console.log("Cargando el ionViewDidLoad")
    this.menuCtrl.enable(true);
  }

}
