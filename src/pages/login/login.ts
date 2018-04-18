import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { User } from '../../shared/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../../pages/tabs/tabs';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  formGrp: FormGroup;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,private toastCtrl: ToastController) {
    
    this.formGrp = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        if (result) {
        this.navCtrl.setRoot(TabsPage);
      }  
    }
    catch (e) {
      console.error(e);
      this.toastBand(e.message);
    }
  }
 
  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    } catch (e) {
      console.error(e);
      this.toastBand(e.message);

    }
  }

  toastBand(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


}
