import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "angularfire2/auth";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  myform: FormGroup;
  name: FormControl;
  phone: FormControl;
  email: FormControl;
  password: FormControl;
  website: FormControl;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public afAuth: AngularFireAuth) {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.pattern("[A-Z]*[-a-zA-Z]*")
    ]);
    this.phone = new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]*")
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]);
    this.website = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      phone: this.phone,
      email: this.email,
      password: this.password,
      website: this.website
    });
  }

  submitForm(){
    let message: string;
    if (this.myform.valid){
      try {
        this.afAuth.auth.createUserWithEmailAndPassword(this.email.value,this.password.value).then(
          ()=> {
            message = "Your account has been created successfully!";
            let toast = this.toastCtrl.create({
              message: message,
              duration: 3000,
              position: "top"
            });
            toast.present();
            this.navCtrl.setRoot(HomePage);
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
    else {
      message = "The information you provided is invalid please review before submitting";
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: "top"
      });
      toast.present();
    }
  }
}
