import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DisplayPage} from "../display/display";
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  myform: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,) {
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
    if (this.myform.valid && this.email.value == "admin@gmail.com" && this.password.value == "admin"){
      this.navCtrl.push(DisplayPage);
    }
    else {
      let message = "The Email or Password you entered is not valid";
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: "top"
      });
      toast.present();
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
