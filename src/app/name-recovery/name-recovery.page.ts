import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonItem, IonLabel, IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-name-recovery',
  templateUrl: './name-recovery.page.html',
  styleUrls: ['./name-recovery.page.scss'],
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
export class NameRecoveryPage implements OnInit {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      birthday: ['', [Validators.required, Validators.minLength(10)]],
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

}
