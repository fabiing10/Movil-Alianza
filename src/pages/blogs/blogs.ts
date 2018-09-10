import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { PostPage } from '../post/post';
import { Http } from '@angular/http';
/**
 * Generated class for the BlogsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-blogs',
  templateUrl: 'blogs.html',
})
export class BlogsPage {

  url: string = 'https://alianzaparaelprogreso.co/wp-json/wp/v2/posts';
  items: any;
  page: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.http.get( this.url )
        .map(res => res.json())
        .subscribe(data => {
          this.items = data;
          console.log(data)
    });
  }

  goToPost(item){
      let myModal = this.modalCtrl.create(PostPage,{item: item});
      myModal.present();

  }

}
