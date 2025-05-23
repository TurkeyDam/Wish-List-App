import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonItem, IonLabel, IonInput, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: 
  [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    IonLabel,
    IonButton,
    IonItem,
    IonInput,
    IonButtons,
    IonBackButton,
    IonIcon,
    ReactiveFormsModule,
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    addIcons({
      'logo-ionic': logoIonic,
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']); // Adjust the path as necessary
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Adjust the path as necessary
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful:', this.loginForm.value);
      // Here you can handle your login logic (e.g., call an authentication service)
    } else {
      console.log('Form is invalid');
    }
  
    
  }

  ngOnInit() {
  }

}
