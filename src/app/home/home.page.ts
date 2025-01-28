import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonIcon, 
    IonButton],
})
export class HomePage {
  constructor(private router: Router) {
    addIcons({
      'logo-ionic': logoIonic,
    });
  }
  navigateToLoginOrRegister() {
    this.router.navigate(['/login']); // Adjust the path as necessary
  }
}


