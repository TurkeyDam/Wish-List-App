import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonIcon, IonInput, IonList, IonLabel, IonItem, IonInputPasswordToggle } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
// import { eye, logoIonic } from 'ionicons/icons';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonButton,
    // IonIcon,
    IonInput,
    IonList,
    IonLabel,
    IonItem,
    IonButtons,
    IonBackButton,
    IonInputPasswordToggle
  ],
})
export class RegistrationPage {
  accountName: string = '';
  phoneNumber: string = '';
  birthday: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;

  constructor() {
    // addIcons({
    //   'eye': eye,
    //   'eye-off': eye,
    // });

  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Here you can add your registration logic, e.g., sending data to a server
    console.log('Registration Data:', {
      accountName: this.accountName,
      phoneNumber: this.phoneNumber,
      birthday: this.birthday,
      password: this.password,
    });

    alert('Registration successful!');
  }
}