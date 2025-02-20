import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon, IonFooter, IonToolbar, IonButtons, IonButton } from '@ionic/angular/standalone';
import { home, search, balloon, person } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
  standalone: true,
  imports: 
  [
    IonIcon,
    IonButton,
    IonFooter,
    IonToolbar,
    IonButtons,
  ]
})
export class BottomNavBarComponent  implements OnInit {

  icons = {
    home,
    search,
    balloon,
    person
  };

  constructor(private router: Router) {
    addIcons({ addOutline });
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  openAddItem() {
    // Logic to open the add item modal or navigate to the add item page
    this.router.navigate(['/add-item-modal']);
  }

  goToHome() {
    this.router.navigate(['/home-page']);
  }

  goToEvents() {
    this.router.navigate(['/events']);
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  ngOnInit() {}
}
