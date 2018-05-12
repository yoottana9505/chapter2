import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from "@angular/forms";

/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})
export class InputPage {

  private formData:any;
  public name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private formBuilder:FormBuilder, public alertCtrl:AlertController) {
      this.formData = formBuilder.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required]
      });
    }

  saveData(){
    let alert = this.alertCtrl.create({
      title:"ข้อมูล",
      subTitle:"ชื่อ:"+this.formData.value.firstname+"นามสกุล:"+this.formData.value.lastname,
      buttons:["OK"]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

}
