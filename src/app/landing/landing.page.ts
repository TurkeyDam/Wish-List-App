import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';


@Component({
  selector: 'app-landing',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonIcon, 
    IonButton],
})
export class LandingPage {
  constructor(private router: Router) {
    addIcons({
      'logo-ionic': logoIonic,
    });
  }
  navigateToLoginOrRegister() {
    this.router.navigate(['/login']); // Adjust the path as necessary
  }
}


