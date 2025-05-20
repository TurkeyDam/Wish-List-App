import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonCardTitle, IonCardHeader } from '@ionic/angular/standalone';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset-link',
  templateUrl: './password-reset-link.page.html',
  styleUrls: ['./password-reset-link.page.scss'],
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
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
  ]
})
export class PasswordResetLinkPage implements OnInit {

  
  constructor() {
  }
  
  onSubmit() {
  }

  ngOnInit(): void {
    console.log('passwordResetLink initialized');
  }

}
