import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-account-recovery-success',
  templateUrl: './account-recovery-success.page.html',
  styleUrls: ['./account-recovery-success.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    IonText,
    IonButton,
  ]
})
export class AccountRecoverySuccessPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
