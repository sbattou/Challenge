import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  }

  register() {
  }

}
