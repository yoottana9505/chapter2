import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class SearchbarPage {

  searchQuery: string='';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.intializeItems();
  }

  intializeItems() {
    this.items = [
      'มหาสารคาม',
      'บุรีรัมย์',
      'สุรินทร์',
      'ร้อยเอ็ด',
      'นครราชสีมา',
    ];
  }

  getItems(ev:any) {
    this.intializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((items) => {
        return (items.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchbarPage');
  }

}
