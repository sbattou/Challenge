import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DisplayPage} from "../display/display";
import {RegisterPage} from "../register/register";

import {AngularFireAuth} from "angularfire2/auth";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  myform: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public afAuth: AngularFireAuth) {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  login() {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(
        ()=> {
          this.navCtrl.push(DisplayPage)
        },
        (error)=> {
          let errorCode = error.code;
          let errorMessage = error.message;
          let toast = this.toastCtrl.create({
            message: errorMessage,
            duration: 3000,
            position: "top"
          });
          toast.present();
        }
      )
    }
    catch (e) {
     console.log(e);
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
