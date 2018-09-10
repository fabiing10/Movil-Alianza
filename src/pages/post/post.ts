import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
/**
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  
  item: any;
  constructor(public platform: Platform,
              public navCtrl: NavController,
              public navParams: NavParams,
              public sanitizer: DomSanitizer,
              public viewCtrl: ViewController) {

              platform.ready().then(() => {
                  this.item = navParams.get("item");
                  console.log(this.item)
              });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
