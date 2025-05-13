import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonItem, IonLabel, IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-account-recovery-fail',
  templateUrl: './account-recovery-fail.page.html',
  styleUrls: ['./account-recovery-fail.page.scss'],
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
  ]
})
export class AccountRecoveryFailPage implements OnInit {
  
  constructor(private router: Router) {}
  

  ngOnInit(): void {
    console.log('NameRecoveryFail initialized');
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Adjust the path as necessary
  }
}