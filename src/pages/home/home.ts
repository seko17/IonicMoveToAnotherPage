import { Component } from '@angular/core';
import { NavController,ToastController, UrlSerializer  } from 'ionic-angular';
import { ContactPage } from "../contact/contact";
@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
 user:any = {
   name: "",
   email: "",
   age:"",
   bio:""
 };
 

 showContact:Boolean = false;
 constructor(public navCtrl: NavController,public toastController: ToastController) {}
 
 openContact() {
   if(this.user.name==""){
    const toast =  this.toastController.create({
      message: 'name cannot be empty',
      duration: 2000
    });
    toast.present();
   }else if(this.user.email==""){
    const toast =  this.toastController.create({
      message: 'email cannot be empty',
      duration: 2000
    });
    toast.present();
   }else if (this.user.age==""){
    const toast =  this.toastController.create({
      message: 'age cannot be empty',
      duration: 2000
    });
    toast.present();}
    else if (this.user.bio==""){
      const toast =  this.toastController.create({
        message: 'bio  cannot be empty',
        duration: 2000
      });
      toast.present();}
else{
   this.navCtrl.push(ContactPage, { user: this.user });
}

  
 }
 toggleContact() {
   this.showContact = !this.showContact;
 }


}