import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRouterOutlet, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { BottomNavBarComponent } from '../bottom-nav-bar/bottom-nav-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: 
  [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonRouterOutlet,
    BottomNavBarComponent
  ]
})
export class HomePage implements OnInit {

  constructor() { }
  
  images = Array.from({ length: 8 }, (_, i) => `./assets/img/${i + 1}.jpg`); 
  
  ngOnInit() {
  }

  // openAddItemModal() {
  //   const modal = await this.modalCrl.create({
  //     component: AddItemModalPage,
  //   });
  //   modal.onDidDismiss().then((data) => {
  //     if (data.data) {
  //       console.log('New Item:', data.data);
  //       // Handle the new item data here (e.g., add it to a list)
  //     }
  //   });
  
  //   return await modal.present();
  //   this.router.navigate(['/add-item-modal']);
  // }
}
