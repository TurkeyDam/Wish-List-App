import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonItem, IonLabel, IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-email-recovery',
  templateUrl: './email-recovery.page.html',
  styleUrls: ['./email-recovery.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    IonLabel,
    IonButton,
    IonItem,
    IonInput,
    ReactiveFormsModule,
  ]
})
export class EmailRecoveryPage implements OnInit {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful:', this.loginForm.value);
      // Here you can handle your login logic (e.g., call an authentication service)
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit(): void {
    console.log('NameRecoveryPage initialized');
  }

  navigateToNameRecovery() {
    this.router.navigate(['/name-recovery']); // Adjust the path as necessary
  }

}
