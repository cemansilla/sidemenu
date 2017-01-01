import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Validators, FormBuilder, FormControl } from '@angular/forms';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-recover',
  templateUrl: 'recover.html'
})
export class RecoverPage {
    email;
    recover;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public toastCtrl: ToastController) {
        this.recover = this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.required,
                this.emailValidator.bind(this)
            ])]
        });
    }

    doRecover(){
        let toast = this.toastCtrl.create({
            message: 'Instrucciones enviadas al email ' + this.email,
            position: "middle",
            duration: 3000
        });
        toast.present();
    }

    emailValidator(control: FormControl): {[s: string]: boolean} {
        var email = control.value;
        var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;

        if(!regex.test(email)){
            return {invalidEmail: true};
        }
    }
}
